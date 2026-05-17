export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-deep-space border-t border-panel-blue py-4 mt-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                    {/* Branding Minimalista */}
                    <div className="text-center md:text-left">
                        <p className="text-sm font-bold text-star-white">
                            <span className="text-nebula-purple">/</span>TuNombre
                        </p>
                        <p className="text-[10px] text-telemetry-gray uppercase tracking-widest mt-0.5">
                            Software Aeroespacial
                        </p>
                    </div>

                    {/* Enlaces Sociales Compactos */}
                    <div className="flex gap-5 text-xs text-telemetry-gray">
                        <a href="https://github.com" target="_blank" className="hover:text-apollo-cyan transition-colors">GitHub</a>
                        <a href="https://linkedin.com" target="_blank" className="hover:text-apollo-cyan transition-colors">LinkedIn</a>
                        <a href="https://twitter.com" target="_blank" className="hover:text-apollo-cyan transition-colors">Twitter</a>
                    </div>

                    {/* Estado y Copyright Unificados */}
                    <div className="text-center md:text-right text-[10px] text-telemetry-gray">
                        <p className="font-mono text-apollo-cyan uppercase tracking-widest mb-0.5">
                            Fase 1: <span className="text-orbit-orange">OK</span>
                        </p>
                        <p>© {currentYear} · Next.js & Tailwind</p>
                    </div>

                </div>
            </div>
        </footer>
    );
}