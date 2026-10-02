"use client";

import { useRef, useState, type FormEvent } from "react";
import { Icon } from "./Icon";
import { SITE } from "./site";

const TOPICS = [
  "Business growth & strategy",
  "Process improvement & AI",
  "Software implementation",
  "Talent & performance management",
  "Shopfloor improvement",
  "Training programmes",
  "Products — hunR, TraQ, Appraisal, AI Agents",
  "Something else",
];

type Values = { name: string; company: string; email: string; phone: string; topic: string; msg: string };
type Errors = Partial<Record<keyof Values, string>>;

const EMPTY: Values = { name: "", company: "", email: "", phone: "", topic: "", msg: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "That email address doesn't look right.";
  if (v.phone.trim() && !/^[+\d][\d\s().-]{5,}$/.test(v.phone.trim())) e.phone = "Please enter a valid phone number, or leave it blank.";
  if (!v.msg.trim()) e.msg = "Please tell us a little about where your business stands.";
  return e;
}

/** Builds the mailto: link. The message is composed in the visitor's own email app; nothing is sent from the site. */
function mailtoHref(v: Values) {
  const subject = `Website enquiry${v.topic ? ` — ${v.topic}` : ""} — ${v.name.trim()}`;
  const details = [
    `Name: ${v.name.trim()}`,
    v.company.trim() ? `Company: ${v.company.trim()}` : "",
    `Email: ${v.email.trim()}`,
    v.phone.trim() ? `Phone: ${v.phone.trim()}` : "",
    v.topic ? `Topic: ${v.topic}` : "",
  ].filter(Boolean);
  const body = details.join("\n") + "\n\n" + v.msg.trim();
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [v, setV] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [href, setHref] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setV((p) => ({ ...p, [k]: e.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(v);
    setErrors(errs);
    const first = (Object.keys(errs) as (keyof Values)[])[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`#${first}`)?.focus();
      return;
    }
    const link = mailtoHref(v);
    setHref(link);
    window.location.href = link;
  }

  const field = (id: keyof Values, label: string, type: string, auto: string, optional?: boolean) => (
    <div className="fld">
      <label htmlFor={id}>{label}{optional ? <i> (optional)</i> : null}</label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={auto}
        value={v[id]}
        onChange={set(id)}
        aria-invalid={errors[id] ? true : undefined}
        aria-describedby={errors[id] ? `${id}-err` : undefined}
        aria-required={!optional || undefined}
      />
      {errors[id] ? <span id={`${id}-err`} className="err">{errors[id]}</span> : null}
    </div>
  );

  if (href) {
    return (
      <div className="cform" role="status" aria-live="polite">
        <div className="thanks">
          <span className="ok"><Icon name="check" size={26} stroke={2.5} /></span>
          <h3>Thank you, {v.name.trim().split(" ")[0]}.</h3>
          <p>
            Your email app should now be open with your message to Gopal ready to send — just press <strong>Send</strong> there. Nothing is sent until you do.
          </p>
          <p>
            Nothing opened? Email <a href={`mailto:${SITE.email}`} style={{ color: "#0073B0", fontWeight: 700 }}>{SITE.email}</a> directly, or call <a href={SITE.phoneHref} style={{ color: "#0073B0", fontWeight: 700 }}>{SITE.phone}</a>.
          </p>
          <div className="acts">
            <a href={href} className="btn btn-primary">Open email again</a>
            <button type="button" className="btn btn-ghost" onClick={() => setHref(null)}>Edit message</button>
          </div>
        </div>
      </div>
    );
  }

  const errCount = Object.values(errors).filter(Boolean).length;

  return (
    <form ref={formRef} className="cform ld l6" aria-label="Start the conversation" noValidate onSubmit={onSubmit}>
      <div>
        <h3>Start the conversation</h3>
        <p className="sub">Tell us a little about your business and we&apos;ll get back to you.</p>
      </div>
      {errCount ? <div className="form-err" role="alert">Please fix the {errCount === 1 ? "field" : `${errCount} fields`} marked below.</div> : null}
      <div className="two">
        {field("name", "Full name", "text", "name")}
        {field("company", "Company", "text", "organization", true)}
        {field("email", "Email", "email", "email")}
        {field("phone", "Phone", "tel", "tel", true)}
      </div>
      <div className="fld">
        <label htmlFor="topic">What would you like to talk about? <i>(optional)</i></label>
        <select id="topic" name="topic" value={v.topic} onChange={set("topic")}>
          <option value="">Choose a topic</option>
          {TOPICS.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div className="fld">
        <label htmlFor="msg">Where does your business stand today?</label>
        <textarea
          id="msg"
          name="msg"
          rows={5}
          value={v.msg}
          onChange={set("msg")}
          aria-invalid={errors.msg ? true : undefined}
          aria-describedby={errors.msg ? "msg-err" : undefined}
          aria-required="true"
        />
        {errors.msg ? <span id="msg-err" className="err">{errors.msg}</span> : null}
      </div>
      <button type="submit" className="send">
        Send message <Icon name="arrow" size={18} />
      </button>
      <p className="alt">
        Prefer to talk? Call <a href={SITE.phoneHref}>{SITE.phone}</a>
      </p>
    </form>
  );
}
