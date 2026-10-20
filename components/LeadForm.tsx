"use client";

import { Children, cloneElement, isValidElement, useId, useRef, useState, type ComponentProps, type FormEvent, type ReactElement, type ReactNode } from "react";
import { collectFields, labelForControl } from "@/lib/submitLead";
import { validateLead } from "@/lib/leadValidation";

type Props = Omit<ComponentProps<"form">, "onSubmit"> & {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void | Promise<void>;
  step?: boolean;
  compactErrors?: boolean;
};
type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export default function LeadForm({ children, onSubmit, step = false, compactErrors = false, ...props }: Props) {
  const prefix = useId();
  const summary = useRef<HTMLDivElement>(null);
  const sending = useRef(false);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState("");

  function decorate(nodes: ReactNode, path = "field", labelId?: string): ReactNode {
    return Children.map(nodes, (node, index) => {
      if (!isValidElement(node)) return node;
      const element = node as ReactElement<Record<string, unknown>>;
      const key = `${path}-${index}`;
      const type = element.type;
      if (type === "button" && element.props.type === "submit") {
        const text = Children.toArray(element.props.children as ReactNode).filter(child => {
          if (!isValidElement(child)) return true;
          const hidden = (child.props as Record<string, unknown>)["aria-hidden"];
          return hidden !== true && hidden !== "true";
        });
        return cloneElement(element, { disabled: busy || element.props.disabled },
          <span className="form-button-text">{busy && !step ? "Sending your request…" : text}</span>,
          <span className="form-button-arrow" aria-hidden="true">→</span>,
        );
      }
      if (type === "label") {
        const id = `${prefix}-${key}-label`;
        const children = Children.map(element.props.children as ReactNode, child => {
          if (isValidElement(child) && (child.props as Record<string, unknown>).className === "form-label-text") {
            return cloneElement(child as ReactElement<Record<string, unknown>>, { id });
          }
          return child;
        });
        return cloneElement(element, {}, decorate(children, key, id));
      }
      if (["input", "select", "textarea"].includes(String(type)) && element.props.type !== "hidden") {
        const id = String(element.props.id || `${prefix}-${key}`);
        const error = errors[id];
        return <>{cloneElement(element, {
          id,
          "aria-labelledby": labelId || element.props["aria-labelledby"],
          "aria-invalid": error ? true : undefined,
          "aria-describedby": [element.props["aria-describedby"], error ? `${id}-error` : null].filter(Boolean).join(" ") || undefined,
        })}{error && <span className={compactErrors ? "sr-only" : "form-field-error"} id={`${id}-error`}>{error}</span>}</>;
      }
      if (element.props.children) return cloneElement(element, {}, decorate(element.props.children as ReactNode, key, labelId));
      return node;
    });
  }

  function showError(message: string, controls: Control[]) {
    const keyword = /phone/i.test(message) ? /phone/i : /email/i.test(message) ? /email/i : /ZIP/i.test(message) ? /zip/i : /your name/i.test(message) ? /(^|\s)name($|\s)/i : /describe/i.test(message) ? /details|description/i : null;
    const field = keyword ? controls.find((control, index) => keyword.test(labelForControl(control, index))) : undefined;
    setErrors(field ? { [field.id]: message } : {});
    setGeneralError(field ? "" : message);
    requestAnimationFrame(() => { if (compactErrors && field) field.focus(); else summary.current?.focus(); });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const controls = Array.from(form.elements).filter((element): element is Control =>
      (element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement) && !element.disabled && !element.dataset.leadProtection && element.type !== "hidden",
    );
    const invalid = Object.fromEntries(controls.filter(control => !control.validity.valid).map((control, index) => [control.id, `${labelForControl(control, index)}: ${control.validationMessage}`]));
    setGeneralError("");
    setStatus("");
    setErrors(invalid);
    if (Object.keys(invalid).length) {
      requestAnimationFrame(() => {
        if (compactErrors) controls.find(control => invalid[control.id])?.focus();
        else summary.current?.focus();
      });
      return;
    }
    if (!step) {
      const validationError = validateLead(collectFields(form));
      if (validationError) { showError(validationError, controls); return; }
    }
    try {
      sending.current = true;
      setBusy(true);
      if (!step) setStatus("Sending your request. Please wait.");
      await onSubmit(event);
      if (!step) setStatus("Thank you. Your request has been sent. Swift will contact you to discuss your project.");
    } catch (error) {
      setStatus("");
      showError(error instanceof Error && !(error instanceof TypeError) ? error.message : "We could not send your request. Please try again or call (352) 701-7458.", controls);
    } finally {
      sending.current = false;
      setBusy(false);
    }
  }

  const hasErrors = generalError || Object.keys(errors).length > 0;
  return <form method="post" {...props} noValidate onSubmit={handleSubmit}>
    {hasErrors && <div className="form-error-summary" ref={summary} tabIndex={-1} role="alert">
      <p>{generalError || "Please correct the highlighted fields and try again."}</p>
      {!compactErrors && Object.entries(errors).map(([id, message]) => <p key={id}><a href={`#${id}`} onClick={event => { event.preventDefault(); document.getElementById(id)?.focus(); }}>{message}</a></p>)}
    </div>}
    {decorate(children)}
    {!step && <p className="form-status" role="status" aria-live="polite" aria-atomic="true">{status}</p>}
  </form>;
}
