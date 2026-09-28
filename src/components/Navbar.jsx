import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  ["Accueil", "/"],
  ["À propos", "/about"],
  ["Projets", "/projects"],
  ["CV", "/resume"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="mb-16 flex flex-wrap items-center justify-between md:mb-24 md:mt-4">
        <NavLink to="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-xl font-semibold md:text-2xl">
            {"<Abel/>"}
          </span>
        </NavLink>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:outline-none md:hidden"
          aria-controls="navbar-menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <svg className="h-5 w-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div id="navbar-menu" className={`w-full items-center justify-between md:flex md:w-auto ${open ? "block" : "hidden"}`}>
          <ul className="mt-4 flex flex-col overflow-hidden rounded-lg bg-white font-medium shadow-xl md:mt-0 md:flex-row md:space-x-8 md:rounded-none md:bg-transparent md:shadow-none">
            {links.map(([label, to]) => (
              <li key={to} className="hover:bg-gray-100 md:hover:bg-transparent">
                <NavLink
                  to={to}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block border-b-2 py-2 pl-3 pr-4 text-black md:border-b-2 md:p-0 md:hover:border-teal-600 ${
                      isActive ? "border-teal-600" : "border-transparent"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
