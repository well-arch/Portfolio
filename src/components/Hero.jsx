import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Gotolink from "./Gotolink.jsx";
import { profile } from "../data.js";

const inline =
  "relative border-none text-base font-extrabold uppercase leading-5 text-black hover:text-teal-700 hover:underline";

export default function Hero() {
  return (
    <section className="flex items-center justify-center">
      <div className="max-w-4xl">
        <Link to="/">
          <motion.h1
            className="relative mx-0 mb-3 mt-8 text-3xl font-medium uppercase tracking-[9.9px] text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: -20, textShadow: "0px 0px 0px #5eead4" }}
            animate={{ opacity: 1, y: 0, textShadow: "0px 6px 12px #5eead4" }}
            transition={{
              opacity: { duration: 0.6 },
              y: { duration: 0.6 },
              textShadow: { duration: 1, delay: 0.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            }}
          >
            {profile.name}
          </motion.h1>
        </Link>
        <p className="mb-6 text-lg font-semibold text-teal-700">
          {profile.title} · {profile.subtitle}
        </p>

        <p className="mb-1 text-base font-normal leading-loose text-gray-700">
          Futur ingénieur passionné par le développement logiciel, l&apos;infrastructure et la cybersécurité, je
          conçois des applications robustes, je les déploie sur des infrastructures sécurisées et résilientes, et
          je les livre dans des pipelines automatisés.
        </p>
        <p className="mb-1 text-base font-normal leading-loose text-gray-700">
          Étudiant en dernière année d&apos;ingénieur à l&apos;EPITA (majeure DevSecOps), je recherche un stage de
          6 mois à partir de février 2027, avec possibilité de prolonger en stage de fin d&apos;études.
        </p>
        <p className="mb-1 text-base font-normal leading-loose text-gray-700">
          Découvrez mes derniers{" "}
          <Link to="/projects" className={inline}>
            Projets
          </Link>
          , de l&apos;architecture d&apos;entreprise sécurisée au développement distribué.
        </p>
        <p className="mb-1 text-base font-normal leading-loose text-gray-700">
          Une opportunité de stage ? Rendez-vous sur la page{" "}
          <Link to="/contact" className={inline}>
            Contact
          </Link>
          .
        </p>
        <Gotolink content="En savoir plus sur moi." linkpath="/about" />
      </div>
    </section>
  );
}
