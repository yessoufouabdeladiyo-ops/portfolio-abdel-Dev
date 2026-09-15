import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  /** Délai avant l'apparition (ms) — pour créer un léger décalage en cascade */
  delay?: number;
  className?: string;
  as?: "div" | "section";
};

/**
 * Wrapper de micro-interaction : apparition douce (fade-in + léger décalage
 * vertical) quand l'élément entre dans le viewport. Aucun effet 3D / parallaxe.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transitionDuration: "700ms",
    transitionTimingFunction: "cubic-bezier(0.22, 0.65, 0.3, 1)",
  };

  return (
    <div
      ref={ref}
      style={style}
      className={`${className} transition-[opacity,transform] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
