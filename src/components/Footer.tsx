export default function Footer() {
    return (
        <footer className="w-full bg-deep-space border-t border-panel-blue py-6">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-sm font-bold text-star-white">
                        <span className="text-nebula-purple">/</span>jimdev
                    </p>
                    <p className="text-[10px] text-telemetry-gray uppercase tracking-widest font-mono">Terminal de Ingeniería</p>
                </div>
                <div className="flex gap-6 text-xs text-telemetry-gray">
                    <a href="https://github.com/Madrix5" target="_blank" rel="noopener noreferrer" className="hover:text-apollo-cyan transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/ajimenez-dev" target="_blank" rel="noopener noreferrer" className="hover:text-apollo-cyan transition-colors">LinkedIn</a>
                </div>
                <div className="text-[10px] text-telemetry-gray text-center md:text-right font-mono">
                    <p className="text-apollo-cyan">STATUS: DESPLEGADO</p>
                    <p>© 2026 · BADALONA, ES</p>
                </div>
            </div>
        </footer>
    );
}