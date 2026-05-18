"use client";
import React, { useState, useEffect } from 'react';

const REGEX = {
    name: /^[a-zA-ZÀ-ÿ\s]{3,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: /^[\s\S]{10,500}$/
};

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isValid, setIsValid] = useState({ name: false, email: false, message: false });
    const [isTouched, setIsTouched] = useState({ name: false, email: false, message: false });
    const [isFormValid, setIsFormValid] = useState(false);

    // Estados de envío
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        setIsFormValid(isValid.name && isValid.email && isValid.message);
    }, [isValid]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setIsTouched(prev => ({ ...prev, [name]: true }));

        if (name === 'name') setIsValid(prev => ({ ...prev, name: REGEX.name.test(value) }));
        if (name === 'email') setIsValid(prev => ({ ...prev, email: REGEX.email.test(value) }));
        if (name === 'message') setIsValid(prev => ({ ...prev, message: REGEX.message.test(value) }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setIsValid({ name: false, email: false, message: false });
                setIsTouched({ name: false, email: false, message: false });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            // Resetear el mensaje de éxito/error después de unos segundos
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }
    };

    const getBorderColor = (field: 'name' | 'email' | 'message') => {
        if (!isTouched[field]) return "border-panel-blue focus:border-apollo-cyan";
        return isValid[field] ? "border-emerald-400" : "border-red-500 focus:border-red-400";
    };

    return (
        <section id="contacto" className="py-20 bg-deep-space">
            <div className="max-w-4xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-star-white mb-12 flex items-center gap-4 tracking-tight">
                    <span className="text-apollo-cyan font-mono text-xl">04.</span> Transmisión de Datos
                </h2>

                <div className="bg-panel-blue/5 border border-panel-blue p-8 rounded-xl max-w-2xl mx-auto">
                    <p className="text-telemetry-gray mb-8 text-center">
                        Completa los parámetros de contacto. Los sistemas verificarán la integridad de los datos en tiempo real antes de autorizar la transmisión.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">

                        {/* Mensajes de Estado Integrados en el flujo (Sin 'absolute') */}
                        {submitStatus === 'success' && (
                            <div className="bg-emerald-500/20 border border-emerald-500 text-emerald-400 p-4 rounded text-center font-mono text-sm animate-pulse transition-all">
                                &gt; TRANSMISIÓN COMPLETADA CON ÉXITO
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="bg-red-500/20 border border-red-500 text-red-400 p-4 rounded text-center font-mono text-sm animate-pulse transition-all">
                                &gt; ERROR CRÍTICO AL ENVIAR LOS DATOS
                            </div>
                        )}

                        <div>
                            <label htmlFor="name" className="block text-xs font-mono text-apollo-cyan uppercase mb-2">
                                Identificador (Nombre)
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                placeholder="Ej. Comandante Shepard"
                                className={`w-full bg-deep-space text-star-white p-3 rounded border outline-none transition-colors ${getBorderColor('name')} disabled:opacity-50`}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-xs font-mono text-apollo-cyan uppercase mb-2">
                                Frecuencia de Respuesta (Email)
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                placeholder="ejemplo@flota.com"
                                className={`w-full bg-deep-space text-star-white p-3 rounded border outline-none transition-colors ${getBorderColor('email')} disabled:opacity-50`}
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs font-mono text-apollo-cyan uppercase mb-2">
                                Paquete de Datos (Mensaje)
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                placeholder="Describe los detalles de la misión (mínimo 10 caracteres)..."
                                className={`w-full bg-deep-space text-star-white p-3 rounded border outline-none transition-colors resize-none ${getBorderColor('message')} disabled:opacity-50`}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={!isFormValid || isSubmitting}
                            className={`mt-4 px-6 py-3 font-mono text-sm uppercase tracking-wider rounded transition-all duration-300 self-center
                ${(isFormValid && !isSubmitting)
                                    ? "border border-apollo-cyan text-deep-space bg-apollo-cyan hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] cursor-pointer"
                                    : "border border-panel-blue text-telemetry-gray bg-panel-blue/10 cursor-not-allowed opacity-50"
                                }`}
                        >
                            {isSubmitting ? "Transmitiendo Datos..." : "Iniciar Transmisión"}
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}