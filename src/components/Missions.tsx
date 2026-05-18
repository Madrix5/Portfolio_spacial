"use client";
import React from 'react';

// Objeto con los proyectos
const proyectos = [
    {
        id: 1,
        title: "Stellar Simulation Engine",
        status: "EN ÓRBITA", // Estado de la misión
        statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        description: "Motor de simulación estelar interactivo en tiempo real basado en máquinas de estado de React. Calcula ciclos de vida, supernovas, nebulosas y colapsos en agujeros negros según distribuciones probabilísticas.",
        tech: ["React", "TypeScript", "Tailwind CSS", "SVG"],
        github: "https://github.com/Madrix5",
        demo: "https://mi-portfolio-spacial.vercel.app" // Tu link real
    },
    {
        id: 2,
        title: "AI Data Core Analyser",
        status: "EN DESARROLLO",
        statusColor: "text-orbit-orange bg-orbit-orange/10 border-orbit-orange/20",
        description: "Script avanzado de telemetría y análisis de datos masivos. Diseñado para la limpieza, modelado y extracción de métricas operacionales críticas en entornos críticos de software.",
        tech: ["Python", "Pandas", "Scikit-Learn", "Git"],
        github: "https://github.com/Madrix5",
        demo: null // Si no tiene demo en vivo, se oculta el botón automáticamente
    },
    {
        id: 3,
        title: "Terminal de Operaciones Web",
        status: "COMPLETADO",
        statusColor: "text-apollo-cyan bg-apollo-cyan/10 border-apollo-cyan/20",
        description: "Plataforma web modular de alto rendimiento optimizada para la gestión de comunicaciones cifradas de extremo a extremo, integrando colas de peticiones seguras mediante APIs encapsuladas.",
        tech: ["Next.js", "Zod", "Resend API", "Node.js"],
        github: "https://github.com/Madrix5",
        demo: "https://github.com/Madrix5"
    }
];

export default function Missions() {
    return (
        <section id="proyectos" className="py-20 bg-deep-space">
            <div className="max-w-6xl mx-auto px-6">

                {/* CABECERA UNIFICADA 02 */}
                <h2 className="text-3xl font-bold text-star-white mb-12 flex items-center gap-4 tracking-tight">
                    <span className="text-apollo-cyan font-mono text-xl">02.</span> Manifiesto de Misiones
                </h2>

                {/* CUADRÍCULA DE PROYECTOS (GRID RESPONSIVO) */}
                {/* 1 columna en móvil, 2 en tablets, 3 en pantallas de escritorio */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {proyectos.map((proyecto) => (
                        <div
                            key={proyecto.id}
                            className="border border-panel-blue bg-panel-blue/5 p-6 rounded-xl hover:border-apollo-cyan hover:bg-panel-blue/10 hover:shadow-[0_0_25px_rgba(0,229,255,0.05)] transition-all duration-300 group flex flex-col justify-between h-full relative overflow-hidden"
                        >
                            <div>
                                {/* Cabecera de la tarjeta: Título y Estado */}
                                <div className="flex justify-between items-start gap-4 mb-3">
                                    <h3 className="text-xl font-bold text-star-white group-hover:text-apollo-cyan transition-colors tracking-tight">
                                        {proyecto.title}
                                    </h3>
                                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${proyecto.statusColor} shrink-0`}>
                                        {proyecto.status}
                                    </span>
                                </div>

                                {/* Descripción de la misión */}
                                <p className="text-sm text-telemetry-gray leading-relaxed mb-6">
                                    {proyecto.description}
                                </p>
                            </div>

                            {/* Contenedor inferior fijado abajo (Tecnologías y Enlaces) */}
                            <div>
                                {/* Etiquetas de tecnologías */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {proyecto.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] font-mono text-apollo-cyan bg-apollo-cyan/5 border border-apollo-cyan/10 px-2 py-0.5 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Enlaces operativos */}
                                <div className="flex items-center gap-4 pt-3 border-t border-panel-blue/50 font-mono text-xs">
                                    <a
                                        href={proyecto.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-telemetry-gray hover:text-star-white transition-colors"
                                    >
                                        &gt; CODE_BASE
                                    </a>

                                    {/* Renderizado condicional: Solo muestra el botón LIVE_DEMO si el link existe */}
                                    {proyecto.demo && (
                                        <a
                                            href={proyecto.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-orbit-orange hover:text-orange-400 transition-colors ml-auto"
                                        >
                                            LAUNCH_MISSION &rarr;
                                        </a>
                                    )}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}