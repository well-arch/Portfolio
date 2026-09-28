import { useState } from "react";
import { Page, Title } from "./Page.jsx";
import Gotolink from "./Gotolink.jsx";
import { projects, categories } from "../data.js";

function Card({ p, index }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  return (
    <article className="w-full md:max-w-md lg:max-w-lg">
      <figure
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-label={`${p.title} : afficher le détail`}
        onClick={toggle}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), toggle())}
        className="group relative h-96 w-full overflow-hidden rounded-lg bg-gradient-to-br from-teal-700 to-teal-500 text-white shadow-md transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300"
      >
        <span aria-hidden className="absolute right-4 top-1 text-7xl font-bold text-white/15">
          {String(index + 1).padStart(2, "0")}
        </span>

        <figcaption className="absolute inset-x-0 bottom-0 p-5">
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-teal-100">{p.meta}</p>
          <h3 className="mb-3 text-xl font-bold leading-snug">{p.title}</h3>
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span key={s} className="rounded-full bg-white/20 px-2.5 py-1 text-xs font-medium">
                {s}
              </span>
            ))}
          </div>
        </figcaption>

        <div
          className={`absolute inset-0 overflow-y-auto bg-teal-900 p-5 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="mb-3 text-base font-bold">{p.title}</h3>
          <ul className="list-disc space-y-1 pl-5 text-[13px] leading-snug text-teal-50">
            {p.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </div>
      </figure>
    </article>
  );
}

export default function Projects() {
  const [active, setActive] = useState("all");
  const list = projects.filter((p) => active === "all" || p.category === active);

  return (
    <Page wide>
      <Title>Projets</Title>
      <div className="my-5">
        <ul className="flex flex-wrap text-center text-sm font-medium text-gray-500 sm:justify-start lg:justify-center">
          {categories.map(([key, label]) => (
            <li key={key} className="mb-2 mr-2">
              <button
                type="button"
                onClick={() => setActive(key)}
                aria-pressed={active === key}
                className={`inline-block rounded-lg px-4 py-2 hover:text-gray-900 ${
                  active === key ? "bg-teal-700 text-white hover:text-white" : ""
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap items-start gap-5">
        {list.map((p) => (
          <Card key={p.title} p={p} index={projects.indexOf(p)} />
        ))}
      </div>
      <p className="mt-4 text-xs text-gray-500">Survolez (ou touchez) une carte pour afficher le détail.</p>

      <Gotolink content="Une opportunité de stage ? Contactez-moi." linkpath="/contact" />
    </Page>
  );
}
