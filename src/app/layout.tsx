import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "jimdev | Software Engineer Portfolio",
  description: "Portafolio de Adrián Jiménez, especializado en ingeniería de software, IA y desarrollo de sistemas críticos.",
  keywords: ["Software Engineer", "Python", "React", "IA", "Ingeniería Informática", "jimdev"],
  authors: [{ name: "Adrián Jiménez" }],
  openGraph: {
    title: "jimdev | Software Engineer",
    description: "Explora la bitácora de vuelo y el stack técnico de Adrián Jiménez.",
    url: "https://mi-portfolio-spacial.vercel.app", // Usa tu URL real
    siteName: "jimdev Portfolio",
    images: [
      {
        url: "/og-image.png", // Puedes crear una imagen luego y ponerla en public
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "jimdev | Software Engineer",
    description: "Sistemas operativos y desarrollo web moderno.",
  },
};