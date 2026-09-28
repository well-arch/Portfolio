import { useEffect } from "react";
import { profile } from "../data.js";

export default function ContactMessage() {
  useEffect(() => {
    console.log(`
    CONTACT   ----------------------------------------
       \\
        \\
            /\\/\\
           ( .. )
           / \\/ \\
          /\\/\\/

    Bonjour ! Merci de visiter mon portfolio.
    Je cherche un stage DevSecOps de 6 mois à partir de février 2027.
    Écrivez-moi : ${profile.email}
    `);
  }, []);
  return null;
}
