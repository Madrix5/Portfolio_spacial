"use client";
import React, { useState } from 'react';

const educacion = [
    {
        year: "2025 - 2029",
        title: "Grado en Ingeniería Informática",
        institution: "UNIR - Universidad Internacional de La Rioja",
        details: "Enfoque riguroso en fundamentos de la computación, algoritmos, ingeniería de software y sistemas complejos."
    },
    {
        year: "2026",
        title: "CP Nivel 3 - Aplicaciones Web, IA y Bases de Datos",
        institution: "FOAP - Fundesplai",
        details: "Especialización en desarrollo web dinámico, integración avanzada de modelos de Inteligencia Artificial y gestión relacional de datos."
    },
    {
        year: "2023 - 2024",
        title: "Especialización en Software Engineering",
        institution: "42 (Escuela de Programación de Alto Rendimiento)",
        details: "Metodología basada en proyectos (PBL), gamificación y desarrollo colaborativo sin profesores. Enfoque total en programación nativa y autosuficiencia."
    },
    {
        year: "2022 - 2023",
        title: "Grado en Física (En pausa)",
        institution: "Universitat de Barcelona",
        details: "Desarrollo de un profundo pensamiento analítico, modelado matemático y resolución de problemas lógicos complejos."
    }
];

const experiencia = [
    {
        year: "2026 - Actualidad",
        title: "Prácticas Formativas (Desarrollo Web e IA)",
        institution: "Fundación Esplai | Barcelona",
        details: "Desarrollo e implementación de chatbots corporativos independientes, así como entrenamiento, fine-tuning y optimización de modelos de IA a medida."
    },
    {
        year: "2026 - Actualidad",
        title: "Árbitro de Fútbol",
        institution: "Fundación Valldor | Barcelona",
        details: "Toma de decisiones crítica bajo escenarios de alta presión, mediación de conflictos en tiempo real, liderazgo en campo y aplicación estricta de normativas."
    },
    {
        year: "2018 - 2019",
        title: "Camarero Profesional (Experiencia Internacional)",
        institution: "Berlin, Alemania",
        details: "Coordinación y gestión de atención al cliente en entornos hoteleros de alta exigencia, operando de forma fluida íntegramente en inglés y alemán."
    }
];

export default function Timeline() {
    const [activeTab, setActiveTab] = useState<'edu' | 'exp'>('edu');

    return (
        <section id="trayectoria" className="py-20 bg-deep-space border-t border-panel-blue/20">
            <div className="max-w-4xl mx-auto px-6">

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
                    <h2 className="text-3xl font-bold text-star-white flex items-center gap-4 tracking-tight">
                        <span className="text-apollo-cyan font-mono text-xl">01.</span> Registro de Bitácora
                    </h2>

                    {/* Selectores de Categoría */}
                    <div className="flex bg-panel-blue/10 border border-panel-blue p-1 rounded-lg font-mono text-xs uppercase tracking-wider self-center sm:self-auto">
                        <button
                            onClick={() => setActiveTab('edu')}
                            className={`px-4 py-2 rounded transition-all ${activeTab === 'edu' ? 'bg-apollo-cyan text-deep-space font-bold' : 'text-telemetry-gray hover:text-star-white'}`}
                        >
                            Formación Académica
                        </button>
                        <button
                            onClick={() => setActiveTab('exp')}
                            className={`px-4 py-2 rounded transition-all ${activeTab === 'exp' ? 'bg-apollo-cyan text-deep-space font-bold' : 'text-telemetry-gray hover:text-star-white'}`}
                        >
                            Misiones Realizadas (Experiencia)
                        </button>
                    </div>
                </div>

                {/* Línea de tiempo interactiva */}
                <div className="relative border-l border-panel-blue/40 ml-4 pl-8 space-y-10">
                    {(activeTab === 'edu' ? educacion : experiencia).map((item, index) => (
                        <div key={index} className="relative group">
                            {/* Nodo indicador */}
                            <div className="absolute -left-10.25 top-1 w-5 h-5 rounded-full bg-deep-space border-2 border-panel-blue group-hover:border-apollo-cyan transition-colors flex justify-center items-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-panel-blue group-hover:bg-apollo-cyan transition-colors" />
                            </div>

                            {/* Contenido de la celda cronológica */}
                            <div className="space-y-1">
                                <span className="font-mono text-xs text-orbit-orange font-bold uppercase tracking-widest">{item.year}</span>
                                <h3 className="text-lg font-bold text-star-white group-hover:text-apollo-cyan transition-colors">{item.title}</h3>
                                <h4 className="text-sm font-mono text-apollo-cyan/80">{item.institution}</h4>
                                <p className="text-telemetry-gray text-sm leading-relaxed pt-2 max-w-2xl">{item.details}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}