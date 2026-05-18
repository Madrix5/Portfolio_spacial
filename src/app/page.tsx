import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Missions from "@/components/Missions";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main className="selection:bg-apollo-cyan selection:text-deep-space">
      {/* NOTA: Hemos purgado Navbar y Footer de aquí dentro.
        Se renderizan unificados desde layout.tsx.
      */}

      {/* SECUENCIA DE LANZAMIENTO (HERO + NUEVA GALAXY SVG DETAILED) */}
      <Reveal>
        <Hero />
      </Reveal>

      {/* 01. BITÁCORA DE VUELO */}
      <Timeline />

      {/* 02. MANIFIESTO DE MISIONES */}
      <Reveal>
        <Missions />
      </Reveal>

      {/* 03. STACK DE OPERACIONES */}
      <Skills />

      {/* 04. TRANSMISIÓN DE DATOS (FORMULARIO CON VALIDACIÓN REGEX) */}
      <Reveal>
        <Contact />
      </Reveal>
      
      {/* Efecto sutil de estrellas de fondo (Opcional) */}
      <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 left-2/3 w-1 h-1 bg-apollo-cyan rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-nebula-purple rounded-full animate-pulse delay-1000"></div>
      </div>
    </main>
  );
}