import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline"; // 1. Importar el nuevo módulo
import Missions from "@/components/Missions";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Timeline /> {/* 2. Añadirlo a la secuencia visual */}
      <Missions />
      <Skills />
      <Contact />
    </>
  );
}