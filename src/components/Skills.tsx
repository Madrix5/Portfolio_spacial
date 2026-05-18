"use client";
import React from 'react';
import { Reveal } from "./Reveal";
import {
    SiPython, SiJavascript, SiTypescript, SiReact,
    SiDjango, SiFlask, SiPandas, SiGit, SiGithub, SiTailwindcss, SiHtml5, SiCss, SiCplusplus
} from "react-icons/si";

// Mapeo de tecnologías con sus iconos oficiales y colores de marca al hacer hover
const skills = [
    { name: "Python", icon: <SiPython />, color: "hover:text-[#3776AB] hover:border-[#3776AB]/50" },
    { name: "TypeScript", icon: <SiTypescript />, color: "hover:text-[#3178C6] hover:border-[#3178C6]/50" },
    { name: "React", icon: <SiReact />, color: "hover:text-[#61DAFB] hover:border-[#61DAFB]/50" },
    { name: "JavaScript", icon: <SiJavascript />, color: "hover:text-[#F7DF1E] hover:border-[#F7DF1E]/50" },
    { name: "Django", icon: <SiDjango />, color: "hover:text-[#092E20] hover:border-[#092E20]/50" },
    { name: "Flask", icon: <SiFlask />, color: "hover:text-[#000000] dark:hover:text-white hover:border-white/50" },
    { name: "Pandas", icon: <SiPandas />, color: "hover:text-[#150458] hover:border-[#150458]/50" },
    { name: "C / C++", icon: <SiCplusplus />, color: "hover:text-[#00599C] hover:border-[#00599C]/50" },
    { name: "Git & GitHub", icon: <SiGithub />, color: "hover:text-[#F05032] hover:border-[#F05032]/50" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "hover:text-[#06B6D4] hover:border-[#06B6D4]/50" },
    { name: "HTML5", icon: <SiHtml5 />, color: "hover:text-[#E34F26] hover:border-[#E34F26]/50" },
    { name: "CSS3", icon: <SiCss />, color: "hover:text-[#1572B6] hover:border-[#1572B6]/50" },
];

export default function Skills() {
    return (
        <section className="py-20 bg-deep-space">
            <Reveal>
                <div className="max-w-4xl mx-auto px-6">

                    {/* CABECERA UNIFICADA 03 */}
                    <h2 className="text-3xl font-bold text-star-white mb-12 flex items-center gap-4 tracking-tight">
                        <span className="text-apollo-cyan font-mono text-xl">03.</span> Stack de Operaciones
                    </h2>

                    {/* CUADRÍCULA DE ICONOS */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center gap-4 p-6 border border-panel-blue rounded-xl bg-panel-blue/10 transition-all duration-300 group ${skill.color} hover:bg-panel-blue/20 hover:shadow-[0_0_20px_rgba(0,229,255,0.1)]`}
                            >
                                <div className="text-4xl transition-transform duration-300 group-hover:scale-110 text-telemetry-gray group-hover:text-inherit">
                                    {skill.icon}
                                </div>
                                <span className="text-xs font-mono uppercase tracking-widest text-telemetry-gray group-hover:text-star-white transition-colors text-center">
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