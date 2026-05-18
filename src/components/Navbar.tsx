import Link from 'next/link';
import { RocketIcon } from './RocketIcon';

export default function Navbar() {
    return (
        <nav className="w-full bg-deep-space border-b border-panel-blue sticky top-0 z-50 py-4">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <RocketIcon className="group-hover:animate-bounce transition-all" />
                    <span className="text-xl font-bold text-star-white tracking-tighter">
                        <span className="text-nebula-purple">/</span>jimdev
                    </span>
                </Link>
                <div className="hidden md:flex gap-8 text-sm font-medium text-telemetry-gray">
                    <Link href="#sobre-mi" className="hover:text-apollo-cyan transition-colors">Sobre mí</Link>
                    <Link href="#proyectos" className="hover:text-apollo-cyan transition-colors">Proyectos</Link>
                    <Link href="#contacto" className="hover:text-apollo-cyan transition-colors">Contacto</Link>
                </div>
            </div>
        </nav>
    );
}