import { useEffect } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import ProjectPage from "./components/ProjectPage.jsx";
import Journey from "./components/Journey.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useI18n } from "./i18n.jsx";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
    </>
  );
}

function NotFound() {
  const { ui } = useI18n();
  return (
    <section className="mx-auto max-w-6xl px-5 py-32 sm:px-8">
      <h1 className="text-4xl font-bold tracking-tight">{ui.notFound.title}</h1>
      <Link to="/" className="btn-primary mt-8">
        {ui.notFound.home}
      </Link>
    </section>
  );
}

export default function App() {
  const { pathname, hash, key } = useLocation();
  const { ui } = useI18n();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  return (
    <>
      <a
        href="#main"
        className="btn-primary absolute left-4 top-3 z-50 -translate-y-20 focus-visible:translate-y-0"
      >
        {ui.skip}
      </a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets/:slug" element={<ProjectPage />} />
          {/* Anciennes adresses de la v2 du site */}
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/projects" element={<Navigate to="/#projects" replace />} />
          <Route path="/resume" element={<Navigate to="/#journey" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
