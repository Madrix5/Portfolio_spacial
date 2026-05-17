export default function TechStack() {
    const skillCategories = [
        {
            title: "Sistemas de Vuelo (Frontend & Web)",
            skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
            color: "border-apollo-cyan/50",
        },
        {
            title: "Telemetría & Datos (Backend & Data)",
            skills: ["Python", "Node.js", "SQL", "APIs REST", "Pandas"],
            color: "border-nebula-purple/50",
        },
        {
            title: "Navegación Autónoma (IA & ML)",
            skills: ["Machine Learning", "TensorFlow", "Scikit-Learn", "Computer Vision"],
            color: "border-orbit-orange/50",
        },
        {
            title: "Infraestructura Terrestre (DevOps)",
            skills: ["Git & GitHub", "Docker", "Vercel", "Testing"],
            color: "border-telemetry-gray/50",
        }
    ];

    return (
        <section id="stack" className="max-w-5xl mx-auto py-24 px-4 w-full">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-star-white mb-4">
                    <span className="text-nebula-purple">01.</span> Especificaciones Técnicas
                </h2>
                <p className="text-telemetry-gray text-lg">
                    Herramientas y lenguajes calibrados para el desarrollo de sistemas críticos, plataformas web y análisis espacial.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className={`bg-panel-blue p-6 rounded-lg border-l-4 ${category.color} hover:bg-opacity-80 transition-all`}
                    >
                        <h3 className="text-xl font-semibold text-star-white mb-6 flex items-center gap-2">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className="px-3 py-1.5 bg-deep-space border border-telemetry-gray/20 rounded text-sm text-apollo-cyan font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}