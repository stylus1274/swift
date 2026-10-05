"use client";

import { useEffect, useId, useRef } from "react";

export default function LeadProtection() {
  const id = useId();
  const started = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (started.current) started.current.value = String(Date.now());
  }, []);

  return (
    <>
      <div aria-hidden="true" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clipPath: "inset(50%)", pointerEvents: "none" }}>
        <label htmlFor={id}>Leave this field empty</label>
        <input id={id} name="company_website" type="text" tabIndex={-1} autoComplete="off" data-lead-protection="true" />
      </div>
      <input ref={started} name="form_started" type="hidden" defaultValue="" />
    </>
  );
}
