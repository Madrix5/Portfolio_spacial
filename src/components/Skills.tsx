import {
    SiPython, SiJavascript, SiTypescript, SiReact,
    SiDjango, SiFlask, SiPandas, SiGit, SiGithub, SiTailwindcss
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { Reveal } from "./Reveal";

const skills = [
    { name: "Python", icon: <SiPython />, color: "hover:text-[#3776AB]" },
    { name: "TypeScript", icon: <SiTypescript />, color: "hover:text-[#3178C6]" },
    { name: "React", icon: <SiReact />, color: "hover:text-[#61DAFB]" },
    { name: "JavaScript", icon: <SiJavascript />, color: "hover:text-[#F7DF1E]" },
    { name: "Django", icon: <SiDjango />, color: "hover:text-[#092E20]" },
    { name: "Pandas", icon: <SiPandas />, color: "hover:text-[#150458]" },
    { name: "Git", icon: <SiGit />, color: "hover:text-[#F05032]" },
    { name: "C (Embedded)", icon: <VscCode />, color: "hover:text-[#A8B9CC]" },
];

export default function Skills() {
    return (
        <section className="py-20 bg-deep-space">
            <Reveal>
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-star-white mb-12">
                        <span className="text-apollo-cyan font-mono text-xl">03.</span> Stack de Operaciones
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center gap-4 p-6 border border-panel-blue rounded-xl bg-panel-blue/10 transition-all duration-300 group ${skill.color} hover:border-apollo-cyan hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]`}
                            >
                                <div className="text-4xl transition-transform group-hover:scale-110">
                                    {skill.icon}
                                </div>
                                <span className="text-xs font-mono uppercase tracking-widest text-telemetry-gray group-hover:text-star-white">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
        </section>
    );
}