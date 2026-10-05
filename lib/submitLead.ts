export type LeadField = {
  label: string;
  value: string;
};

function cleanLabel(value: string) {
  return value.replace(/\s+/g, " ").replace(/[:*]+$/, "").trim();
}

function labelForControl(
  control: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
  index: number,
) {
  if (control.name) {
    return cleanLabel(
      control.name
        .replace(/^hero_/, "")
        .replace(/[_-]+/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase()),
    );
  }

  let label = control.closest("label");

  if (!label && control.id) {
    label = document.querySelector<HTMLLabelElement>(`label[for="${CSS.escape(control.id)}"]`);
  }

  if (label) {
    const clone = label.cloneNode(true) as HTMLLabelElement;
    clone.querySelectorAll("input, select, textarea, button").forEach((element) => element.remove());
    const text = cleanLabel(clone.textContent || "");
    if (text) return text;
  }

  if (control.getAttribute("aria-label")) {
    return cleanLabel(control.getAttribute("aria-label") || "");
  }

  if (control.id) {
    return cleanLabel(
      control.id
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase()),
    );
  }

  return `Field ${index + 1}`;
}

function collectFields(form: HTMLFormElement): LeadField[] {
  const fields: LeadField[] = [];
  const controls = Array.from(form.elements).filter(
    (element): element is HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement =>
      element instanceof HTMLInputElement ||
      element instanceof HTMLSelectElement ||
      element instanceof HTMLTextAreaElement,
  );

  controls.forEach((control, index) => {
    if (control.disabled || control.dataset.leadProtection) return;

    if (control instanceof HTMLInputElement) {
      const ignoredTypes = new Set(["submit", "button", "reset", "hidden", "file"]);
      if (ignoredTypes.has(control.type)) return;
      if ((control.type === "checkbox" || control.type === "radio") && !control.checked) return;
    }

    const value = control.value.trim();
    if (!value) return;

    fields.push({
      label: labelForControl(control, index),
      value,
    });
  });

  return fields;
}

export async function submitLeadForm(form: HTMLFormElement, formName: string) {
  const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (submitButton) submitButton.disabled = true;

  try {
    const started = Number((form.elements.namedItem("form_started") as HTMLInputElement | null)?.value);
    if (!started) throw new Error("Please refresh the page and try again.");
    // Autofill users can submit quickly. Wait rather than rejecting their lead.
    const remaining = 2100 - (Date.now() - started);
    if (remaining > 0) await new Promise((resolve) => setTimeout(resolve, remaining));
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formName,
        website: (form.elements.namedItem("company_website") as HTMLInputElement | null)?.value || "",
        elapsedMs: Date.now() - started,
        page: window.location.href,
        fields: collectFields(form),
      }),
    });

    const payload = (await response.json().catch(() => null)) as { error?: string } | null;

    if (!response.ok) {
      throw new Error(payload?.error || "We could not send your request.");
    }
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
}
