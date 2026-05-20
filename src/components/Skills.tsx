"use client";
import React from 'react';
import {
    SiPython, SiJavascript, SiC, SiReact, SiDjango, SiFlask,
    SiTailwindcss, SiHtml5, SiCss, SiPostgresql, SiSqlite,
    SiNestjs, SiGit, SiDocker, SiKubernetes, SiLinux, SiPostman
} from "react-icons/si";

const techStack = {
    lenguajes: [
        { name: "Python", icon: <SiPython /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "C Nativo", icon: <SiC /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "SQLite", icon: <SiSqlite /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss /> }
    ],
    frameworks: [
        { name: "React / Next.js", icon: <SiReact /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Node.js / Express", icon: <SiNestjs /> }
    ],
    herramientas: [
        { name: "Git & GitHub", icon: <SiGit /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Linux / Bash", icon: <SiLinux /> },
        { name: "Postman", icon: <SiPostman /> }
    ]
};

// Orden exacto solicitado y con porcentajes de progreso
const idiomas = [
    { name: "Castellano", level: "Nativo", progress: 100 },
    { name: "Catalán", level: "Nativo", progress: 100 },
    { name: "Inglés", level: "B1 - B2", progress: 75 },
    { name: "Alemán", level: "B1", progress: 50 },
    { name: "Japonés", level: "N5", progress: 20 }
];

export default function Skills() {
    return (
        <section id="stack" className="py-20 bg-deep-space border-t border-panel-blue/20">
            <div className="max-w-5xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-star-white mb-16 flex items-center gap-4 tracking-tight">
                    <span className="text-apollo-cyan font-mono text-xl">03.</span> Sistemas y Tecnologías
                </h2>

                {/* Grid de Core Stack */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

                    <div>
                        <h3 className="text-sm font-mono uppercase tracking-widest text-orbit-orange mb-6">{"// LENGUAJES CORE"}</h3>
                        <div className="space-y-3">
                            {techStack.lenguajes.map((tech, i) => (
                                <div key={i} className="flex items-center gap-3 bg-panel-blue/10 border border-panel-blue/40 p-3 rounded-lg text-telemetry-gray hover:text-apollo-cyan hover:border-apollo-cyan/40 transition-all">
                                    <span className="text-xl">{tech.icon}</span>
                                    <span className="text-sm font-mono">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-mono uppercase tracking-widest text-orbit-orange mb-6">{"// FRAMEWORKS & LIBS"}</h3>
                        <div className="space-y-3">
                            {techStack.frameworks.map((tech, i) => (
                                <div key={i} className="flex items-center gap-3 bg-panel-blue/10 border border-panel-blue/40 p-3 rounded-lg text-telemetry-gray hover:text-apollo-cyan hover:border-apollo-cyan/40 transition-all">
                                    <span className="text-xl">{tech.icon}</span>
                                    <span className="text-sm font-mono">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-mono uppercase tracking-widest text-orbit-orange mb-6">{"// ENCORES & TOOLS"}</h3>
                        <div className="space-y-3">
                            {techStack.herramientas.map((tech, i) => (
                                <div key={i} className="flex items-center gap-3 bg-panel-blue/10 border border-panel-blue/40 p-3 rounded-lg text-telemetry-gray hover:text-apollo-cyan hover:border-apollo-cyan/40 transition-all">
                                    <span className="text-xl">{tech.icon}</span>
                                    <span className="text-sm font-mono">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Apartado de Idiomas con Barras de Progreso en Columna Única */}
                <div className="border-t border-panel-blue/30 pt-12">
                    <h3 className="text-sm font-mono uppercase tracking-widest text-orbit-orange mb-10">{"// PROTOCOLOS DE COMUNICACIÓN (IDIOMAS)"}</h3>

                    <div className="flex flex-col gap-8 max-w-3xl mx-auto">
                        {idiomas.map((idioma, i) => (
                            <div key={i} className="flex flex-col gap-2 group">
                                {/* Textos */}
                                <div className="flex justify-between items-end">
                                    <span className="text-star-white font-bold text-[16px] tracking-wide group-hover:text-apollo-cyan transition-colors">
                                        {idioma.name}
                                    </span>
                                    <span className="text-apollo-cyan font-mono text-sm uppercase tracking-widest opacity-90">
                                        {idioma.level}
                                    </span>
                                </div>

                                {/* Contenedor de la barra (Gris oscuro puro nativo) */}
                                <div className="w-full bg-gray-800 rounded-full h-3 mt-1 overflow-hidden border border-gray-700/50">
                                    {/* Barra de progreso */}
                                    <div
                                        className="bg-apollo-cyan h-full rounded-full transition-all duration-1000 ease-out relative"
                                        style={{ width: `${idioma.progress}%` }}
                                    >
                                        {/* Brillo en la punta */}
                                        <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/30 blur-[3px]"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}