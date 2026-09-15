import Reveal from "./Reveal";
import { CALENDLY_URL, WHATSAPP_URL } from "./Header";

export default function FinalCta() {
  return (
    <section id="contact" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-4 sm:px-8 sm:pb-24 lg:pb-28">
        <Reveal>
          {/* ------- Bloc contrasté : dégradé #ff7c30 → #cd4c00 ------- */}
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#ff7c30] via-[#f06318] to-[#cd4c00] px-6 py-16 shadow-[0_40px_80px_-40px_rgba(205,76,0,0.65)] sm:px-12 sm:py-20">
            {/* ----- Textures décoratives subtiles ----- */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute -right-24 -top-24 h-[340px] w-[340px] rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-28 -left-20 h-[320px] w-[320px] rounded-full bg-white/[0.07] blur-3xl" />
              <div className="absolute inset-x-0 top-0 h-px bg-white/25" />
            </div>

            <div className="relative mx-auto max-w-2xl text-center">
              {/* ----- Pastille ----- */}
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                <span
                  className="h-1.5 w-1.5 animate-pulse rounded-full bg-white"
                  aria-hidden="true"
                />
                Disponible pour de nouveaux projets
              </span>

              {/* ----- Titre ----- */}
              <h2 className="mt-7 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[46px]">
                Un projet en tête ? Discutons-en.
              </h2>

              {/* ----- Texte ----- */}
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/90 sm:text-[16.5px]">
                Réservez un appel découverte gratuit. On parle de votre
                activité, de vos objectifs, et je vous dis exactement comment je
                peux vous aider.
              </p>

              {/* ----- CTA principal ----- */}
              <div className="mt-9">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-display text-[15.5px] font-bold text-ember shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-flame-deep hover:shadow-[0_24px_50px_-18px_rgba(0,0,0,0.55)] sm:text-[16px]"
                >
                  Réserver mon appel
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </div>

              {/* ----- Lien secondaire discret : WhatsApp ----- */}
              <div className="mt-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-white/85 underline-offset-4 transition-all duration-200 hover:text-white hover:underline"
                >
                  <span aria-hidden="true">💬</span>
                  Ou contactez-moi sur WhatsApp
                </a>
              </div>

              {/* ----- Réassurance ----- */}
              <p className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12.5px] font-medium text-white/75">
                <span className="inline-flex items-center gap-2">
                  <i
                    className="fa-solid fa-circle-check text-[13px]"
                    aria-hidden="true"
                  />
                  Gratuit et sans engagement
                </span>
                <span className="inline-flex items-center gap-2">
                  <i
                    className="fa-solid fa-clock text-[13px]"
                    aria-hidden="true"
                  />
                  20 minutes
                </span>
                <span className="inline-flex items-center gap-2">
                  <i
                    className="fa-solid fa-globe text-[13px]"
                    aria-hidden="true"
                  />
                  FR · EN · AR
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
