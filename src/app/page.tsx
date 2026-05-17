import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Missions from "@/components/Missions";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-12">
      <Hero />
      <TechStack />
      <Missions />
      <Timeline />
      <Contact />
    </div>
  );
}