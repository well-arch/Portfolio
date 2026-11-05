import { useState } from "react";
import { profile } from "../data.js";
import { useI18n } from "../i18n.jsx";
import Section from "./Section.jsx";
import SocialLinks from "./SocialLinks.jsx";

function ContactForm() {
  const { ui } = useI18n();
  const [status, setStatus] = useState("idle");
  const endpoint = profile.contactEndpoint;

  const submit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { name, email, message } = Object.fromEntries(new FormData(form));

    if (!endpoint) {
      const subject = `${ui.contact.subject}${name}`;
      const body = `${message}\n\n${ui.contact.from}${name} <${email}>`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block font-medium">{ui.contact.formName}</span>
          <input name="name" type="text" required autoComplete="name" maxLength={100} className="field" />
        </label>
        <label className="block">
          <span className="mb-1.5 block font-medium">{ui.contact.formEmail}</span>
          <input name="email" type="email" required autoComplete="email" maxLength={200} className="field" />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block font-medium">{ui.contact.formMessage}</span>
        <textarea name="message" required rows={6} maxLength={1500} className="field resize-y" />
      </label>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
          {!endpoint ? ui.contact.prepare : status === "sending" ? ui.contact.sending : ui.contact.send}
        </button>
        {!endpoint && <p className="text-[0.95rem] text-muted">{ui.contact.prepareHint}</p>}
      </div>
      <div role="status" aria-live="polite">
        {status === "sent" && <p className="font-medium text-accent">{ui.contact.sent}</p>}
        {status === "failed" && (
          <p className="font-medium">
            {ui.contact.failed}{" "}
            <a href={`mailto:${profile.email}`} className="text-link">
              {profile.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

export default function Contact() {
  const { ui } = useI18n();
  return (
    <Section id="contact" title={ui.contact.title} intro={ui.contact.intro}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <dl className="space-y-5">
            <div>
              <dt className="text-sm text-muted">{ui.contact.email}</dt>
              <dd className="mt-0.5 break-words">
                <a href={`mailto:${profile.email}`} className="text-link text-lg">
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">{ui.contact.phone}</dt>
              <dd className="mt-0.5">
                <a href={`tel:+33${profile.phone.replace(/\s/g, "").slice(1)}`} className="text-link text-lg">
                  {profile.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">{ui.contact.location}</dt>
              <dd className="mt-0.5 text-lg">{profile.location}</dd>
            </div>
          </dl>
          <SocialLinks className="-ml-2.5 mt-6" />
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
