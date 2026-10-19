import type { ReactNode } from "react";

type ProcessStep = { title: string; description: string };

export default function ProcessSection({ id, title, eyebrow = "HOW IT WORKS", steps, children }: {
  id: string;
  title: string;
  eyebrow?: string;
  steps: readonly [ProcessStep, ProcessStep, ProcessStep, ProcessStep];
  children?: ReactNode;
}) {
  return (
    <section className="site-process" id={id} aria-labelledby={`${id}-heading`}>
      <div className="site-process__heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`${id}-heading`}>{title}</h2>
      </div>
      <ol className="site-process__steps">
        {steps.map((step, index) => (
          <li key={step.title}>
            <span className="site-process__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
      {children && <div className="site-process__action">{children}</div>}
    </section>
  );
}
