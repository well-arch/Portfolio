import { about } from "../data.js";
import { useI18n } from "../i18n.jsx";
import Section from "./Section.jsx";

export default function About() {
  const { tr, ui } = useI18n();
  return (
    <Section id="about" title={ui.about.title}>
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
          {tr(about.paragraphs).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div>
          <h3 className="font-sans text-[0.95rem] font-semibold text-muted">{ui.about.summary}</h3>
          <dl className="mt-3 divide-y divide-line border-y border-line">
            {about.highlights.map((item) => (
              <div key={item.value} className="py-4">
                <dt className="text-sm text-muted">{tr(item.title)}</dt>
                <dd className="mt-0.5 font-semibold">{item.value}</dd>
                <dd className="mt-0.5 text-[0.95rem] text-muted">{tr(item.detail)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
