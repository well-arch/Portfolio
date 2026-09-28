import { Page, Title, SubTitle } from "./Page.jsx";
import Gotolink from "./Gotolink.jsx";
import { about, skills, education } from "../data.js";

export default function About() {
  return (
    <Page>
      <Title>À propos</Title>
      <p className="text-base leading-loose text-gray-700">{about}</p>

      <article className="my-16">
        <SubTitle>Mon parcours.</SubTitle>
        <ul className="timeline">
          {education.map(([years, title, sub]) => (
            <li key={years}>
              <div className="flex flex-wrap items-center justify-between">
                <span className="font-semibold">{title}</span>
                <b className="underline">{years}</b>
              </div>
              {sub && <p className="text-gray-700">{sub}</p>}
            </li>
          ))}
        </ul>
      </article>

      <article className="my-16">
        <SubTitle>Compétences.</SubTitle>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {skills.map(([label, items]) => (
            <div key={label}>
              <h5 className="mb-2 text-sm font-bold text-teal-700">{label}</h5>
              <div className="flex flex-wrap gap-1.5">
                {items.map((it) => (
                  <span key={it} className="rounded-full border border-teal-200 bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-800">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>

      <Gotolink content="Voir mes projets." linkpath="/projects" />
    </Page>
  );
}
