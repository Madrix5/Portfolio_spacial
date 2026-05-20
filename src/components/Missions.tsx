"use client";
import React from 'react';

const proyectos = [
    {
        title: "CV Interactivo & Asistente IA",
        description: "Aplicación web dinámica que transforma el currículum tradicional en una interfaz interactiva. Integra un chatbot conversacional. (El acceso al código fuente y a la transmisión en vivo se encuentra actualmente restringido por un contrato de confidencialidad).",
        tech: ["HTML5", "CSS3", "Vanilla JS", "IA / LLMs"],
        repo: null,
        demo: null
    },
    {
        title: "Analizador Matricial de Alto Rendimiento",
        description: "Software por terminal enfocado en la resolución matemática exhaustiva de matrices complejas. Desarrollado optimizando la gestión de memoria de bajo nivel. (Entorno gráfico actualmente en fase de desarrollo).",
        tech: ["C (Nativo)", "Algoritmia", "Gestión de Memoria", "Linux/Bash"],
        repo: "https://github.com/Madrix5/res_matrix",
        demo: null
    },
    {
        title: "Benchmark de Algoritmos (Datasets CSV)",
        description: "Herramienta de procesamiento lógico encargada de la ingesta y ordenación de grandes volúmenes de datos estructurados. Realiza pruebas empíricas comparando múltiples algoritmos. (Entorno gráfico actualmente en fase de desarrollo).",
        tech: ["C (Nativo)", "Estructuras de Datos", "Data Processing"],
        repo: "https://github.com/Madrix5/OrderAnalyst",
        demo: null
    }
];

export default function Missions() {
    return (
        <section id="misiones" className="py-20 bg-deep-space">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-star-white mb-12 flex items-center gap-4 tracking-tight">
                    <span className="text-apollo-cyan font-mono text-xl">02.</span> Manifiesto de Misiones
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {proyectos.map((proyecto, index) => (
                        <div
                            key={index}
                            className="flex flex-col h-full bg-panel-blue/5 border border-panel-blue rounded-xl p-6 hover:border-apollo-cyan/50 hover:bg-panel-blue/10 transition-all duration-300 group"
                        >
                            {/* Encabezado */}
                            <div className="flex justify-between items-start mb-4">
                                <div className="text-apollo-cyan font-mono text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                                    &gt; PROYECTO_{index + 1}
                                </div>
                            </div>

                            {/* Título y Descripción */}
                            <h3 className="text-xl font-bold text-star-white mb-3 group-hover:text-apollo-cyan transition-colors">
                                {proyecto.title}
                            </h3>
                            <p className="text-telemetry-gray text-sm leading-relaxed mb-6 grow">
                                {proyecto.description}
                            </p>

                            {/* Tecnologías */}
                            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                {proyecto.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-mono text-apollo-cyan/80 bg-apollo-cyan/10 px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Botones de Acción */}
                            <div className="flex gap-4 pt-4 border-t border-panel-blue/50">
                                {proyecto.repo ? (
                                    <a
                                        href={proyecto.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-mono text-star-white hover:text-apollo-cyan transition-colors flex items-center gap-2"
                                    >
                                        [ Código Fuente ]
                                    </a>
                                ) : (
                                    <span className="text-sm font-mono text-red-400/70 flex items-center gap-2 cursor-not-allowed">
                                        [ Acceso Restringido (NDA) ]
                                    </span>
                                )}

                                {proyecto.demo && (
                                    <a
                                        href={proyecto.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-mono text-star-white hover:text-apollo-cyan transition-colors flex items-center gap-2"
                                    >
                                        [ Transmisión en Vivo ]
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}