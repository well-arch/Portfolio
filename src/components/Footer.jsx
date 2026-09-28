import { profile } from "../data.js";

const icon = "inline-flex justify-center rounded-lg pr-2 text-gray-500 hover:text-teal-700";

export default function Footer() {
  return (
    <footer className="mb-10 mt-16">
      <div className="flex items-center space-x-2">
        <a href={`mailto:${profile.email}`} aria-label="Envoyer un e-mail" className={icon}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
          </svg>
        </a>
        <a href={`tel:${profile.phone.replace(/\s/g, "")}`} aria-label="Appeler" className={icon}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
          </svg>
        </a>
        <span className="text-xs text-gray-500">© 2026 Abel TIENE · Stage DevSecOps 2027</span>
      </div>
    </footer>
  );
}
