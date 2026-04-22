"use client";

import { useState } from "react";

const benefits = [
  {
    icon: "🔥",
    title: "Spalanie tkanki tłuszczowej",
    desc: "Strategie utrzymania niskiego poziomu tkanki tłuszczowej bez katowania się dietami.",
  },
  {
    icon: "⚡",
    title: "Sprawny metabolizm",
    desc: "Sposoby na podkręcenie metabolizmu i stabilny poziom energii przez cały dzień.",
  },
  {
    icon: "🌙",
    title: "Głęboki, regenerujący sen",
    desc: "Praktyczne schematy wspierające sen — fundament każdej trwałej przemiany.",
  },
  {
    icon: "🧠",
    title: "Zarządzanie stresem",
    desc: "Techniki wspomagające obniżenie codziennego stresu, który sabotuje każdą dietę.",
  },
];

function LeadForm({ variant = "hero" }: { variant?: "hero" | "bottom" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
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
        {loading ? "Wysyłamy..." : "Chcę bezpłatny ebook →"}
      </button>
      <p className="text-xs text-center text-gray-400 leading-relaxed">
        Bez spamu. Twoje dane są bezpieczne. Możesz się wypisać w każdej chwili.
      </p>
    </form>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center grain-overlay"
        style={{ background: "#031F42" }}
      >
        {/* Decorative blobs */}
        <div
          className="blob absolute top-[-8%] right-[-10%] w-[500px] h-[500px] opacity-15 pointer-events-none"
          style={{ background: "#71BFA7" }}
        />
        <div
          className="blob-2 absolute bottom-[-10%] left-[-8%] w-[400px] h-[400px] opacity-10 pointer-events-none"
          style={{ background: "#FFC221" }}
        />
        <div
          className="blob absolute top-[40%] left-[30%] w-[300px] h-[300px] opacity-5 pointer-events-none"
          style={{ background: "#71BFA7" }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            {/* Badge */}
            <div className="animate-fade-up-1 inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase"
              style={{ background: "rgba(113,191,167,0.15)", color: "#71BFA7", border: "1px solid rgba(113,191,167,0.3)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block animate-pulse" style={{ background: "#71BFA7" }} />
              Bezpłatny ebook — pobierz teraz
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up-2 text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-5">
              Poznaj mechanizmy{" "}
              <span style={{ color: "#71BFA7" }}>trwałej przemiany</span>{" "}
              zdrowotnej i sylwetkowej
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-up-3 text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
              Ponad <strong className="text-white">60 stron</strong> praktycznej wiedzy, narzędzi i biohaków —
              bez skomplikowanych teorii, za to z konkretnymi wskazówkami krok po kroku.
            </p>

            {/* Trust signals */}
            <ul className="animate-fade-up-4 check-list space-y-2 mb-8 text-white/80 text-sm">
              <li>Jak naprawdę działa Twój metabolizm i jak go przyspieszyć</li>
              <li>Strategie spalania tkanki tłuszczowej bez restrykcyjnych diet</li>
              <li>Schematy na głęboki, regenerujący sen</li>
              <li>Techniki obniżające poziom codziennego stresu</li>
            </ul>

            {/* Logos/social proof */}
            <div className="animate-fade-up-5 flex items-center gap-3 text-white/40 text-xs">
              <span>Dietetyka funkcjonalna</span>
              <span>·</span>
              <span>Evidence-based</span>
              <span>·</span>
              <span>Skuteczna dietetyka funkcjonalna</span>
            </div>
          </div>

          {/* Right — Form card */}
          <div className="animate-fade-up-3 animate-float">
            <div className="rounded-2xl p-8 shadow-2xl"
              style={{ background: "white", boxShadow: "0 25px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)" }}>
              {/* Ebook cover mockup */}
              <div className="rounded-xl mb-6 flex flex-col items-center justify-center py-10 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #031F42 0%, #0a3060 60%, #0e3f7a 100%)" }}>
                <div className="blob absolute top-2 right-2 w-24 h-24 opacity-20" style={{ background: "#71BFA7" }} />
                <div className="blob-2 absolute bottom-2 left-2 w-20 h-20 opacity-15" style={{ background: "#FFC221" }} />
                <span className="text-4xl mb-3 relative z-10">📘</span>
                <p className="text-white font-bold text-center text-sm px-4 relative z-10 leading-snug">
                  Metaboliczna Przewaga
                </p>
                <p className="text-teal text-xs text-center mt-1 relative z-10" style={{ color: "#71BFA7" }}>
                  Twój przewodnik trwałej przemiany
                </p>
                <div className="mt-3 px-3 py-1 rounded-full text-xs font-bold relative z-10"
                  style={{ background: "#FFC221", color: "#031F42" }}>
                  BEZPŁATNIE
                </div>
              </div>

              <h2 className="text-xl font-bold text-navy mb-1" style={{ color: "#031F42" }}>
                Pobierz ebook za darmo
              </h2>
              <p className="text-sm mb-5" style={{ color: "#696969" }}>
                Wpisz imię i e-mail — wyślemy Ci ebook od razu.
              </p>

              <LeadForm variant="hero" />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" style={{ height: "60px" }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8f5f0" />
          </svg>
        </div>
      </section>

      {/* ── WHAT'S INSIDE ────────────────────────────────────── */}
      <section style={{ background: "#f8f5f0" }} className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#71BFA7" }}>
              Co znajdziesz w środku
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: "#031F42" }}>
              Praktyczna wiedza, którą możesz<br className="hidden lg:block" /> zastosować od razu
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto leading-relaxed" style={{ color: "#696969" }}>
              Żadnej teorii dla teorii. Ten ebook daje Ci konkretne narzędzia
              i schematy do natychmiastowego wdrożenia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="card-benefit rounded-2xl bg-white p-6"
              >
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

      {/* ── EBOOK DESCRIPTION ────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Ebook visual */}
          <div className="relative flex justify-center">
            <div className="blob absolute inset-0 opacity-10 scale-110" style={{ background: "#71BFA7" }} />
            <div className="relative animate-float">
              <div className="rounded-2xl w-64 h-80 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl"
                style={{ background: "linear-gradient(145deg, #031F42 0%, #0d3566 100%)" }}>
                <div className="blob absolute -top-8 -right-8 w-32 h-32 opacity-20" style={{ background: "#71BFA7" }} />
                <div className="blob-2 absolute -bottom-6 -left-6 w-28 h-28 opacity-15" style={{ background: "#FFC221" }} />
                <span className="text-6xl mb-4 relative z-10">📖</span>
                <p className="text-white font-bold text-center px-6 relative z-10 text-sm leading-snug">
                  Metaboliczna<br />Przewaga
                </p>
                <p className="text-xs mt-2 relative z-10" style={{ color: "#71BFA7" }}>
                  60+ stron wiedzy
                </p>
                <div className="absolute bottom-4 left-4 right-4 h-px opacity-20" style={{ background: "#71BFA7" }} />
                <p className="absolute bottom-6 text-xs relative z-10 text-white/40">
                  Zdrowo do Setki
                </p>
              </div>
              {/* Pages illusion */}
              <div className="absolute top-2 -right-2 rounded-r-xl w-full h-full -z-10 opacity-60"
                style={{ background: "#e8ddd0" }} />
              <div className="absolute top-4 -right-4 rounded-r-xl w-full h-full -z-20 opacity-40"
                style={{ background: "#e0d5c5" }} />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#71BFA7" }}>
              Twój przewodnik
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-5 leading-snug" style={{ color: "#031F42" }}>
              Od „zrobiłam program"<br />do{" "}
              <span style={{ color: "#71BFA7" }}>trwałej przemiany metabolicznej</span>
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#696969" }}>
              Ten ebook nauczy Cię jak zdobyć i utrzymać piękną sylwetkę i zdrowie przez całe życie.
              Znajdziesz tu wyjaśnione w prosty sposób mechanizmy, które stoją za sprawnym metabolizmem,
              skutecznym spalaniem tkanki tłuszczowej, stabilnym poziomem energii i lepszym radzeniem
              sobie ze stresem.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#696969" }}>
              Zaprojektowany tak, by stał się Twoim praktycznym przewodnikiem w utrzymaniu efektów —
              w oparciu o naukę, biohacking i mądre podejście do stylu życia, a nie o chwilową motywację.
            </p>

            <div className="flex flex-wrap gap-3">
              {["60+ stron wiedzy", "Biohacking", "Evidence-based", "Gotowe schematy"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(113,191,167,0.12)", color: "#4fa08a", border: "1px solid rgba(113,191,167,0.25)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AUTHOR ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: "#f8f5f0" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden grid lg:grid-cols-2" style={{ background: "#031F42" }}>
            {/* Left — avatar placeholder + credential */}
            <div className="relative flex flex-col items-center justify-center py-16 px-10 overflow-hidden">
              <div className="blob absolute top-[-10%] right-[-10%] w-56 h-56 opacity-15 pointer-events-none" style={{ background: "#71BFA7" }} />
              <div className="blob-2 absolute bottom-[-5%] left-[-5%] w-40 h-40 opacity-10 pointer-events-none" style={{ background: "#FFC221" }} />

              {/* Avatar circle */}
              <div className="relative mb-6 z-10">
                <div className="w-36 h-36 rounded-full flex items-center justify-center text-5xl shadow-xl"
                  style={{ background: "linear-gradient(135deg, #71BFA7 0%, #4fa08a 100%)" }}>
                  👩‍⚕️
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

            {/* Right — bio */}
            <div className="py-14 px-10 lg:py-16" style={{ background: "rgba(255,255,255,0.03)", borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#71BFA7" }}>
                O autorce
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

      {/* ── FOR WHOM ─────────────────────────────────────────── */}
      <section style={{ background: "#f8f5f0" }} className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#71BFA7" }}>
            Dla kogo
          </p>
          <h2 className="text-3xl font-bold mb-10" style={{ color: "#031F42" }}>
            Ten ebook jest dla Ciebie, jeśli…
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "Próbowałaś już wielu diet, ale efekty nie były trwałe",
              "Chcesz zrozumieć jak naprawdę działa Twój organizm",
              "Zależy Ci na trwałej przemianie, a nie chwilowym efekcie",
              "Szukasz podejścia opartego na nauce, nie na chwilowej modzie",
              "Chcesz mieć więcej energii, lepiej spać i lepiej radzić sobie ze stresem",
              "Interesujesz się biohackingiem i chcesz zastosować go praktycznie",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                <span className="text-lg flex-shrink-0" style={{ color: "#71BFA7" }}>✓</span>
                <p className="text-sm leading-relaxed" style={{ color: "#031F42" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      <section className="relative py-24 grain-overlay overflow-hidden" style={{ background: "#031F42" }}>
        <div className="blob absolute top-[-20%] left-[-5%] w-[450px] h-[450px] opacity-10 pointer-events-none" style={{ background: "#71BFA7" }} />
        <div className="blob-2 absolute bottom-[-15%] right-[-5%] w-[400px] h-[400px] opacity-10 pointer-events-none" style={{ background: "#FFC221" }} />

        <div className="relative z-10 max-w-lg mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#71BFA7" }}>
            Pobierz bezpłatnie
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-snug">
            Zacznij przemianę od<br />
            <span style={{ color: "#FFC221" }}>właściwej wiedzy</span>
          </h2>
          <p className="text-white/60 mb-8 text-base">
            Dołącz i odbierz swojego darmowego ebooka — 60+ stron praktycznych narzędzi.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-2xl text-left">
            <LeadForm variant="bottom" />
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
