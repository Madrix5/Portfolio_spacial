import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 bg-deep-space/80 backdrop-blur-md border-b border-panel-blue">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                {/* Logo / Nombre */}
                <Link href="/" className="text-xl font-bold text-star-white hover:text-apollo-cyan transition-colors">
                    <span className="text-nebula-purple">/</span>TuNombre
                </Link>

                {/* Enlaces de Navegación */}
                <nav className="hidden md:flex gap-8 text-sm font-medium text-telemetry-gray">
                    <Link href="#stack" className="hover:text-star-white transition-colors">
                        01. Tech Stack
                    </Link>
                    <Link href="#proyectos" className="hover:text-star-white transition-colors">
                        02. Misiones (Proyectos)
                    </Link>
                </nav>

                {/* Enlace Externo (Ej: GitHub o Contacto) */}
                <a
                    href="mailto:tu-correo@ejemplo.com"
                    className="text-sm font-medium text-apollo-cyan border border-apollo-cyan/30 px-4 py-2 rounded-md hover:bg-apollo-cyan/10 transition-colors"
                >
                    Contactar
                </a>

            </div>
        </header>
    );
}