export default function Hero() {
    return (
        <section className="min-h-[85vh] flex flex-col justify-center items-start max-w-5xl mx-auto py-20 px-4">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-panel-blue border border-nebula-purple/30 text-apollo-cyan text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-orbit-orange animate-pulse"></span>
                Sistemas online · Buscando nuevos desafíos
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-star-white mb-6 leading-tight">
                Software Engineer construyendo <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-nebula-purple to-apollo-cyan">
                    sistemas terrestres para el espacio.
                </span>
            </h1>

            <p className="text-telemetry-gray text-lg md:text-xl max-w-3xl leading-relaxed mb-10">
                Soy un desarrollador junior apasionado por unir el análisis de datos, la inteligencia artificial y el desarrollo de plataformas web fiables. Mi objetivo técnico es aplicar el rigor del software crítico para vuelos espaciales en aplicaciones modernas de consumo.
            </p>

            <div className="flex flex-wrap gap-4">
                <a
                    href="#proyectos"
                    className="px-8 py-3.5 rounded-md bg-nebula-purple text-star-white font-semibold hover:bg-opacity-80 transition-all shadow-[0_0_15px_rgba(124,77,255,0.3)]"
                >
                    Iniciar Secuencia de Proyectos
                </a>

                {/* BOTÓN ACTUALIZADO: Manual de Operaciones (CV) */}
                <a
                    href="/manual-operaciones.pdf"
                    download="CV_Adrian_Jimenez.pdf"
                    className="px-8 py-3.5 rounded-md bg-panel-blue border border-telemetry-gray/30 text-star-white font-semibold hover:border-apollo-cyan transition-colors flex items-center gap-2 shadow-[0_0_10px_rgba(0,229,255,0.05)]"
                >
                    <svg className="w-4 h-4 text-apollo-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16v1a3 3 0 003 3h12a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Descargar Manual de Operaciones
                </a>
            </div>

        </section>
    );
}