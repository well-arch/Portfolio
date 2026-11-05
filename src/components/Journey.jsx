import { certifications, education, experience, profile } from "../data.js";
import { useI18n } from "../i18n.jsx";
import { DownloadIcon } from "./Icons.jsx";
import Section from "./Section.jsx";

function Timeline({ items }) {
  const { tr } = useI18n();
  return (
    <ol className="mt-5 border-l border-line">
      {items.map((item) => (
        <li key={item.years + tr(item.title)} className="relative pb-8 pl-6 last:pb-0">
          <span aria-hidden="true" className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-accent" />
          <p className="text-sm text-muted">{item.years}</p>
          <h4 className="mt-1 font-display text-xl font-semibold leading-snug tracking-tight">{tr(item.title)}</h4>
          <p className="mt-1 text-muted">{tr(item.place)}</p>
          {item.detail && <p className="mt-1 font-medium text-accent">{tr(item.detail)}</p>}
          {item.points && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-muted marker:text-accent">
              {tr(item.points).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function Journey() {
  const { tr, ui } = useI18n();
  const { availability } = profile;
  return (
    <Section id="journey" title={ui.journey.title}>
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-12">
          {experience.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold tracking-tight">{ui.journey.experience}</h3>
              <Timeline items={experience} />
            </div>
          )}
          <div>
            <h3 className="text-2xl font-bold tracking-tight">{ui.journey.education}</h3>
            <Timeline items={education} />
          </div>
          {certifications.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold tracking-tight">{ui.journey.certifications}</h3>
              <ul className="mt-5 space-y-3">
                {certifications.map((cert) => (
                  <li key={cert.name}>
                    {cert.url ? (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-link">
                        {cert.name}
                      </a>
                    ) : (
                      <span className="font-medium">{cert.name}</span>
                    )}
                    <span className="block text-muted">{cert.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <aside className="self-start rounded-3xl border border-line bg-surface/70 p-6 sm:p-7">
          <h3 className="text-2xl font-bold tracking-tight">{ui.journey.looking}</h3>
          <p className="mt-4 text-lg font-semibold">
            {tr(availability.title)} {tr(availability.from)}
          </p>
          <p className="mt-2 text-muted">{tr(availability.detail)}</p>
          <p className="mt-4 text-muted">
            {ui.journey.where}
            {profile.location}
          </p>
          <a href={profile.cv} download className="btn-secondary mt-6 w-full">
            <DownloadIcon />
            {ui.journey.cv}
          </a>
        </aside>
      </div>
    </Section>
  );
}
