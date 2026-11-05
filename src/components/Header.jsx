import { useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data.js";
import { useI18n } from "../i18n.jsx";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./Icons.jsx";

const sections = ["about", "skills", "projects", "journey", "contact"];

function ThemeToggle() {
  const { ui } = useI18n();
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme);
  const isDark = theme === "dark";

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Stockage indisponible : le choix vaut pour cette visite.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? ui.themeLight : ui.themeDark}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function LangSwitch() {
  const { lang, setLang, ui } = useI18n();
  return (
    <div role="group" aria-label={ui.switchLang} className="inline-flex rounded-full border border-line p-1">
      {["fr", "en"].map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className={`rounded-full px-3 py-1 text-sm font-semibold transition-colors ${
            lang === code ? "bg-accent text-on-accent" : "text-muted hover:text-ink"
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const { ui } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" onClick={() => setOpen(false)} className="font-display text-lg font-bold tracking-tight">
          {profile.firstName} {profile.lastName}
        </Link>

        <nav aria-label="Navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {sections.map((id) => (
              <li key={id}>
                <Link to={`/#${id}`} className="text-[0.95rem] text-muted transition-colors hover:text-ink">
                  {ui.nav[id]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitch />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Navigation" className="border-t border-line/60 lg:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-2 sm:px-8">
            {sections.map((id) => (
              <li key={id}>
                <Link to={`/#${id}`} onClick={() => setOpen(false)} className="block py-3 text-lg">
                  {ui.nav[id]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
