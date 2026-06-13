import { useState, useEffect, useRef, useCallback } from "react";
import "./HeroSlider.css";
import { HERO_SLIDES, HERO_INTERVAL_MS } from "../../data/homeData";
import { nextIndex } from "../../utils";


export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => nextIndex(prev, HERO_SLIDES.length));
    }, HERO_INTERVAL_MS);
  }, []);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const goTo = (idx: number) => {
    setCurrent(idx);
    startTimer();
  };

  return (
    <section className="vgk-hero" aria-label="Hero banner">
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`vgk-hero-slide${idx === current ? " active" : ""}`}
          aria-hidden={idx !== current}
        >
          {/* Full-bleed image — no text overlay */}
          <img
            src={slide.image}
            alt={slide.title}
            className="vgk-hero-img"
            loading={idx === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Dot indicators */}
      <div className="vgk-hero-dots" role="tablist">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            role="tab"
            aria-selected={idx === current}
            aria-label={`Go to slide ${idx + 1}`}
            className={`vgk-hero-dot${idx === current ? " active" : ""}`}
            onClick={() => goTo(idx)}
          />
        ))}
      </div>
    </section>
  );
}
