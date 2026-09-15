import Reveal from "./Reveal";
import { CALENDLY_URL } from "./Header";

/* 4 points clés — icônes Font Awesome filled */
const KEY_POINTS = [
  {
    icon: "fa-solid fa-bolt",
    title: "Développement assisté par IA",
    detail: "Rapidité sans sacrifier la qualité",
  },
  {
    icon: "fa-solid fa-bullseye",
    title: "Zéro template",
    detail: "100 % sur-mesure",
  },
  {
    icon: "fa-solid fa-globe",
    title: "Disponible en FR / EN / AR",
    detail: "Français, Anglais, Arabe",
  },
  {
    icon: "fa-solid fa-handshake",
    title: "Accompagnement inclus",
    detail: "Après la livraison",
  },
];

/* Bloc coordonnées */
const CONTACT_INFO: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}[] = [
  {
    icon: "fa-solid fa-location-dot",
    label: "Localisation",
    value: "Bénin",
  },
  {
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: "yessoufoua06@gmail.com",
    href: "mailto:yessoufoua06@gmail.com",
  },
  {
    icon: "fa-brands fa-whatsapp",
    label: "Téléphone / WhatsApp",
    value: "+229 47 74 99 68",
    href: "https://wa.me/22947749968",
  },
  {
    icon: "fa-solid fa-language",
    label: "Langues",
    value: "Français · Anglais · Arabe",
  },
];

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-flame/20 bg-flame/10 text-flame transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-transparent group-hover:bg-flame group-hover:text-white group-hover:shadow-md group-hover:shadow-flame/25">
        <i className={`${icon} text-[17px]`} aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-[10.5px] font-semibold uppercase tracking-[0.16em] text-bark">
          {label}
        </span>
        <span className="mt-0.5 block break-words text-[14px] font-semibold text-ink transition-colors duration-200 group-hover:text-ember">
          {value}
        </span>
      </span>
    </>
  );

  const className = "group flex items-center gap-3.5";

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={className}
    >
      {inner}
    </a>
  ) : (
    <div className={className}>{inner}</div>
  );
}

export default function About() {
  return (
    <section id="a-propos" className="relative overflow-hidden bg-white">
      {/* ------- Halos décoratifs très légers (le blanc reste dominant) ------- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-16 h-[320px] w-[320px] rounded-full bg-flame/[0.07] blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-[320px] w-[320px] rounded-full bg-ember/[0.06] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          {/* ------- Colonne texte ------- */}
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-ember">
                <span className="h-px w-7 bg-flame" aria-hidden="true" />
                À propos
              </p>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.14] tracking-tight text-ember sm:text-4xl lg:text-[44px]">
                Un business unique mérite un{" "}
                <span className="relative inline-block text-flame">
                  site unique
                  <svg
                    className="absolute -bottom-2 left-0 h-3 w-full"
                    viewBox="0 0 320 12"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8.5C88 3 220 2.5 317 8"
                      stroke="#cd4c00"
                      strokeOpacity="0.4"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-bark sm:text-base">
                Je suis développeur web et IA, spécialisé dans la création de
                sites entièrement sur-mesure.{" "}
                <span className="font-semibold text-ink">
                  Pas de thème acheté, pas de mise en page recyclée :
                </span>{" "}
                chaque site est pensé selon votre activité, votre cible et vos
                objectifs de conversion.
              </p>
            </Reveal>

            {/* ------- 4 points clés ------- */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {KEY_POINTS.map((point, i) => (
                <Reveal
                  key={point.title}
                  delay={100 + i * 90}
                  className="h-full"
                >
                  <div className="group flex h-full items-start gap-3.5 rounded-2xl border border-ember/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-flame/40 hover:shadow-[0_20px_40px_-22px_rgba(255,124,48,0.4)]">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-flame/10 text-flame transition-all duration-300 group-hover:bg-flame group-hover:text-white group-hover:shadow-md group-hover:shadow-flame/25">
                      <i
                        className={`${point.icon} text-[17px]`}
                        aria-hidden="true"
                      />
                    </span>
                    <span>
                      <span className="block text-[14.5px] font-semibold leading-snug text-ink">
                        {point.title}
                      </span>
                      <span className="mt-1 block text-[13px] leading-relaxed text-bark">
                        {point.detail}
                      </span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ------- Bloc coordonnées ------- */}
          <Reveal delay={160}>
            <aside className="relative overflow-hidden rounded-3xl border border-ember/10 bg-white p-7 shadow-[0_30px_60px_-30px_rgba(205,76,0,0.3)] sm:p-9">
              {/* Liseré supérieur dégradé flame → ember */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-flame via-flame to-ember"
              />

              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ember">
                Coordonnées
              </p>
              <h3 className="mt-4 font-display text-[21px] font-semibold leading-snug text-ink">
                Parlons de votre projet.
              </h3>

              <ul className="mt-7 space-y-4">
                {CONTACT_INFO.map((row) => (
                  <li key={row.label}>
                    <InfoRow
                      icon={row.icon}
                      label={row.label}
                      value={row.value}
                      href={row.href}
                    />
                  </li>
                ))}
              </ul>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2.5 rounded-full bg-flame px-5 py-3.5 text-[14px] font-semibold text-white shadow-md shadow-flame/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-flame-deep hover:shadow-lg hover:shadow-flame/30"
              >
                <i
                  className="fa-solid fa-calendar-check text-[16px]"
                  aria-hidden="true"
                />
                Réserver un appel découverte
              </a>
              <p className="mt-4 text-center text-[12px] font-medium text-bark">
                Gratuit · 20 min · Sans engagement
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
