"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "zdrowodosetki_promo_start";
const DURATION_MS = 12 * 60 * 60 * 1000;
const COURSE_URL = "https://zdrowodosetki.pl/kurs/28-dni-calkowitej-przemiany/";
export const PROMO_CODE = "ZDROWODOSETKI";

function formatTime(ms: number): { h: string; m: string; s: string } {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    h: String(Math.floor(total / 3600)).padStart(2, "0"),
    m: String(Math.floor((total % 3600) / 60)).padStart(2, "0"),
    s: String(total % 60).padStart(2, "0"),
  };
}

function formatTimeString(ms: number): string {
  const { h, m, s } = formatTime(ms);
  return `${h}:${m}:${s}`;
}

export function usePromoTimer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setTimeLeft(DURATION_MS);
    setIsRunning(true);
  };

  useEffect(() => {
    const update = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return;
      const remaining = DURATION_MS - (Date.now() - parseInt(stored, 10));
      if (remaining <= 0) {
        setTimeLeft(0);
        setIsRunning(false);
        localStorage.removeItem(STORAGE_KEY);
      } else {
        setTimeLeft(remaining);
        setIsRunning(true);
      }
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return { timeLeft, isRunning, startTimer };
}

export function PromoPopup({
  timeLeft,
  onDismiss,
}: {
  timeLeft: number;
  onDismiss: () => void;
}) {
  const { h, m, s } = formatTime(timeLeft);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(2,15,34,0.88)", backdropFilter: "blur(4px)" }}
    >
      <div
        className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
        style={{ background: "#031F42", border: "1px solid rgba(113,191,167,0.2)" }}
      >
        {/* gradient top bar */}
        <div
          className="h-1 w-full"
          style={{ background: "linear-gradient(90deg, #71BFA7 0%, #FFC221 100%)" }}
        />

        <div className="p-8 text-center">
          <div className="text-4xl mb-3">🎉</div>
          <p
            className="text-xs font-bold tracking-widest uppercase mb-2"
            style={{ color: "#71BFA7" }}
          >
            Tylko teraz — specjalnie dla Ciebie
          </p>
          <h2 className="text-2xl font-bold text-white mb-1 leading-snug">
            Twój osobisty kod rabatowy
          </h2>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
            −50% na kurs „28 Dni Całkowitej Przemiany"
          </p>

          {/* kod */}
          <div
            className="rounded-xl px-6 py-4 mb-6"
            style={{
              background: "rgba(255,194,33,0.08)",
              border: "2px dashed rgba(255,194,33,0.4)",
            }}
          >
            <p className="text-xs font-semibold mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              Twój kod:
            </p>
            <p
              className="text-2xl font-black tracking-widest"
              style={{ color: "#FFC221", letterSpacing: "0.15em" }}
            >
              {PROMO_CODE}
            </p>
          </div>

          {/* countdown */}
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Oferta wygasa za
          </p>
          <div className="flex justify-center items-center gap-1 mb-8">
            {[
              { val: h, label: "godz" },
              { val: m, label: "min" },
              { val: s, label: "sek" },
            ].map((unit, i) => (
              <div key={i} className="flex items-center gap-1">
                <div
                  className="rounded-xl px-3 py-2 min-w-[58px]"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <p
                    className="text-3xl font-black text-white tabular-nums leading-none"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {unit.val}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {unit.label}
                  </p>
                </div>
                {i < 2 && (
                  <span
                    className="text-2xl font-bold pb-4"
                    style={{ color: "rgba(255,255,255,0.25)" }}
                  >
                    :
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={COURSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full rounded-xl py-4 px-6 font-bold text-base mb-3 transition-all hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #FFC221 0%, #e8a800 100%)",
              color: "#031F42",
              boxShadow: "0 4px 24px rgba(255,194,33,0.35)",
            }}
          >
            ODBIERAM ZNIŻKĘ 50% →
          </a>
          <button
            onClick={onDismiss}
            className="w-full py-3 text-sm transition-opacity hover:opacity-60"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Muszę się zastanowić
          </button>
        </div>
      </div>
    </div>
  );
}

export function StickyPromoBar({ timeLeft }: { timeLeft: number }) {
  if (timeLeft <= 0) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between gap-2 px-4 py-2.5 sm:gap-3 sm:px-6 sm:py-3"
      style={{
        background: "#020f22",
        borderBottom: "1px solid rgba(113,191,167,0.15)",
        boxShadow: "0 2px 16px rgba(0,0,0,0.4)",
      }}
    >
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        {/* mobile: skrócony tekst */}
        <span className="sm:hidden text-white text-xs font-semibold flex-shrink-0">
          −50% na kurs
        </span>
        <span className="sm:hidden text-xs flex-shrink-0" style={{ color: "rgba(255,255,255,0.35)" }}>·</span>
        <span className="sm:hidden font-black tabular-nums text-sm flex-shrink-0" style={{ color: "#71BFA7" }}>
          {formatTimeString(timeLeft)}
        </span>

        {/* desktop: pełny tekst */}
        <span
          className="hidden sm:inline font-black tracking-widest text-sm flex-shrink-0"
          style={{ color: "#FFC221", letterSpacing: "0.1em" }}
        >
          {PROMO_CODE}
        </span>
        <span className="hidden sm:inline" style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
        <span className="hidden sm:inline text-white text-sm font-semibold flex-shrink-0">
          −50% na kurs
        </span>
        <span className="hidden sm:inline" style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
        <span className="hidden sm:inline text-sm flex-shrink-0" style={{ color: "rgba(255,255,255,0.4)" }}>
          wygasa za
        </span>
        <span className="hidden sm:inline font-black tabular-nums text-lg flex-shrink-0" style={{ color: "#71BFA7" }}>
          {formatTimeString(timeLeft)}
        </span>
      </div>
      <a
        href={COURSE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold transition-all hover:-translate-y-0.5"
        style={{
          background: "linear-gradient(135deg, #FFC221 0%, #e8a800 100%)",
          color: "#031F42",
          whiteSpace: "nowrap",
        }}
      >
        Kup kurs →
      </a>
    </div>
  );
}
