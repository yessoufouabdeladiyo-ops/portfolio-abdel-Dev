import { useState } from "react";
import Reveal from "./Reveal";
import { CALENDLY_URL } from "./Header";

type QA = {
  icon: string;
  question: string;
  answer: string;
};

/* Les questions les plus fréquentes avant de démarrer un projet */
const FAQ_ITEMS: QA[] = [
  {
    icon: "fa-solid fa-clock",
    question: "Combien de temps faut-il pour réaliser mon site ?",
    answer:
      "Cela dépend de l'ampleur du projet. Comptez environ 1 semaine pour une landing page, 2 à 3 semaines pour un site vitrine, et 3 à 6 semaines pour une boutique e-commerce ou une application web. Le développement assisté par IA me permet d'aller vite sans jamais sacrifier la qualité. Dans tous les cas, vous recevez un planning précis avec la proposition, dès l'étape 2.",
  },
  {
    icon: "fa-solid fa-wallet",
    question: "Quel budget prévoir pour mon projet ?",
    answer:
      "Chaque site étant sur-mesure, le budget dépend du nombre de pages, des fonctionnalités et du niveau de personnalisation. Je n'applique pas de tarif « au hasard » : après l'appel découverte, vous recevez une proposition claire et détaillée, avec un prix fixe et sans surprise. Si votre budget est serré, on priorise ensemble l'essentiel pour démarrer, puis on fait évoluer le site par la suite.",
  },
  {
    icon: "fa-solid fa-earth-africa",
    question: "Travaillez-vous avec des clients à l'international ?",
    answer:
      "Oui, absolument. Je travaille à distance avec des clients partout dans le monde et je vous accompagne en français, en anglais ou en arabe. Les échanges se font par visio, email ou WhatsApp, en tenant compte de votre fuseau horaire. La distance n'a jamais été un frein : elle demande juste un process clair, et c'est précisément ce que je propose.",
  },
  {
    icon: "fa-solid fa-lightbulb",
    question: "Je ne sais pas encore exactement ce que je veux. C'est un problème ?",
    answer:
      "Pas du tout, et c'est même très courant. Mon rôle n'est pas seulement de coder : je vous aide à clarifier votre besoin. Pendant l'appel découverte, on part de votre activité, de votre cible et de vos objectifs, puis je vous propose une structure concrète (pages, contenus, parcours). Vous n'avez besoin ni de compétences techniques, ni d'un cahier des charges : venez simplement avec votre projet.",
  },
  {
    icon: "fa-solid fa-life-ring",
    question: "Que se passe-t-il après la livraison du site ?",
    answer:
      "Je ne disparais pas une fois le site en ligne. La livraison inclut une prise en main complète pour que vous soyez autonome, ainsi qu'une période d'accompagnement pour corriger les éventuels ajustements. Ensuite, je reste disponible pour faire évoluer votre site, ajouter des fonctionnalités ou assurer la maintenance, selon vos besoins.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        {/* ------- En-tête de section ------- */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-ember">
            <span className="h-px w-7 bg-flame" aria-hidden="true" />
            FAQ
            <span className="h-px w-7 bg-flame" aria-hidden="true" />
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.14] tracking-tight text-ember sm:text-4xl lg:text-[44px]">
            Les questions qu'on me pose{" "}
            <span className="relative inline-block text-flame">
              souvent
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
        </Reveal>

        {/* ------- Accordéon ------- */}
        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.question} delay={i * 80}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-flame/40 shadow-[0_24px_50px_-28px_rgba(255,124,48,0.45)]"
                      : "border-ember/10 hover:border-flame/30"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-trigger-${i}`}
                      className="group flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7"
                    >
                      <span
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-all duration-300 ${
                          isOpen
                            ? "bg-flame text-white shadow-md shadow-flame/25"
                            : "bg-flame/10 text-flame group-hover:bg-flame group-hover:text-white"
                        }`}
                      >
                        <i
                          className={`${item.icon} text-[17px]`}
                          aria-hidden="true"
                        />
                      </span>

                      <span
                        className={`flex-1 font-display text-[15.5px] font-semibold leading-snug transition-colors duration-200 sm:text-[17px] ${
                          isOpen ? "text-ember" : "text-ink group-hover:text-ember"
                        }`}
                      >
                        {item.question}
                      </span>

                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 border-flame/40 bg-flame/10 text-flame"
                            : "border-ember/15 text-ember group-hover:border-flame/40 group-hover:text-flame"
                        }`}
                        aria-hidden="true"
                      >
                        <i className="fa-solid fa-chevron-down text-[12px]" />
                      </span>
                    </button>
                  </h3>

                  {/* ----- Panneau réponse (transition fluide en grid-rows) ----- */}
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-ember/10 px-5 py-5 text-[14px] leading-relaxed text-bark sm:px-7 sm:pl-[88px]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ------- Question restante ------- */}
        <Reveal delay={240} className="mt-12 text-center">
          <p className="text-[14.5px] text-bark">
            Une autre question en tête ?
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-3 inline-flex items-center gap-2.5 text-[15px] font-semibold text-flame transition-colors duration-200 hover:text-flame-deep"
          >
            Posez-la moi directement
            <i
              className="fa-solid fa-arrow-right text-[16px] transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
