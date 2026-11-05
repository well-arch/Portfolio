import { useState } from "react";
import { Link } from "react-router-dom";
import { categories, projects } from "../data.js";
import { useI18n } from "../i18n.jsx";
import { ArrowIcon } from "./Icons.jsx";
import Section from "./Section.jsx";

function ProjectCard({ project }) {
  const { tr, ui } = useI18n();
  const cover = project.images[0];
  return (
    <li>
      <Link
        to={`/projets/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/70 transition-colors hover:border-accent"
      >
        {cover && <img src={cover.src} alt={cover.alt} loading="lazy" className="aspect-video w-full border-b border-line object-cover" />}
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="text-sm text-muted">
            {tr(project.date)}, {tr(project.context)}
          </p>
          <h3 className="mt-2 text-xl font-bold leading-snug tracking-tight sm:text-2xl">{tr(project.title)}</h3>
          <p className="mt-3 leading-relaxed text-muted">{tr(project.summary)}</p>
          <ul className="mb-6 mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li key={tr(tech)} className="token">
                {tr(tech)}
              </li>
            ))}
          </ul>
          <span className="mt-auto inline-flex items-center gap-2 font-semibold text-accent">
            {ui.projects.open}
            <span className="transition-transform group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </span>
        </div>
      </Link>
    </li>
  );
}

export default function Projects() {
  const { tr, ui } = useI18n();
  const [active, setActive] = useState("all");
  const visible = projects.filter((project) => active === "all" || project.category === active);

  return (
    <Section id="projects" title={ui.projects.title} intro={ui.projects.intro}>
      <div role="group" aria-label={ui.projects.filter} className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.key}
            type="button"
            aria-pressed={active === category.key}
            onClick={() => setActive(category.key)}
            className={`rounded-full border px-4 py-2 text-[0.95rem] font-medium transition-colors ${
              active === category.key ? "border-accent bg-accent text-on-accent" : "border-line text-muted hover:border-accent hover:text-ink"
            }`}
          >
            {tr(category.label)}
          </button>
        ))}
      </div>
      <ul className="mt-8 grid gap-5 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ul>
    </Section>
  );
}
