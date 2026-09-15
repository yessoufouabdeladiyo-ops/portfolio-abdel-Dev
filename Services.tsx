import Reveal from "./Reveal";
import { CALENDLY_URL } from "./Header";

type Service = {
  icon: string;
  title: string;
  description: string;
  points: string[];
};

/* Les 5 expertises — chaque carte détaille l'objectif et les livrables clés */
const SERVICES: Service[] = [
  {
    icon: "fa-solid fa-store",
    title: "Site vitrine",
    description:
      "Une présence en ligne professionnelle qui inspire confiance dès la première visite.",
    points: [
      "Un design unique, aux couleurs de votre marque",
      "Pages essentielles : accueil, services, à propos, contact",
      "Optimisé pour le SEO, le mobile et la vitesse",
    ],
  },
  {
    icon: "fa-solid fa-cart-shopping",
    title: "E-commerce",
    description:
      "Une boutique en ligne pensée pour vendre, pas juste pour exister.",
    points: [
      "Parcours d'achat fluide, rassurant et sans friction",
      "Paiement sécurisé et gestion simplifiée des commandes",
      "Fiches produits conçues pour convertir",
    ],
  },
  {
    icon: "fa-solid fa-bullseye",
    title: "Landing page",
    description:
      "Une page unique, un objectif clair : convertir votre trafic en clients.",
    points: [
      "Un message, une offre, un seul appel à l'action",
      "Structure persuasive, pensée pour la conversion",
      "Idéale pour vos campagnes publicitaires et lancements",
    ],
  },
  {
    icon: "fa-solid fa-filter",
    title: "Tunnel de vente",
    description:
      "Un parcours pensé pour transformer un visiteur en client, étape par étape.",
    points: [
      "Pages capture, vente, upsell et confirmation",
      "Emails et automatisations connectés à vos outils",
      "Suivi des performances à chaque étape du parcours",
    ],
  },
  {
    icon: "fa-solid fa-gears",
    title: "Application web",
    description:
      "Un outil sur-mesure pour digitaliser et automatiser votre activité.",
    points: [
      "Fonctionnalités développées pour vos processus métier",
      "Tableaux de bord, comptes utilisateurs et API",
      "Automatisations et intégrations boostées à l'IA",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        {/* ------- En-tête de section ------- */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-ember">
            <span className="h-px w-7 bg-flame" aria-hidden="true" />
            Services & expertises
            <span className="h-px w-7 bg-flame" aria-hidden="true" />
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.14] tracking-tight text-ember sm:text-4xl lg:text-[44px]">
            Ce que je peux faire{" "}
            <span className="relative inline-block text-flame">
              pour vous
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
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-bark sm:text-base">
            Du site vitrine à l'application web, chaque réalisation est 100 %
            sur-mesure, propulsée par l'IA et pensée pour l'expérience
            utilisateur.{" "}
            <span className="font-semibold text-ink">
              Choisissez l'objectif, je construis l'outil.
            </span>
          </p>
        </Reveal>

        {/* ------- Grille des 5 expertises : 3 cartes puis 2 cartes ------- */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 90}
              className={`h-full ${
                i < 3 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              <article className="group flex h-full flex-col rounded-2xl border border-ember/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-flame/40 hover:shadow-[0_28px_55px_-26px_rgba(255,124,48,0.4)] sm:p-8">
                {/* ----- Icône + titre ----- */}
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-flame/10 text-flame transition-all duration-300 group-hover:bg-flame group-hover:text-white group-hover:shadow-md group-hover:shadow-flame/25">
                    <i
                      className={`${service.icon} text-[19px]`}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="font-display text-[19px] font-semibold text-ember">
                    {service.title}
                  </h3>
                </div>

                {/* ----- Description ----- */}
                <p className="mt-4 text-[14.5px] leading-relaxed text-bark">
                  {service.description}
                </p>

                {/* ----- Points clés ----- */}
                <ul className="mt-5 space-y-2.5 border-t border-ember/10 pt-5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[13.5px] font-medium leading-relaxed text-ink/80"
                    >
                      <i
                        className="fa-solid fa-circle-check mt-[3px] shrink-0 text-[15px] text-flame"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* ----- Lien Calendly ----- */}
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-[13.5px] font-semibold text-flame transition-colors duration-200 hover:text-flame-deep"
                >
                  Discuter de ce besoin
                  <i
                    className="fa-solid fa-arrow-right text-[15px] transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ------- Rappel CTA ------- */}
        <Reveal delay={300} className="mt-16 text-center">
          <p className="font-display text-[19px] font-semibold text-ember sm:text-[21px]">
            Un besoin qui ne rentre dans aucune case ?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-[14px] leading-relaxed text-bark">
            C'est justement le principe du sur-mesure. Chaque projet commence
            par un appel découverte gratuit et sans engagement.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex items-center gap-2.5 rounded-full bg-flame px-6 py-3.5 text-[14.5px] font-semibold text-white shadow-md shadow-flame/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-flame-deep hover:shadow-lg hover:shadow-flame/30"
          >
            <i
              className="fa-solid fa-calendar-check text-[16px]"
              aria-hidden="true"
            />
            Réserver un appel découverte
            <i
              className="fa-solid fa-arrow-right text-[15px] transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
