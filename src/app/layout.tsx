import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tu Nombre | Software Engineer",
  description: "Desarrollador de software construyendo sistemas terrestres para misiones en el espacio.",
};

// ESTA ES LA LÍNEA QUE NEXT.JS ESTÁ BUSCANDO:
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="grow container mx-auto px-4 py-8 pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}