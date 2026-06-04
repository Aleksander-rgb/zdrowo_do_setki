"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HeroSection } from "@/components/ui/hero-section";
import { usePromoTimer, PromoPopup, StickyPromoBar } from "@/components/ui/promo";

const courseModules = [
  "Słodkie napoje", "Rytm dobowy", "Śniadania białkowo-tłuszczowe", "Kiedy jeść kolację",
  "Zmniejsz posiłki", "Oddech funkcjonalny", "Unikaj zbóż", "Post przerywany",
  "10 tysięcy kroków", "Uważne jedzenie", "Higiena snu", "Japońska dieta wodna",
  "Kiszonki", "Białko w każdym posiłku", "Energia ze słońca", "Przetworzona żywność",
  "Czysta woda", "Kolejność jedzenia", "Opanuj stres", "Gotuj w domu",
  "Oleje roślinne i frytury", "Kawa i herbata", "Myj warzywa", "Nabiał",
  "Komponuj posiłki", "Suplementacja", "Zasada 80-20", "Odstępstwa",
];

const testimonials = [
  { name: "Monika", text: "Dziękuję za inspirację — widzę pierwsze efekty i wierzę w nową drogę." },
  { name: "Ania", text: "Bardzo się słucha. Wrzutki o medytacji i ćwiczeniach oddechowych to strzał w dziesiątkę." },
  { name: "Mateusz", text: "Mega robota! Zakupiłem i będę polecać znajomym bez zastanowienia." },
  { name: "Marta", text: "Cały kurs przerobiony w kilka dni — i tak będę wracać do materiałów od początku." },
  { name: "Agnieszka", text: "Przepisy super — proste, smaczne i łatwe do wdrożenia na co dzień." },
];

