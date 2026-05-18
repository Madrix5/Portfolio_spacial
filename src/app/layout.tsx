import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// 1. TUS METADATOS (SEO Y REDES SOCIALES)
export const metadata: Metadata = {
  // CRÍTICO: Solucionamos el error de Turbopack/Vercel de telemetría de metadatos
  metadataBase: new URL("https://mi-portfolio-spacial.vercel.app"), 
  title: "jimdev | Software Engineer Portfolio",
  description: "Portafolio de Adrián Jiménez, especializado en ingeniería de software, IA y desarrollo de sistemas críticos.",
  keywords: ["Software Engineer", "Python", "React", "IA", "Ingeniería Informática", "jimdev"],
  authors: [{ name: "Adrián Jiménez" }],
  openGraph: {
    title: "jimdev | Software Engineer Portfolio",
    description: "Explora la bitácora de vuelo y el stack técnico de Adrián Jiménez.",
    // Vercel usará la metadataBase para generar la URL unificada correcta
    siteName: "jimdev Portfolio",
    images: [
      {
        url: "/og-image.png", // Asegúrate de que esta imagen exista en la carpeta public/
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

// 2. EL COMPONENTE POR DEFECTO QUE FALTABA
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-deep-space text-star-white min-h-screen flex flex-col`}>
        {/* Incluimos Navbar y Footer aquí de forma definitiva para todas las páginas */}
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}