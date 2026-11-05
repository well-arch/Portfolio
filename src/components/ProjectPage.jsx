import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { profile, projects } from "../data.js";
import { useI18n } from "../i18n.jsx";
import { ArrowIcon, BackIcon } from "./Icons.jsx";

function Capture({ image, className = "" }) {
  const { tr } = useI18n();
  return (
    <figure className={className}>
      <img
        src={image.src}
        alt={tr(image.alt)}
        width={image.width}
        height={image.height}
        loading="lazy"
        className="h-auto w-full rounded-2xl border border-line"
      />
      <figcaption className="mt-2 text-sm text-muted">{tr(image.alt)}</figcaption>
    </figure>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const { lang, tr, ui } = useI18n();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    const fallback = document.title;
    if (project) document.title = `${tr(project.title)} | ${profile.firstName} ${profile.lastName}`;
    return () => {
      document.title = fallback;
    };
  }, [project, lang]); // eslint-disable-line react-hooks/exhaustive-deps

  const back = (
    <Link to="/#projects" className="inline-flex items-center gap-2 font-medium text-muted transition-colors hover:text-accent">
      <BackIcon />
      {ui.projects.back}
    </Link>
  );

  if (!project) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">{ui.projects.notFound}</h1>
        {back}
      </section>
    );
  }

  // Les captures de téléphone s'affichent côte à côte, après la première capture large.
  const portraits = project.images.filter((image) => image.height > image.width);
  const [firstLandscape, ...otherLandscapes] = project.images.filter((image) => !(image.height > image.width));

  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
      {back}
      <p className="mt-10 text-muted">
        {tr(project.date)}, {tr(project.context)}
      </p>
      <h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight [text-wrap:pretty] sm:text-5xl">{tr(project.title)}</h1>
      <p className="mt-6 text-xl leading-relaxed text-muted">{tr(project.summary)}</p>

      {(project.repo || project.demo) && (
        <div className="mt-8 flex flex-wrap gap-3">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {ui.projects.demo}
              <ArrowIcon />
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              {ui.projects.repo}
            </a>
          )}
        </div>
      )}

      {firstLandscape && <Capture image={firstLandscape} className="mt-10" />}
      {portraits.length > 0 && (
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3">
          {portraits.map((image) => (
            <Capture key={image.src} image={image} />
          ))}
        </div>
      )}
      {otherLandscapes.map((image) => (
        <Capture key={image.src} image={image} className="mt-10" />
      ))}

      <h2 className="mt-12 text-2xl font-bold tracking-tight">{ui.projects.done}</h2>
      <ul className="mt-4 list-disc space-y-3 pl-5 text-lg leading-relaxed text-muted marker:text-accent">
        {tr(project.points).map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold tracking-tight">{ui.projects.stack}</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tr(tech)} className="token">
            {tr(tech)}
          </li>
        ))}
      </ul>
    </article>
  );
}
