import { profile } from "../data.js";
import { useI18n } from "../i18n.jsx";
import SocialLinks from "./SocialLinks.jsx";

export default function Footer() {
  const { ui } = useI18n();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-6 sm:px-8">
        <p className="text-[0.95rem] text-muted">
          © {new Date().getFullYear()} {profile.firstName} {profile.lastName}. {ui.footer.rights}
        </p>
        <SocialLinks className="-mr-2.5" />
      </div>
    </footer>
  );
}
