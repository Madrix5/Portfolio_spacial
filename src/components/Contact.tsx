"use client";

import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message: string }>({
        type: "idle",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus({ type: "loading", message: "Iniciando transmisión de datos..." });

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus({ type: "success", message: "Transmisión completada con éxito. Conexión establecida." });
                (e.target as HTMLFormElement).reset();
            } else {
                throw new Error();
            }
        } catch (error) {
            setStatus({ type: "error", message: "Fallo en la transmisión. Reintente la conexión." });
        }
    };

    return (
        <section id="contacto" className="max-w-3xl mx-auto py-24 px-4 w-full">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-star-white mb-4">
                    <span className="text-nebula-purple">04.</span> Transmisión de Datos
                </h2>
                <p className="text-telemetry-gray text-lg">
                    ¿Tienes una misiones en mente? Mi terminal de comunicaciones está abierta para nuevas oportunidades.
                </p>
            </div>

            <div className="bg-panel-blue border border-telemetry-gray/20 rounded-2xl p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-apollo-cyan to-transparent opacity-50"></div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-xs font-mono text-apollo-cyan uppercase tracking-widest">
                                Identificación (Nombre)
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Ej. Comandante Shepard"
                                className="bg-deep-space border border-telemetry-gray/30 rounded-lg px-4 py-3 text-star-white placeholder:text-telemetry-gray/50 focus:outline-none focus:border-apollo-cyan focus:ring-1 focus:ring-apollo-cyan transition-all"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-xs font-mono text-apollo-cyan uppercase tracking-widest">
                                Frecuencia (Email)
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="tu@agencia-espacial.com"
                                className="bg-deep-space border border-telemetry-gray/30 rounded-lg px-4 py-3 text-star-white placeholder:text-telemetry-gray/50 focus:outline-none focus:border-apollo-cyan focus:ring-1 focus:ring-apollo-cyan transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-xs font-mono text-apollo-cyan uppercase tracking-widest">
                            Carga Útil (Mensaje)
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Detalles de la misión o propuesta..."
                            className="bg-deep-space border border-telemetry-gray/30 rounded-lg px-4 py-3 text-star-white placeholder:text-telemetry-gray/50 focus:outline-none focus:border-apollo-cyan focus:ring-1 focus:ring-apollo-cyan transition-all resize-none"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status.type === "loading"}
                        className="mt-4 w-full md:w-auto self-center px-8 py-4 bg-nebula-purple text-star-white font-bold rounded-lg hover:bg-opacity-80 transition-all flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(124,77,255,0.3)] disabled:opacity-50"
                    >
                        <span className="w-2 h-2 rounded-full bg-star-white animate-pulse"></span>
                        {status.type === "loading" ? "Transmitiendo..." : "Iniciar Transmisión"}
                    </button>

                    {status.type !== "idle" && (
                        <div className={`mt-4 p-4 rounded-lg text-sm font-mono text-center border ${status.type === "success" ? "bg-panel-blue border-apollo-cyan text-apollo-cyan" :
                                status.type === "error" ? "bg-panel-blue border-orbit-orange text-orbit-orange" : "bg-panel-blue border-telemetry-gray/20 text-telemetry-gray"
                            }`}>
                            {status.message}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}