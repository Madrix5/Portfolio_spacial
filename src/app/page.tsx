import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-space selection:bg-apollo-cyan selection:text-deep-space">
      {/* 1. SISTEMA DE NAVEGACIÓN */}
      <Navbar />

      {/* 2. SECUENCIA DE LANZAMIENTO (HERO) */}
      {/* El Hero suele tener su propia animación interna, pero lo envolvemos para asegurar consistencia */}
      <Reveal>
        <Hero />
      </Reveal>

      {/* 3. BITÁCORA DE VUELO (EXPERIENCIA Y FORMACIÓN) */}
      <Timeline />

      {/* 4. STACK DE OPERACIONES (SKILLS GRID) */}
      <Skills />

      {/* 5. CANAL DE COMUNICACIÓN (CONTACTO) */}
      <Reveal>
        <Contact />
      </Reveal>

      {/* 6. PIE DE PÁGINA */}
      <Footer />
      
      {/* DECORACIÓN ESPACIAL SUTIL (Opcional: Estrellas de fondo) */}
      <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 left-2/3 w-1 h-1 bg-apollo-cyan rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-nebula-purple rounded-full animate-pulse delay-1000"></div>
      </div>
    </main>
  );
}