import Reveal from "./Reveal";
import {
  CALENDLY_URL,
  EMAIL,
  FACEBOOK_URL,
  GITHUB_URL,
  NAV_LINKS,
  WHATSAPP_URL,
} from "./Header";

const EXPERTISES = [
  "Sites vitrines",
  "E-commerce",
  "Landing pages",
  "Tunnels de vente",
  "Applications web",
];

/* Réseaux — icônes Font Awesome filled, même taille et même espacement */
const SOCIALS = [
  { icon: "fa-brands fa-github", label: "GitHub", href: GITHUB_URL },
  { icon: "fa-brands fa-facebook-f", label: "Facebook", href: FACEBOOK_URL },
  { icon: "fa-brands fa-whatsapp", label: "WhatsApp", href: WHATSAPP_URL },
];

const CONTACT_ROWS = [
  { icon: "fa-solid fa-envelope", label: EMAIL, href: `mailto:${EMAIL}` },
  {
    icon: "fa-brands fa-whatsapp",
    label: "+229 47 74 99 68",
    href: WHATSAPP_URL,
  },
  {
    icon: "fa-solid fa-calendar-check",
    label: "Appel découverte — Calendly",
    href: CALENDLY_URL,
  },
];

function ColTitle({ children }: { children: string }) {
  return (
    <h3 className="font-display text-[12.5px] font-semibold uppercase tracking-[0.2em] text-ember">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-ember/10 bg-white">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-14 sm:px-8 sm:pt-16">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          {/* ------- Marque ------- */}
          <Reveal>
            <a href="#accueil" className="group inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-flame font-display text-[17px] font-bold text-white shadow-sm shadow-flame/25 transition-transform duration-300 group-hover:scale-105">
                AS
              </span>
              <span className="leading-tight">
                <span className="block font-display text-[16.5px] font-semibold tracking-tight text-ink">
                  Abdel Sobou
                </span>
                <span className="block text-[9.5px] font-semibold uppercase tracking-[0.18em] text-ember">
                  Développeur Web &amp; IA
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-bark">
              Sites 100 % sur-mesure, propulsés par l'IA et pensés pour
              l'expérience utilisateur.{" "}
              <span className="font-semibold text-ink">
                Zéro template, que du vrai.
              </span>
            </p>

            {/* ------- Réseaux sociaux ------- */}
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-ember/15 text-ink/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff7c30] hover:text-[#ff7c30] hover:shadow-md hover:shadow-flame/20"
                >
                  <i className={`${social.icon} text-[17px]`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* ------- Navigation ------- */}
          <Reveal delay={80}>
            <ColTitle>Navigation</ColTitle>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[13.5px] font-medium text-ink/65 transition-colors duration-200 hover:text-flame"
                  >
                    <span className="h-px w-3 bg-ember/25 transition-all duration-300 group-hover:w-4 group-hover:bg-flame" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* ------- Expertises ------- */}
          <Reveal delay={160}>
            <ColTitle>Expertises</ColTitle>
            <ul className="mt-5 space-y-2.5">
              {EXPERTISES.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="group inline-flex items-center gap-2 text-[13.5px] font-medium text-ink/65 transition-colors duration-200 hover:text-flame"
                  >
                    <span className="h-px w-3 bg-ember/25 transition-all duration-300 group-hover:w-4 group-hover:bg-flame" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* ------- Contact ------- */}
          <Reveal delay={240}>
            <ColTitle>Contact</ColTitle>
            <ul className="mt-5 space-y-3">
              {CONTACT_ROWS.map((row) => (
                <li key={row.label}>
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      row.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-3"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-flame/20 bg-flame/10 text-flame transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-transparent group-hover:bg-flame group-hover:text-white group-hover:shadow-md group-hover:shadow-flame/25">
                      <i className={`${row.icon} text-[16px]`} aria-hidden="true" />
                    </span>
                    <span className="text-[13.5px] font-medium text-ink/75 transition-colors duration-200 group-hover:text-ember">
                      {row.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ------- Barre inférieure ------- */}
        <div className="mt-14 border-t border-ember/10 pt-7">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-[12.5px] text-bark sm:text-left">
              © 2026{" "}
              <span className="font-semibold text-ink">Abdel Sobou</span>. Tous
              droits réservés.
            </p>
            <div className="flex items-center gap-5 text-[12.5px] font-medium">
              <a
                href="#"
                className="text-bark transition-colors duration-200 hover:text-flame"
              >
                Mentions légales
              </a>
              <span className="h-1 w-1 rounded-full bg-ember/25" />
              <a
                href="#"
                className="text-bark transition-colors duration-200 hover:text-flame"
              >
                Confidentialité
              </a>
            </div>
          </div>
          <p className="mt-5 flex items-center justify-center gap-2 text-center text-[11.5px] font-medium text-bark/80 sm:justify-start">
            <i className="fa-solid fa-gem text-[16px] text-flame" aria-hidden="true" />
            Conçu et développé à la main — sans template, évidemment.
          </p>
        </div>
      </div>
    </footer>
  );
}
