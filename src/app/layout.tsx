import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"; // <-- 1. IMPORTAMOS EL MÓDULO DE TELEMETRÍA
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mi-portfolio-spacial.vercel.app"), 
  title: "jimdev | Software Engineer Portfolio",
  description: "Portafolio de Adrián Jiménez, especializado en ingeniería de software, IA y desarrollo de sistemas críticos.",
  keywords: ["Software Engineer", "Python", "React", "IA", "Ingeniería Informática", "jimdev"],
  authors: [{ name: "Adrián Jiménez" }],
  openGraph: {
    title: "jimdev | Software Engineer Portfolio",
    description: "Explora la bitácora de vuelo y el stack técnico de Adrián Jiménez.",
    siteName: "jimdev Portfolio",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-deep-space text-star-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
        
        {/* 2. INYECTAMOS EL COMPONENTE (Se ejecuta de forma invisible) */}
        <Analytics />
      </body>
    </html>
  );
}