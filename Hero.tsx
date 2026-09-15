import type { CSSProperties } from "react";
import { CALENDLY_URL } from "./Header";

const d = (ms: number): CSSProperties => ({ "--d": `${ms}ms` } as CSSProperties);

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-white">
      {/* ------- Halos décoratifs très légers (le blanc reste dominant à 60 %) ------- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 right-[-10%] h-[380px] w-[380px] rounded-full bg-flame/10 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-8%] h-[340px] w-[340px] rounded-full bg-ember/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* ------- Colonne texte ------- */}
          <div className="max-w-xl">
            {/* ------- Eyebrow ------- */}
            <p
              className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-ember/15 bg-flame/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-ember"
              style={d(0)}
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-flame"
                aria-hidden="true"
              />
              Bonjour, je suis
            </p>

            {/* ------- Titre : nom + rôle ------- */}
            <h1
              className="animate-rise mt-6 font-display text-[42px] font-bold leading-[1.06] tracking-tight sm:text-6xl lg:text-[64px]"
              style={d(90)}
            >
              <span className="block text-ink">Abdel Sobou</span>
              <span className="block text-ember">
                Développeur Web &amp; IA{" "}
                <span className="text-flame">Freelance</span>
              </span>
            </h1>

            {/* ------- Sous-titre / proposition de valeur ------- */}
            <p
              className="animate-rise mt-6 text-[15px] leading-relaxed text-bark sm:text-base"
              style={d(180)}
            >
              <span className="font-semibold text-ink">
                Je ne vends pas de modèles.
              </span>{" "}
              Je construis le site qu'il vous faut, à vous{" "}
              — sites vitrines, e-commerce, landing pages, tunnels de vente et
              applications web sur-mesure.
            </p>

            {/* ------- Double CTA ------- */}
            <div
              className="animate-rise mt-8 flex flex-wrap items-center gap-3.5"
              style={d(270)}
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-flame px-6 py-3.5 text-[14.5px] font-semibold text-white shadow-md shadow-flame/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-flame-deep hover:shadow-lg hover:shadow-flame/30"
              >
                <i
                  className="fa-solid fa-calendar-check text-[16px]"
                  aria-hidden="true"
                />
                Réserver un appel découverte
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-full border border-ember/20 px-6 py-3.5 text-[14.5px] font-semibold text-ember transition-all duration-300 hover:-translate-y-0.5 hover:border-flame/40 hover:bg-flame/5 hover:text-flame"
              >
                <i
                  className="fa-solid fa-envelope text-[16px]"
                  aria-hidden="true"
                />
                Me contacter
              </a>
            </div>

            {/* ------- Bandeau de réassurance ------- */}
            <p
              className="animate-rise mt-9 flex items-center gap-2.5 border-t border-ember/10 pt-6 text-[13px] font-medium text-bark"
              style={d(360)}
            >
              <i
                className="fa-solid fa-circle-check shrink-0 text-[16px] text-flame"
                aria-hidden="true"
              />
              Pensé pour les entrepreneurs, PME, e-commerçants et porteurs de
              projet
            </p>
          </div>

          {/* ------- Colonne photo ------- */}
          <div
            className="animate-rise relative mx-auto w-full max-w-[400px]"
            style={d(220)}
          >
            {/* Halo doux derrière le portrait */}
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-flame/15 via-flame/5 to-ember/10 blur-2xl"
            />

            {/* Cadre photo */}
            <div className="relative overflow-hidden rounded-[28px] border border-ember/10 bg-white shadow-[0_36px_70px_-32px_rgba(205,76,0,0.4)]">
              <img
                src="https://i.imgur.com/yjV92qJ.jpeg"
                alt="Portrait d'Abdel Sobou Adiyo Yessoufou — Développeur Web & IA Freelance"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Chip haut : 100 % sur-mesure */}
            <div className="absolute -right-3 top-8 flex items-center gap-2 rounded-2xl border border-ember/10 bg-white/95 px-4 py-2.5 shadow-lg shadow-ember/10 backdrop-blur-sm sm:-right-4">
              <i
                className="fa-solid fa-gem text-[15px] text-flame"
                aria-hidden="true"
              />
              <span className="text-[12px] font-semibold text-ink">
                100 % sur-mesure
              </span>
            </div>

            {/* Chip bas : propulsé par l'IA */}
            <div className="absolute -left-3 bottom-8 flex items-center gap-2 rounded-2xl border border-ember/10 bg-white/95 px-4 py-2.5 shadow-lg shadow-ember/10 backdrop-blur-sm sm:-left-4">
              <i
                className="fa-solid fa-bolt text-[15px] text-flame"
                aria-hidden="true"
              />
              <span className="text-[12px] font-semibold text-ink">
                Propulsé par l'IA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
