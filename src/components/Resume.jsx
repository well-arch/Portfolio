import { Link } from "react-router-dom";
import { Page, Title } from "./Page.jsx";
import Gotolink from "./Gotolink.jsx";
import { profile } from "../data.js";

export default function Resume() {
  return (
    <Page>
      <Title>CV</Title>
      <p className="text-sm">
        Une version PDF de mon portfolio est disponible.{" "}
        <a href={profile.pdf} download className="font-extrabold text-black hover:text-teal-700 hover:underline">
          Télécharger le PDF
        </a>
        {" · "}
        <Link to="/contact" className="font-extrabold text-black hover:text-teal-700 hover:underline">
          Me contacter
        </Link>
      </p>
      <div className="relative mb-3.5 mt-6 w-full overflow-hidden rounded-lg pt-[141.4286%] shadow-md">
        <iframe title="Portfolio Abel TIENE (PDF)" loading="lazy" className="absolute left-0 top-0 h-full w-full border-none" src={profile.pdf} />
      </div>
      <p className="text-xs text-gray-500">Le PDF ne s&apos;affiche pas sur certains mobiles : utilisez le lien de téléchargement.</p>
      <Gotolink content="Convaincu ? Écrivez-moi." linkpath="/contact" />
    </Page>
  );
}
