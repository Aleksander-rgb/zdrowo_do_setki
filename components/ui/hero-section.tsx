"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  imageUrl: string;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export const HeroSection = ({
  title,
  description,
  buttonText,
  imageUrl,
  className,
}: HeroSectionProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setLoading(true);
    try {
      await fetch("https://automatyyyyka.app.n8n.cloud/webhook-test/c0d127da-8fd1-411c-948f-a59f834b4c29", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };
  const gridBackgroundStyle = {
    backgroundImage:
      "linear-gradient(rgba(113,191,167,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(113,191,167,0.08) 1px, transparent 1px)",
    backgroundSize: "3rem 3rem",
  };

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        className
      )}
      style={{ background: "#031F42" }}
    >
      {/* Grid background */}
      <div className="absolute inset-0" style={gridBackgroundStyle} />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #031F42 0%, rgba(3,31,66,0.85) 50%, #031F42 100%)",
        }}
      />
      {/* Decorative blobs */}
      <div
        className="blob absolute top-[-10%] right-[-5%] w-80 h-80 opacity-10 pointer-events-none"
        style={{ background: "#71BFA7" }}
      />
      <div
        className="blob-2 absolute bottom-[-10%] left-[-5%] w-64 h-64 opacity-10 pointer-events-none"
        style={{ background: "#FFC221" }}
      />

      <motion.div
        className="relative container mx-auto flex min-h-[85vh] items-center justify-between px-6 py-20 lg:flex-row flex-col gap-12 max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left: Text */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase"
            style={{
              background: "rgba(113,191,167,0.15)",
              color: "#71BFA7",
              border: "1px solid rgba(113,191,167,0.3)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: "#71BFA7" }}
            />
            Bezpłatny 7-Dniowy Challenge
          </motion.div>

          <motion.h1
            className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-white"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
            variants={itemVariants}
          >
            {description}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 w-full max-w-sm">
            {submitted ? (
              <div className="text-center py-4">
                <p className="text-lg font-semibold text-white mb-1">Gotowe! Sprawdź skrzynkę.</p>
                <p className="text-sm" style={{ color: "#71BFA7" }}>Ebook leci na {email}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2 rounded-2xl p-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)" }}>
                <input
                  type="text"
                  placeholder="Twoje imię"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-xl px-4 py-2.5 text-sm font-medium placeholder:text-gray-400 focus:outline-none"
                  style={{
                    border: "1.5px solid #e2e8f0",
                    background: "#f1f5f9",
                    color: "#031F42",
                  }}
                />
                <input
                  type="email"
                  placeholder="Adres e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl px-4 py-2.5 text-sm font-medium placeholder:text-gray-400 focus:outline-none"
                  style={{
                    border: "1.5px solid #e2e8f0",
                    background: "#f1f5f9",
                    color: "#031F42",
                  }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl py-3 px-6 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 transition-all hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #FFC221 0%, #e8a800 100%)",
                    color: "#031F42",
                    boxShadow: "0 4px 20px rgba(255,194,33,0.4)",
                  }}
                >
                  {loading ? "Wysyłamy..." : <>{buttonText} <ArrowRight className="h-4 w-4" /></>}
                </button>
                <p className="text-xs text-center" style={{ color: "#9ca3af" }}>
                  Bez spamu. Wypisujesz się kiedy chcesz.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Right: Single ebook image with floating effect */}
        <motion.div
          className="relative lg:w-1/2 flex items-center justify-center"
          variants={imageVariants}
        >
          {/* Shadow/pages illusion behind */}
          <div
            className="absolute rounded-2xl w-64 md:w-80"
            style={{
              height: "420px",
              background: "rgba(113,191,167,0.15)",
              transform: "rotate(6deg) translate(16px, 8px)",
              filter: "blur(2px)",
            }}
          />
          <div
            className="absolute rounded-2xl w-64 md:w-80"
            style={{
              height: "420px",
              background: "rgba(255,194,33,0.1)",
              transform: "rotate(-4deg) translate(-12px, 6px)",
              filter: "blur(2px)",
            }}
          />

          {/* Main image */}
          <motion.img
            src={imageUrl}
            alt="Ebook — 7-Dniowy Protokół Naprawczy Snu"
            whileHover={{ y: -10, rotate: 1, transition: { duration: 0.4 } }}
            className="relative rounded-2xl shadow-2xl object-cover w-64 md:w-80"
            style={{
              boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(113,191,167,0.2)",
              maxHeight: "420px",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
