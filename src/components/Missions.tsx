import Link from "next/link";
import { projects } from "@/data/projects";

export default function Missions() {
    return (
        <section id="proyectos" className="max-w-5xl mx-auto py-24 px-4 w-full">
            <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-star-white mb-4">
                    <span className="text-nebula-purple">02.</span> Manifiesto de Misiones
                </h2>
                <p className="text-telemetry-gray text-lg max-w-2xl">
                    Proyectos desarrollados bajo estándares de alta ingeniería, enfocados en la resiliencia del software y la precisión matemática.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`group relative bg-panel-blue border border-telemetry-gray/10 rounded-xl p-8 hover:border-nebula-purple/50 transition-all overflow-hidden bg-linear-to-br ${project.color} to-transparent`}
                    >
                        <span className="absolute -right-4 -top-8 text-9xl font-black text-star-white/5 italic group-hover:text-nebula-purple/10 transition-colors">
                            {project.id}
                        </span>

                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="grow max-w-2xl">
                                <div className="text-apollo-cyan text-xs font-bold tracking-widest uppercase mb-2">
                                    {project.category}
                                </div>
                                <h3 className="text-2xl font-bold text-star-white mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-telemetry-gray mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] px-2 py-1 bg-deep-space border border-telemetry-gray/30 rounded text-telemetry-gray">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 text-xs text-orbit-orange font-mono">
                                    <span className="w-2 h-2 rounded-full bg-orbit-orange animate-pulse"></span>
                                    {project.status}
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 min-w-40">
                                {/* Aquí hemos cambiado el botón por un Link de Next.js */}
                                <Link
                                    href={`/proyectos/${project.slug}`}
                                    className="px-6 py-2.5 bg-nebula-purple text-star-white text-center text-sm font-bold rounded hover:bg-opacity-80 transition-all"
                                >
                                    Ver Detalles
                                </Link>
                                <a href="#" className="px-6 py-2.5 border border-telemetry-gray/30 text-star-white text-center text-sm font-bold rounded hover:border-apollo-cyan transition-all">
                                    Código Fuente
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}