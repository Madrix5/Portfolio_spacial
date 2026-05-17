export default function Timeline() {
    const history = [
        {
            year: "2025 - Presente",
            title: "Especialización en Software Crítico e IA",
            institution: "Autodidacta / Proyectos de Código Abierto",
            description: "Enfoque profundo en el procesamiento de datos masivos y algoritmos de Machine Learning aplicados a la observación terrestre y telemetría de satélites."
        },
        {
            year: "2024",
            title: "Desarrollo de Software Full-Stack",
            institution: "Bootcamp de Ingeniería de Software",
            description: "Formación intensiva de más de 800 horas construyendo arquitecturas web modernas, APIs robustas y bases de datos optimizadas con TypeScript y Node.js."
        },
        {
            year: "2021 - 2024",
            title: "Grado / Formación en Ciencia de Datos o Tecnológica",
            institution: "Universidad / Centro Tecnológico",
            description: "Bases sólidas en matemáticas relacionales, estadística computacional y fundamentos de programación con lenguajes de alto rendimiento como Python."
        }
    ];

    return (
        <section id="trayectoria" className="max-w-5xl mx-auto py-24 px-4 w-full">
            <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-star-white mb-4">
                    <span className="text-nebula-purple">03.</span> Bitácora de Vuelo
                </h2>
                <p className="text-telemetry-gray text-lg max-w-2xl">
                    Mi trayectoria de entrenamiento técnico y los hitos que me han preparado para abordar problemas de software complejos.
                </p>
            </div>

            <div className="relative border-l border-panel-blue max-w-3xl mx-auto pl-8 ml-4 md:ml-32">
                {history.map((item, index) => (
                    <div key={index} className="mb-12 last:mb-0 relative">

                        {/* Nodo iluminado en la línea */}
                        <span className="absolute -left-10.25 top-1.5 w-5 h-5 rounded-full bg-deep-space border-2 border-apollo-cyan flex items-center justify-center shadow-[0_0_10px_rgba(0,229,255,0.4)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-nebula-purple"></span>
                        </span>

                        {/* Fecha flotante a la izquierda (en pantallas grandes) */}
                        <span className="md:absolute md:-left-44 md:top-1 font-mono text-sm text-apollo-cyan font-bold tracking-wider mb-2 block md:mb-0">
                            {item.year}
                        </span>

                        {/* Contenedor del Hito */}
                        <div className="bg-panel-blue border border-telemetry-gray/10 p-6 rounded-xl hover:border-apollo-cyan/30 transition-colors">
                            <h3 className="text-xl font-bold text-star-white mb-1">
                                {item.title}
                            </h3>
                            <p className="text-xs font-medium text-nebula-purple uppercase tracking-widest mb-4">
                                {item.institution}
                            </p>
                            <p className="text-telemetry-gray text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}