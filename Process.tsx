import Reveal from "./Reveal";
import { CALENDLY_URL } from "./Header";

type Step = {
  icon: string;
  title: string;
  description: string;
  duration: string;
};

/* Les 5 étapes du parcours projet — de l'appel découverte à l'accompagnement */
const STEPS: Step[] = [
  {
    icon: "fa-solid fa-phone-volume",
    title: "Appel découverte",
    description:
      "On échange sur votre activité, votre cible et vos objectifs. Gratuit et sans engagement.",
    duration: "20 min",
  },
  {
    icon: "fa-solid fa-file-lines",
    title: "Proposition & structure",
    description:
      "Je vous remets une proposition claire : arborescence, contenu des pages, délais et budget.",
    duration: "48 h",
  },
  {
    icon: "fa-solid fa-pen-ruler",
    title: "Design & développement",
    description:
      "Je conçois et code votre site sur-mesure, avec des points de validation à chaque étape.",
    duration: "1 à 4 sem.",
  },
  {
    icon: "fa-solid fa-flask-vial",
    title: "Tests & optimisation",
    description:
      "Vitesse, mobile, SEO et parcours de conversion : tout est testé et affiné avant la mise en ligne.",
    duration: "3 à 5 j",
  },
  {
    icon: "fa-solid fa-rocket",
    title: "Livraison & accompagnement",
    description:
      "Mise en ligne, prise en main de votre site et suivi inclus après la livraison.",
    duration: "En continu",
  },
];

export default function Process() {
  return (
    <section id="methode" className="relative overflow-hidden bg-white">
      {/* ------- Halo décoratif très léger ------- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-[380px] w-[620px] -translate-x-1/2 rounded-full bg-flame/[0.06] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        {/* ------- En-tête de section ------- */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-ember">
            <span className="h-px w-7 bg-flame" aria-hidden="true" />
            Méthode de travail
            <span className="h-px w-7 bg-flame" aria-hidden="true" />
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.14] tracking-tight text-ember sm:text-4xl lg:text-[44px]">
            Comment on travaille{" "}
            <span className="relative inline-block text-flame">
              ensemble
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
            Un process clair, balisé et sans mauvaise surprise.{" "}
            <span className="font-semibold text-ink">
              Vous savez à chaque instant où en est votre projet.
            </span>
          </p>
        </Reveal>

        {/* ================= Timeline horizontale (desktop) ================= */}
        <div className="relative mt-20 hidden lg:block">
          {/* Ligne de liaison continue */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[27px] h-[2px] bg-gradient-to-r from-flame/15 via-flame/45 to-flame/15"
          />

          <ol className="relative grid grid-cols-5 gap-5">
            {STEPS.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 110} className="h-full">
                  <div className="group flex h-full flex-col items-center text-center">
                    {/* ----- Pastille numérotée ----- */}
                    <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border-[3px] border-white bg-flame/10 font-display text-[15px] font-bold text-ember shadow-[0_0_0_2px_rgba(255,124,48,0.35)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-flame group-hover:text-white group-hover:shadow-[0_0_0_2px_rgba(255,124,48,0.9),0_14px_28px_-12px_rgba(255,124,48,0.7)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* ----- Carte étape ----- */}
                    <div className="mt-6 flex h-full w-full flex-col rounded-2xl border border-ember/10 bg-white p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-flame/40 group-hover:shadow-[0_26px_50px_-26px_rgba(255,124,48,0.45)]">
                      <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-flame/10 text-flame transition-all duration-300 group-hover:bg-flame group-hover:text-white">
                        <i
                          className={`${step.icon} text-[17px]`}
                          aria-hidden="true"
                        />
                      </span>
                      <h3 className="mt-4 font-display text-[16px] font-semibold leading-snug text-ember">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-[13px] leading-relaxed text-bark">
                        {step.description}
                      </p>
                      <span className="mx-auto mt-4 inline-flex items-center gap-1.5 rounded-full bg-flame/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-ember">
                        <i
                          className="fa-solid fa-clock text-[11px] text-flame"
                          aria-hidden="true"
                        />
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* ================= Timeline verticale (mobile / tablette) ================= */}
        <div className="relative mt-14 lg:hidden">
          {/* Ligne verticale */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-[27px] top-4 w-[2px] bg-gradient-to-b from-flame/15 via-flame/45 to-flame/15"
          />

          <ol className="space-y-6">
            {STEPS.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 90}>
                  <div className="group flex items-start gap-5">
                    {/* ----- Pastille numérotée ----- */}
                    <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border-[3px] border-white bg-flame/10 font-display text-[15px] font-bold text-ember shadow-[0_0_0_2px_rgba(255,124,48,0.35)] transition-all duration-300 group-hover:bg-flame group-hover:text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* ----- Carte étape ----- */}
                    <div className="flex-1 rounded-2xl border border-ember/10 bg-white p-5 transition-all duration-300 group-hover:border-flame/40 group-hover:shadow-[0_20px_40px_-24px_rgba(255,124,48,0.45)] sm:p-6">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-flame/10 text-flame transition-all duration-300 group-hover:bg-flame group-hover:text-white">
                          <i
                            className={`${step.icon} text-[16px]`}
                            aria-hidden="true"
                          />
                        </span>
                        <h3 className="font-display text-[16.5px] font-semibold leading-snug text-ember">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-[13.5px] leading-relaxed text-bark">
                        {step.description}
                      </p>
                      <span className="mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-flame/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-ember">
                        <i
                          className="fa-solid fa-clock text-[11px] text-flame"
                          aria-hidden="true"
                        />
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* ------- Rappel CTA ------- */}
        <Reveal delay={260} className="mt-16 text-center">
          <p className="font-display text-[19px] font-semibold text-ember sm:text-[21px]">
            Tout commence par une simple conversation.
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
            Démarrer par l'étape 1
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
