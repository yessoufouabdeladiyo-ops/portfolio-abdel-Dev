import { useEffect, useRef, useState } from "react";

/* Liens de navigation — les ancres des sections seront complétées au fil du contenu */
export const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Pour qui ?", href: "#pour-qui" },
  { label: "Méthode", href: "#methode" },
  { label: "Contact", href: "#contact" },
];

/* ⚠️ Placeholder — à remplacer par votre lien Calendly réel (appel découverte) */
export const CALENDLY_URL = "https://calendly.com/tonlien";

/* Coordonnées et réseaux — source unique utilisée dans tout le site */
export const WHATSAPP_URL = "https://wa.me/22947749968";
export const EMAIL = "yessoufoua06@gmail.com";
export const GITHUB_URL = "https://github.com/yessoufoua06coder";
export const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61591739067018";

/* Langues disponibles — la préférence est persistée (localStorage) */
const LANGS = [
  { code: "FR", label: "Français" },
  { code: "EN", label: "English" },
  { code: "AR", label: "العربية" },
] as const;

type Lang = (typeof LANGS)[number]["code"];

const LANG_STORAGE_KEY = "abdelsobou-lang";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "FR";
  const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
  return LANGS.some((l) => l.code === saved) ? (saved as Lang) : "FR";
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>(getInitialLang);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Verrouille le défilement quand le menu mobile est ouvert */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Persiste la langue choisie et met à jour l'attribut lang du document */
  useEffect(() => {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  /* Ferme le sélecteur de langue au clic extérieur ou avec Échap */
  useEffect(() => {
    if (!langOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!langRef.current?.contains(e.target as Node)) setLangOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLangOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [langOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md transition-[box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-b border-ember/10 shadow-[0_12px_32px_-20px_rgba(205,76,0,0.35)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* ------- Logo ------- */}
        <a href="#accueil" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-flame font-display text-[17px] font-bold text-white shadow-sm shadow-flame/25 transition-transform duration-300 group-hover:scale-105">
            AS
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[16.5px] font-semibold tracking-tight text-ink">
              Abdel Sobou
            </span>
            <span className="block text-[9.5px] font-semibold uppercase tracking-[0.18em] text-ember">
              Développeur Web & IA
            </span>
          </span>
        </a>

        {/* ------- Navigation desktop ------- */}
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative py-2 text-[13.5px] font-medium text-ink/70 transition-colors duration-200 hover:text-ember"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-[2px] w-0 rounded-full bg-flame transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* ------- Langue + CTA + burger ------- */}
        <div className="flex items-center gap-3">
          {/* ------- Sélecteur de langue (desktop) ------- */}
          <div ref={langRef} className="relative hidden lg:block">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label="Choisir la langue"
              className="inline-flex items-center gap-2 rounded-full border border-ember/15 px-3.5 py-[9px] text-[12.5px] font-semibold text-ink/75 transition-all duration-300 hover:border-flame/40 hover:bg-flame/5 hover:text-flame"
            >
              <i
                className="fa-solid fa-globe text-[14px] text-ember"
                aria-hidden="true"
              />
              {lang}
              <i
                className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-300 ${
                  langOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              role="listbox"
              aria-label="Langues disponibles"
              className={`absolute right-0 top-full z-50 mt-2 w-44 origin-top-right rounded-2xl border border-ember/10 bg-white p-1.5 shadow-[0_24px_50px_-20px_rgba(205,76,0,0.35)] transition-all duration-200 ${
                langOpen
                  ? "visible scale-100 opacity-100"
                  : "invisible scale-95 opacity-0"
              }`}
            >
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  role="option"
                  aria-selected={lang === l.code}
                  onClick={() => {
                    setLang(l.code);
                    setLangOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-[13px] font-medium transition-colors duration-200 ${
                    lang === l.code
                      ? "bg-flame/5 font-semibold text-ember"
                      : "text-ink/70 hover:bg-flame/5 hover:text-ember"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-7 text-[11px] font-bold uppercase tracking-wide text-flame">
                      {l.code}
                    </span>
                    {l.label}
                  </span>
                  {lang === l.code && (
                    <i
                      className="fa-solid fa-check text-[12px] text-flame"
                      aria-hidden="true"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2.5 rounded-full bg-flame px-5 py-[11px] text-[13.5px] font-semibold text-white shadow-md shadow-flame/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-flame-deep hover:shadow-lg hover:shadow-flame/30 sm:inline-flex"
          >
            <i className="fa-solid fa-calendar-check text-[16px]" aria-hidden="true" />
            Réserver un appel
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="grid h-11 w-11 place-items-center rounded-xl border border-ember/15 text-ember transition-all duration-300 hover:border-flame/40 hover:bg-flame/5 hover:text-flame lg:hidden"
          >
            <i
              className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-[18px]`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* ------- Menu mobile (burger) ------- */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav
            className="space-y-1 border-t border-ember/10 bg-white px-5 pb-7 pt-3 sm:px-8"
            aria-label="Navigation mobile"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium text-ink/80 transition-colors duration-200 hover:bg-flame/5 hover:text-ember"
              >
                {link.label}
                <i
                  className="fa-solid fa-arrow-right text-[16px] text-flame opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </a>
            ))}

            {/* ------- Sélecteur de langue (mobile) ------- */}
            <div className="flex items-center gap-2 px-4 pt-3">
              <i
                className="fa-solid fa-globe text-[15px] text-ember"
                aria-hidden="true"
              />
              <div className="flex flex-1 items-center gap-1.5">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    aria-pressed={lang === l.code}
                    onClick={() => setLang(l.code)}
                    className={`flex-1 rounded-full px-3 py-2 text-[12.5px] font-semibold transition-all duration-200 ${
                      lang === l.code
                        ? "bg-flame text-white shadow-sm shadow-flame/25"
                        : "border border-ember/15 text-ink/65 hover:border-flame/40 hover:bg-flame/5 hover:text-ember"
                    }`}
                  >
                    {l.code}
                  </button>
                ))}
              </div>
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2.5 rounded-full bg-flame px-5 py-3.5 text-[15px] font-semibold text-white shadow-md shadow-flame/25 transition-all duration-300 hover:bg-flame-deep"
            >
              <i className="fa-solid fa-calendar-check text-[16px]" aria-hidden="true" />
              Réserver un appel
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
