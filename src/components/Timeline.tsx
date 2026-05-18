const history = [
    {
        year: "2025 - Presente",
        title: "Ingeniería Informática + IA",
        institution: "UNIR / Fundación Esplai",
        description: "Desarrollo de software y especialización en Python e IA. Enfoque en sistemas críticos y arquitecturas modernas."
    },
    {
        year: "Pausado",
        title: "Grado en Física",
        institution: "Universidad",
        description: "Estudio de fundamentos teóricos y leyes físicas. Actualmente en pausa para priorizar el desarrollo de ingeniería de software."
    },
    {
        year: "2025",
        title: "Sistemas de Operación",
        institution: "Mérida Lucena Raúl",
        description: "Optimización de flujos de trabajo y gestión de recursos en entornos de alta demanda (131 días)[cite: 45]."
    },
    {
        year: "2021 - 2022",
        title: "Especialista en Logística",
        institution: "IKEA Ibérica",
        description: "Gestión de operaciones y experiencia de usuario en entorno de alto volumen (223 días)[cite: 45]."
    }
];

export default function Timeline() {
    return (
        <section id="sobre-mi" className="py-20 bg-deep-space">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-star-white mb-12 flex items-center gap-4">
                    <span className="text-apollo-cyan font-mono text-xl">02.</span> Bitácora de Vuelo
                </h2>
                <div className="space-y-8 border-l-2 border-panel-blue ml-4 pl-8 relative">
                    {history.map((item, index) => (
                        <div key={index} className="relative group">
                            <div className="absolute -left-[41px] top-1 w-4 h-4 bg-deep-space border-2 border-nebula-purple rounded-full group-hover:bg-apollo-cyan transition-colors" />
                            <span className="text-xs font-mono text-orbit-orange uppercase tracking-widest">{item.year}</span>
                            <h3 className="text-xl font-bold text-star-white mt-1">{item.title}</h3>
                            <p className="text-sm text-apollo-cyan mb-2">{item.institution}</p>
                            <p className="text-telemetry-gray leading-relaxed text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}