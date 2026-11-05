import { Link } from "react-router-dom";
import { profile, pipeline } from "../data.js";
import { useI18n } from "../i18n.jsx";
import { ArrowIcon, CheckIcon, DownloadIcon, PinIcon } from "./Icons.jsx";
import SocialLinks from "./SocialLinks.jsx";

function Portrait() {
  const { tr, ui } = useI18n();
  return (
    <div className="relative mx-auto w-full max-w-sm lg:mr-4 lg:max-w-none">
      <div className="aspect-[7/8] overflow-hidden rounded-[2rem] border border-line bg-surface">
        {profile.photo ? (
          <img src={profile.photo} alt={ui.hero.photoAlt} width="600" height="700" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center" aria-hidden="true">
            <span className="font-display text-[7rem] font-bold tracking-tighter text-line sm:text-[9rem]">{profile.initials}</span>
          </div>
        )}
      </div>
      <p className="absolute -right-2 top-6 rounded-2xl border border-line bg-bg px-4 py-3 text-sm shadow-lg sm:-right-4">
        <span className="block text-muted">{ui.hero.available}</span>
        <span className="block font-semibold text-accent">{tr(profile.availability.from)}</span>
      </p>
    </div>
  );
}

function Pipeline() {
  const { tr, ui } = useI18n();
  return (
    <div className="mt-12 rounded-3xl border border-line bg-surface/70 p-6 sm:p-8 lg:mt-10">
      <h2 className="font-sans text-[0.95rem] font-semibold text-muted">{ui.pipeline.title}</h2>
      <ol className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
        {pipeline.map((stage, i) => (
          <li key={i} style={{ "--step": i }}>
            <div className="flex items-center">
              <span className="pipeline-dot flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent bg-accent text-on-accent">
                <CheckIcon />
              </span>
              {i < pipeline.length - 1 && <span className="pipeline-line ml-2 hidden h-px flex-1 bg-accent lg:block" />}
            </div>
            <h3 className="mt-3 font-sans font-semibold">{tr(stage.name)}</h3>
            <ul className="mt-1 space-y-0.5 font-mono text-[0.8rem] leading-6 text-muted">
              {stage.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Hero() {
  const { tr, ui } = useI18n();
  return (
    <section id="hero" className="mx-auto max-w-6xl px-5 pb-8 pt-12 sm:px-8 lg:pt-10">
      <div className="grid items-center gap-12 lg:grid-cols-[1.45fr_1fr]">
        <div>
          <h1 className="text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem]">
            {profile.firstName}
            <br />
            {profile.lastName}
          </h1>
          <p className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{tr(profile.role)}</p>
          <p className="mt-1 text-xl text-muted">{tr(profile.speciality)}</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{tr(profile.pitch)}</p>
          <p className="mt-5 flex items-center gap-2 text-muted">
            <PinIcon />
            {profile.location}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/#projects" className="btn-primary">
              {ui.hero.projects}
              <ArrowIcon />
            </Link>
            <Link to="/#contact" className="btn-secondary">
              {ui.hero.contact}
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
            <SocialLinks className="-ml-2.5" />
            <a href={profile.cv} download className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-muted transition-colors hover:text-accent">
              <DownloadIcon />
              {ui.hero.cv}
            </a>
          </div>
        </div>
        <Portrait />
      </div>
      <Pipeline />
    </section>
  );
}
