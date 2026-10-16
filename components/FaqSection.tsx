"use client";

import { useId, useLayoutEffect, useRef, type ReactNode } from "react";

type FaqItem = { question: ReactNode; answer: ReactNode };

type FaqSectionProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  items: FaqItem[];
  estimateHref: string;
  id?: string;
  headingId?: string;
};

// Transparent sections take their surface color from their nearest painted ancestor.
function surfaceColor(element: Element | null): string {
  while (element) {
    const color = getComputedStyle(element).backgroundColor;
    if (color !== "transparent" && color !== "rgba(0, 0, 0, 0)") return color;
    element = element.parentElement;
  }
  return "rgb(255, 255, 255)";
}

export default function FaqSection({
  eyebrow,
  title,
  description,
  items,
  estimateHref,
  id,
  headingId,
}: FaqSectionProps) {
  const instanceId = useId();
  const sectionRef = useRef<HTMLElement>(null);
  const titleId = headingId ?? `${instanceId}-heading`;

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    function updateBackground() {
      if (!section) return;
      const paper = "rgb(255, 254, 251)";
      const repeatsSurface = [section.previousElementSibling, section.nextElementSibling]
        .some((neighbor) => neighbor && surfaceColor(neighbor) === paper);
      section.dataset.surface = repeatsSurface ? "white" : "paper";
    }
    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  return (
    <section className="site-faq" id={id} aria-labelledby={titleId} ref={sectionRef}>
      <div className="site-faq__inner">
        <div className="site-faq__intro">
          <p className="site-faq__eyebrow">{eyebrow}</p>
          <h2 className="site-faq__title" id={titleId}>{title}</h2>
          {description && <p className="site-faq__description">{description}</p>}
          <a className="text-action site-faq__estimate" href={estimateHref}>
            <span className="text-action-label">Have another question? Ask for an estimate.</span>
            <span className="text-action-arrow" aria-hidden="true">→</span>
          </a>
        </div>
        <div className="site-faq__list">
          {items.map((item, index) => (
            <details className="site-faq__item" name={`${instanceId}-questions`} open={index === 0} key={index}>
              <summary className="site-faq__summary">
                <h3 className="site-faq__question">{item.question}</h3>
                <span className="site-faq__toggle" aria-hidden="true" />
              </summary>
              <div className="site-faq__answer"><p>{item.answer}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
