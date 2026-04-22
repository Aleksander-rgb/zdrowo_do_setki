import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Bezpłatny Ebook — Zdrowo do Setki",
  description:
    "Pobierz bezpłatny ebook i odkryj mechanizmy stojące za sprawnym metabolizmem, skutecznym spalaniem tkanki tłuszczowej i trwałą przemianą zdrowotną.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={poppins.variable}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
