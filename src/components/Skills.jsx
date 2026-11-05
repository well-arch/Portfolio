import { skills } from "../data.js";
import { useI18n } from "../i18n.jsx";
import Section from "./Section.jsx";

export default function Skills() {
  const { tr, ui } = useI18n();
  return (
    <Section id="skills" title={ui.skills.title} intro={ui.skills.intro}>
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((group) => (
          <div key={tr(group.label)} className="grid gap-3 py-5 md:grid-cols-[15rem_1fr] md:gap-8">
            <dt className="font-semibold">{tr(group.label)}</dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={tr(item)} className={`token ${item.learning ? "border-dashed text-muted" : ""}`}>
                  {tr(item)}
                  {item.learning && ` (${ui.skills.learning})`}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
