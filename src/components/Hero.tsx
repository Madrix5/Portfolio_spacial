import React from 'react';
import SpaceScene from './SpaceScene';

export default function Hero() {
    return (
        <section className="min-h-[85vh] flex items-center bg-deep-space relative overflow-hidden py-12">
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="space-y-6 z-10">
                    <p className="font-mono text-xs uppercase tracking-widest text-orbit-orange"></p>
                    <h1 className="text-4xl md:text-6xl font-bold text-star-white tracking-tight">
                        Hola, soy <span className="text-transparent bg-clip-text bg-linear-to-r from-apollo-cyan to-nebula-purple">Adrián Jiménez</span>
                    </h1>
                    <p className="text-xl font-mono text-apollo-cyan">
                        &gt; Ingeniero Informático & Full Stack Developer
                    </p>
                    <p className="text-telemetry-gray leading-relaxed text-base max-w-lg">
                        Orientado al diseño de soluciones eficientes, escalables y al entrenamiento de modelos de Inteligencia Artificial a medida. Formado bajo entornos de alto rendimiento como la Escuela 42, con alta autosuficiencia, pensamiento analítico riguroso y una sólida resiliencia en la gestión de crisis.
                    </p>
                    <div className="pt-4 flex gap-4">
                        <a
                            href="/manual-operaciones.pdf"
                            download="CV_Adrian_Jimenez.pdf"
                            className="px-6 py-3 border border-apollo-cyan text-apollo-cyan font-mono text-sm uppercase tracking-wider rounded bg-apollo-cyan/5 hover:bg-apollo-cyan hover:text-deep-space transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.1)]"
                        >
                            Descargar Manual (CV)
                        </a>
                    </div>
                </div>

                <div className="flex justify-center items-center z-10">
                    <SpaceScene />
                </div>

            </div>
        </section>
    );
}