function LeadForm({
  variant = "hero",
  onSubmitSuccess,
}: {
  variant?: "hero" | "bottom";
  onSubmitSuccess?: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setLoading(true);
    try {
      await fetch("https://automatyyyyka.app.n8n.cloud/webhook/c0d127da-8fd1-411c-948f-a59f834b4c29", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
    } finally {
      setLoading(false);
      setSubmitted(true);
      onSubmitSuccess?.();
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8 px-4">
        <div className="text-5xl mb-4">🎉</div>
        <p className="text-xl font-semibold text-navy mb-2">
          Super! Sprawdź swoją skrzynkę.
        </p>
        <p className="text-muted text-sm">
          Ebook jest już w drodze na adres <strong>{email}</strong>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Twoje imię"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className={`input-field w-full rounded-xl px-4 py-3 text-navy font-medium text-sm placeholder:text-gray-400 ${
          variant === "bottom" ? "bg-white" : ""
        }`}
      />
      <input
        type="email"
        placeholder="Adres e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={`input-field w-full rounded-xl px-4 py-3 text-navy font-medium text-sm placeholder:text-gray-400 ${
          variant === "bottom" ? "bg-white" : ""
        }`}
      />
      <button
        type="submit"
        disabled={loading}
        className="gold-btn w-full rounded-xl py-4 px-6 font-bold text-navy text-base cursor-pointer disabled:opacity-70"
      >
        {loading ? "Wysyłamy..." : "ODBIERAM eBOOK ZA DARMO →"}
      </button>
      <p className="text-xs text-center text-gray-400 leading-relaxed">
        Bez spamu. Twoje dane są bezpieczne. Możesz się wypisać w każdej chwili.
      </p>
    </form>
  );
}

export default function Home() {
  const { timeLeft, isRunning, startTimer } = usePromoTimer();
  const [promoState, setPromoState] = useState<"hidden" | "popup" | "sticky">("hidden");

  // jeśli timer już działa (powrót na stronę po zamknięciu zakładki), pokaż sticky bar
  useEffect(() => {
    if (isRunning && promoState === "hidden") {
      setPromoState("sticky");
    }
  }, [isRunning, promoState]);

  const handleFormSuccess = () => {
    startTimer();
    setPromoState("popup");
  };

  return (
    <main className="overflow-x-hidden" style={{ paddingTop: promoState === "sticky" ? "48px" : undefined }}>
      {promoState === "sticky" && <StickyPromoBar timeLeft={timeLeft} />}
      {promoState === "popup" && (
        <PromoPopup timeLeft={timeLeft} onDismiss={() => setPromoState("sticky")} />
      )}
      {/* ── HERO ────────────────────────────────────────────── */}
      <HeroSection
        title={
          <>
            To nie brak silnej woli<br />
            <span style={{ color: "#71BFA7" }}>blokuje efekty.</span><br />
            To przeciążony organizm.
          </>
        }
        description="Sen to fundament metabolizmu. Kiedy go naprawisz — ciało zaczyna spalać, a nie oszczędzać. Sprawdzony eBook, jedno zadanie dziennie. Bez leków, bez stresu."
        sleepBridge="Bo bez głębokiego snu metabolizm nie działa prawidłowo — i żadna dieta, żaden trening nie przyniesie trwałych efektów."
        buttonText="ODBIERAM eBOOK ZA DARMO"
        imageUrl="https://zdrowodosetki.pl/wp-content/uploads/2025/12/okladka_ebook_7_dniowy.jpg"
        onSubmitSuccess={handleFormSuccess}
      />

      {/* Wave divider */}
      <div className="relative overflow-hidden leading-none" style={{ height: "60px", background: "#031F42", marginTop: "-2px" }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* ── CO OSIĄGNIESZ W 28 DNIACH ───────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#71BFA7" }}>
              Kurs 28 Dni Całkowitej Przemiany
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold leading-snug" style={{ color: "#031F42" }}>
              Co osiągniesz<br />
              <span style={{ color: "#71BFA7" }}>w ciągu 28 dni?</span>
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto leading-relaxed" style={{ color: "#696969" }}>
              Esencja wieloletniej pracy gabinetowej. 100% praktyki — zero lania wody.
              Zarządzasz metabolizmem bez liczenia kalorii i intensywnych treningów.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🔥", title: "Spalasz tłuszcz bez głodu", desc: "Trwała utrata tkanki tłuszczowej — bez liczenia kalorii, bez głodówek i efektu jojo." },
              { icon: "🌙", title: "Naprawiasz sen i rytm dobowy", desc: "Budzisz się wypoczęta. Twój organizm regeneruje się w nocy tak, jak powinien." },
              { icon: "🛡️", title: "Wygaszasz stany zapalne", desc: "Lepsza skóra, włosy, paznokcie i odporność — efekty widoczne od środka i na zewnątrz." },
              { icon: "🧠", title: "Usuwasz mgłę mózgową", desc: "Ostrość umysłu, lepszy fokus i energia przez cały dzień — bez kawy co godzinę." },
              { icon: "🚫", title: "Poznajesz blokery metabolizmu", desc: "Dowiesz się, które produkty sabotują Twoje efekty i jak je wyeliminować na stałe." },
              { icon: "⚖️", title: "Odzyskujesz równowagę hormonalną", desc: "Zarządzasz stresem i kortyzolem — organizm przestaje oszczędzać tłuszcz." },
            ].map((b, i) => (
              <div key={i} className="card-benefit rounded-2xl bg-white p-6" style={{ border: "1px solid rgba(113,191,167,0.15)" }}>
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-bold mb-2 text-base leading-snug" style={{ color: "#031F42" }}>
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#696969" }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DWA KROKI DO CAŁKOWITEJ PRZEMIANY ───────────────── */}
      <section className="py-20 lg:py-28" style={{ background: "#f8f5f0" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#71BFA7" }}>
              Twoja droga
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold leading-snug" style={{ color: "#031F42" }}>
              Dwa kroki do<br />
              <span style={{ color: "#71BFA7" }}>całkowitej przemiany</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Krok 1 — aktywny */}
            <div className="rounded-3xl p-8 relative" style={{ background: "#031F42", border: "2px solid #71BFA7" }}>
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold mb-5"
                style={{ background: "rgba(113,191,167,0.15)", color: "#71BFA7", border: "1px solid rgba(113,191,167,0.3)" }}>
                ← TUTAJ JESTEŚ
              </div>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#71BFA7" }}>Krok 1</p>
              <h3 className="text-xl font-bold text-white mb-1 leading-snug">7-Dniowy eBook Naprawy Snu</h3>
              <p className="text-2xl font-bold mb-5" style={{ color: "#FFC221" }}>BEZPŁATNY</p>
              <ul className="space-y-3">
                {[
                  "Napraw sen i rytm dobowy",
                  "Odblokuj naturalny metabolizm",
                  "Przygotuj organizm na trwałą zmianę",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: "rgba(113,191,167,0.2)", color: "#71BFA7" }}>✓</span>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Krok 2 — następny */}
            <div className="rounded-3xl p-8 relative" style={{ background: "white", border: "2px solid rgba(113,191,167,0.2)" }}>
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold mb-5"
                style={{ background: "rgba(255,194,33,0.1)", color: "#e8a800", border: "1px solid rgba(255,194,33,0.3)" }}>
                NASTĘPNY KROK →
              </div>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#696969" }}>Krok 2</p>
              <h3 className="text-xl font-bold mb-1 leading-snug" style={{ color: "#031F42" }}>28 Dni Całkowitej Przemiany</h3>
              <p className="text-sm font-semibold mb-1" style={{ color: "#696969" }}>Metaboliczna Przewaga</p>
              <div className="flex items-center gap-3 mb-5">
                <p className="text-2xl font-bold" style={{ color: "#031F42" }}>198 zł</p>
                <p className="text-base font-medium line-through" style={{ color: "#999" }}>300 zł</p>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(232,168,0,0.12)", color: "#e8a800", border: "1px solid rgba(232,168,0,0.3)" }}>−34%</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Odblokuj metabolizm na stałe",
                  "Wyeliminuj napady głodu",
                  "Spalaj tłuszcz bez liczenia kalorii",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: "rgba(3,31,66,0.08)", color: "#031F42" }}>✓</span>
                    <span className="text-sm" style={{ color: "#031F42" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-sm mt-8" style={{ color: "#696969" }}>
            Zacznij od fundamentu. Kurs czeka, kiedy będziesz gotowa.
          </p>
        </div>
      </section>

      {/* ── PROGRAM KURSU — 28 LEKCJI ───────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#71BFA7" }}>
              Program kursu
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: "#031F42" }}>
              28 lekcji. Jeden dzień,<br className="hidden lg:block" /> jedno konkretne zadanie.
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto leading-relaxed" style={{ color: "#696969" }}>
              Każda lekcja to gotowy do wdrożenia krok — bez teorii na kilometr, bez skomplikowanych przepisów.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {["28 lekcji video", "4,5 godziny materiału", "Intro + zakończenie", "Dostęp na zawsze"].map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(3,31,66,0.07)", color: "#031F42", border: "1px solid rgba(3,31,66,0.1)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {courseModules.map((module, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{ background: "#f8f5f0", border: "1px solid rgba(113,191,167,0.18)" }}>
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: "rgba(113,191,167,0.15)", color: "#4fa08a" }}>
                  {i + 1}
                </span>
                <p className="text-sm font-medium leading-snug" style={{ color: "#031F42" }}>{module}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://zdrowodosetki.pl/kurs/28-dni-calkowitej-przemiany/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-bold text-base transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #FFC221 0%, #e8a800 100%)",
                color: "#031F42",
                boxShadow: "0 4px 24px rgba(255,194,33,0.3)",
              }}
            >
              Kup kurs i zacznij przemianę →
            </a>
          </div>
        </div>
      </section>

      {/* ── DLA KOGO JEST TEN KURS ───────────────────────────── */}
      <section style={{ background: "#f8f5f0" }} className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#71BFA7" }}>
            Dla kogo
          </p>
          <h2 className="text-3xl font-bold mb-10" style={{ color: "#031F42" }}>
            Ten kurs jest dla Ciebie, jeśli…
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              { icon: "😤", text: "Masz dość nieskutecznych diet i chcesz w końcu zobaczyć trwałe efekty bez efektu jojo." },
              { icon: "😴", text: "Czujesz się zmęczona mimo snu — brakuje Ci energii przez cały dzień." },
              { icon: "✨", text: "Chcesz poprawić wygląd skóry, włosów i paznokci od środka, nie tylko kremami." },
              { icon: "🧠", text: "Potrzebujesz jasności umysłu i skupienia — praca wymaga od Ciebie maksimum." },
              { icon: "🕐", text: "Myślisz o długowieczności i zdrowiu — niezależnie od tego, ile masz teraz lat." },
              { icon: "🔑", text: "Chcesz zrozumieć, jak naprawdę działa Twój metabolizm i wziąć nad nim kontrolę." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <p className="text-sm leading-relaxed" style={{ color: "#031F42" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPINIE KURSANTÓW ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#71BFA7" }}>
              Opinie kursantów
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: "#031F42" }}>
              Co mówią osoby,<br className="hidden lg:block" /> które już przeszły kurs?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: "#f8f5f0", border: "1px solid rgba(113,191,167,0.15)" }}>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} style={{ color: "#FFC221" }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "#031F42" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2" style={{ borderTop: "1px solid rgba(113,191,167,0.15)" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ background: "#71BFA7" }}>
                    {t.name[0]}
                  </div>
                  <p className="text-sm font-semibold" style={{ color: "#031F42" }}>{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTORKA ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: "#f8f5f0" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden grid lg:grid-cols-2" style={{ background: "#031F42" }}>
            {/* Lewa — zdjęcie i dane */}
            <div className="relative flex flex-col items-center justify-center py-16 px-10 overflow-hidden">
              <div className="blob absolute top-[-10%] right-[-10%] w-56 h-56 opacity-15 pointer-events-none" style={{ background: "#71BFA7" }} />
              <div className="blob-2 absolute bottom-[-5%] left-[-5%] w-40 h-40 opacity-10 pointer-events-none" style={{ background: "#FFC221" }} />

              <div className="relative mb-6 z-10">
                <div className="w-36 h-44 rounded-2xl overflow-hidden shadow-xl" style={{ border: "3px solid rgba(113,191,167,0.4)" }}>
                  <Image
                    src="https://zdrowodosetki.pl/wp-content/uploads/2025/11/IMG_8524-204x300.jpg"
                    alt="Beata Janicka — dietetyk"
                    width={204}
                    height={300}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-lg"
                  style={{ background: "#FFC221" }}>
                  ✓
                </div>
              </div>

              <p className="relative z-10 text-xl font-bold text-white mb-1">Beata Janicka</p>
              <p className="relative z-10 text-sm text-center leading-snug" style={{ color: "#71BFA7" }}>
                Dyplomowany dietetyk<br />Warszawskiej Akademii Medycznej
              </p>

              <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-2">
                {["Dietetyk kliniczny", "Biohacking", "Metabolizm", "Hormony"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: "rgba(113,191,167,0.15)", color: "#71BFA7", border: "1px solid rgba(113,191,167,0.25)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Prawa — bio */}
            <div className="py-14 px-10 lg:py-16" style={{ background: "rgba(255,255,255,0.03)", borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#71BFA7" }}>
                Autorka kursu
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-5 leading-snug">
                Specjalistka od trwałej<br />
                <span style={{ color: "#71BFA7" }}>przemiany metabolicznej</span>
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                W swojej metodzie skupiam się na przywracaniu prawidłowego metabolizmu
                i gospodarki hormonalnej — wierzę, że ich dysfunkcje są przyczyną większości
                problemów zdrowotnych i sylwetkowych.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                Pracuję zarówno z osobami, które chcą schudnąć, jak i z tymi z dysfunkcjami jelit,
                problemami hormonalnymi czy niskim poziomem energii. Pomagam też tym, którzy chcą
                zwiększyć wydajność ciała i umysłu.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                W pracy wykorzystuję diety niskowęglowodanowe, naprawę snu i regeneracji,
                usuwanie toksyn z otoczenia, aktywność fizyczną oraz sprawdzone metody
                biohackingu przywracające homeostazę i wysoki poziom energii.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA DO ZAKUPU KURSU ──────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#71BFA7" }}>
            Gotowa na pełną przemianę?
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug" style={{ color: "#031F42" }}>
            28 Dni Całkowitej Przemiany<br />
            <span style={{ color: "#71BFA7" }}>Metaboliczna Przewaga</span>
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "#696969" }}>
            28 lekcji video · 4,5 godziny · dostęp na zawsze.
            Esencja wieloletniej pracy gabinetowej — 100% praktyki, zero lania wody.
          </p>

          <div className="rounded-3xl p-8 lg:p-12 mb-8" style={{ background: "#031F42" }}>
            <div className="flex flex-col items-center gap-2 mb-6">
              {promoState !== "hidden" && (
                <p className="text-sm line-through" style={{ color: "rgba(255,255,255,0.35)" }}>300 zł</p>
              )}
              <p className="text-5xl font-bold text-white">
                {promoState !== "hidden" ? "197" : "300"}{" "}
                <span className="text-2xl font-semibold">zł</span>
              </p>
              {promoState !== "hidden" && (
                <span className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: "rgba(255,194,33,0.15)", color: "#FFC221", border: "1px solid rgba(255,194,33,0.3)" }}>
                  Oszczędzasz 34%
                </span>
              )}
            </div>

            <ul className="space-y-3 mb-8 text-left max-w-sm mx-auto">
              {[
                "Trwałe spalanie tłuszczu bez głodówek",
                "Naprawa snu i rytmu dobowego",
                "Eliminacja mgły mózgowej",
                "Równowaga hormonalna i zarządzanie stresem",
                "Dostęp na zawsze — wracasz kiedy chcesz",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: "rgba(113,191,167,0.2)", color: "#71BFA7" }}>✓</span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://zdrowodosetki.pl/kurs/28-dni-calkowitej-przemiany/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full rounded-xl py-4 px-6 font-bold text-navy text-base transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #FFC221 0%, #e8a800 100%)",
                color: "#031F42",
                boxShadow: "0 4px 20px rgba(255,194,33,0.35)",
              }}
            >
              {promoState !== "hidden" ? "KUPUJĘ KURS — 197 ZŁ →" : "KUPUJĘ KURS — 300 ZŁ →"}
            </a>
            <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              Bezpieczna płatność · Dostęp natychmiastowy
            </p>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA — EBOOK ──────────────────────────────── */}
      <section className="relative py-24 grain-overlay overflow-hidden" style={{ background: "#031F42" }}>
        <div className="blob absolute top-[-20%] left-[-5%] w-[450px] h-[450px] opacity-10 pointer-events-none" style={{ background: "#71BFA7" }} />
        <div className="blob-2 absolute bottom-[-15%] right-[-5%] w-[400px] h-[400px] opacity-10 pointer-events-none" style={{ background: "#FFC221" }} />

        <div className="relative z-10 max-w-lg mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#71BFA7" }}>
            Nie gotowa na kurs? Zacznij tu.
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-snug">
            Odbierz darmowy eBook<br />
            <span style={{ color: "#FFC221" }}>i zacznij od fundamentu</span>
          </h2>
          <p className="mb-3 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            7-dniowy eBook naprawy snu to Twój pierwszy krok. Przygotuje organizm na trwałą przemianę — a kurs{" "}
            <a
              href="https://zdrowodosetki.pl/kurs/28-dni-calkowitej-przemiany/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#FFC221", fontWeight: 600, textDecoration: "underline" }}
            >
              „28 Dni Całkowitej Przemiany"
            </a>{" "}
            czeka, kiedy będziesz gotowa.
          </p>
          <p className="text-white/40 mb-8 text-sm">
            Jeden dzień, jedno zadanie. Bezpłatnie.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-2xl text-left">
            <LeadForm variant="bottom" onSubmitSuccess={handleFormSuccess} />
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="py-6 text-center text-xs" style={{ background: "#020f22", color: "rgba(255,255,255,0.3)" }}>
        © {new Date().getFullYear()} Zdrowo do Setki · Skuteczna dietetyka funkcjonalna
      </footer>
    </main>
  );
}
