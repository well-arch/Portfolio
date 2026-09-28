import { Page, Title } from "./Page.jsx";
import { profile } from "../data.js";

const link = "relative border-none font-extrabold leading-5 text-black hover:text-teal-700 hover:underline";

export default function Contact() {
  return (
    <Page>
      <Title>Contact</Title>
      <article>
        <p className="mb-5 text-sm">{profile.availability}</p>
        <p className="mb-5 text-sm">
          E-mail :{" "}
          <a href={`mailto:${profile.email}`} className={link}>{profile.email}</a>
        </p>
        <p className="mb-5 text-sm">
          Téléphone :{" "}
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className={link}>{profile.phone}</a>
        </p>
        <p className="mb-5 text-sm">Localisation : <b>{profile.location}</b></p>
        <p className="mb-5 text-sm">Profils en ligne : <b>{profile.profiles.join(" · ")}</b></p>
        <p className="my-8 text-sm">Merci pour votre temps ! 👋</p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-block rounded-lg bg-teal-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-teal-600"
        >
          Envoyer un e-mail
        </a>
      </article>
    </Page>
  );
}
