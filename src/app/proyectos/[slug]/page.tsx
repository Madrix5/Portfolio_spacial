import { projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectDetails({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    // En las versiones modernas de Next.js, params es una promesa
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    // Si alguien pone una URL inventada, lo mandamos a error 404
    if (!project) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto py-12 px-4 w-full">
            {/* Botón de regreso */}
            <Link
                href="/#proyectos"
                className="inline-flex items-center text-apollo-cyan hover:text-star-white transition-colors mb-12 font-mono text-sm uppercase tracking-widest"
            >
                ← Volver al Centro de Mando
            </Link>

            {/* Cabecera del Proyecto */}
            <div className={`p-8 md:p-12 rounded-2xl bg-panel-blue border border-telemetry-gray/20 bg-linear-to-br ${project.color} to-transparent mb-12 relative overflow-hidden`}>
                <span className="absolute -right-8 -top-12 text-[200px] font-black text-star-white/5 italic select-none">
                    {project.id}
                </span>
                <div className="relative z-10">
                    <div className="text-apollo-cyan text-sm font-bold tracking-widest uppercase mb-4">
                        {project.category}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-star-white mb-6">
                        {project.title}
                    </h1>
                    <div className="flex items-center gap-3 text-sm text-orbit-orange font-mono bg-deep-space/50 w-fit px-4 py-2 rounded-md border border-orbit-orange/20">
                        <span className="w-2.5 h-2.5 rounded-full bg-orbit-orange animate-pulse"></span>
                        {project.status}
                    </div>
                </div>
            </div>

            {/* Contenido Técnico */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold text-star-white mb-6 flex items-center gap-2">
                        <span className="text-nebula-purple">/</span> Resumen Operativo
                    </h2>
                    <p className="text-telemetry-gray text-lg leading-relaxed mb-8">
                        {project.description}
                    </p>
                    <h2 className="text-2xl font-bold text-star-white mb-6 flex items-center gap-2">
                        <span className="text-nebula-purple">/</span> Arquitectura del Sistema
                    </h2>
                    <p className="text-telemetry-gray text-lg leading-relaxed">
                        {project.fullDescription}
                    </p>
                </div>

                {/* Panel Lateral de Especificaciones */}
                <div>
                    <div className="bg-panel-blue border border-telemetry-gray/20 p-6 rounded-xl">
                        <h3 className="text-sm font-mono text-star-white uppercase tracking-widest mb-6 border-b border-telemetry-gray/20 pb-4">
                            Tecnologías Base
                        </h3>
                        <div className="flex flex-col gap-3">
                            {project.tags.map((tag, i) => (
                                <div key={i} className="flex items-center gap-3 text-telemetry-gray">
                                    <span className="w-1.5 h-1.5 bg-apollo-cyan rounded-full"></span>
                                    {tag}
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-col gap-4">
                            <a href="#" className="w-full text-center px-6 py-3 bg-nebula-purple text-star-white text-sm font-bold rounded hover:bg-opacity-80 transition-all">
                                Abrir Repositorio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}