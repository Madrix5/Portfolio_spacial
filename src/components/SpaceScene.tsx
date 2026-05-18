"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';

// Tipos de datos para nuestra simulación estelar
type BodyType = 'star' | 'nebula' | 'blackhole';

interface CelestialBody {
    id: number;
    x: number;
    y: number;
    type: BodyType;
    age: number;
    lifespan: number;
    size: number;
}

export default function SpaceScene() {
    const [bodies, setBodies] = useState<CelestialBody[]>([]);
    const idCounter = useRef(0);

    // Función para generar coordenadas aleatorias dentro del disco galáctico (radio ~160px desde el centro 250,250)
    const getRandomCoords = (baseX = 250, baseY = 250, spread = 160) => {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * spread;
        return {
            x: baseX + Math.cos(angle) * radius,
            y: baseY + Math.sin(angle) * radius,
        };
    };

    // Función para crear una nueva estrella
    const spawnStar = useCallback((baseX?: number, baseY?: number, spread?: number) => {
        const { x, y } = getRandomCoords(baseX, baseY, spread);
        const newStar: CelestialBody = {
            id: idCounter.current++,
            x,
            y,
            type: 'star',
            age: 0,
            lifespan: Math.floor(Math.random() * 10) + 5, // Viven entre 5 y 15 "ticks"
            size: Math.random() * 2 + 1, // Tamaño entre 1 y 3
        };
        return newStar;
    }, []);

    // Inicializar el universo con algunas estrellas base
    useEffect(() => {
        const initialStars = Array.from({ length: 15 }, () => spawnStar());
        setBodies(initialStars);
    }, [spawnStar]);

    // MOTOR DE LA SIMULACIÓN (Tick cada 1000ms)
    useEffect(() => {
        const tick = setInterval(() => {
            setBodies((prevBodies) => {
                let newBodies: CelestialBody[] = [];
                let newSpawns: CelestialBody[] = [];

                prevBodies.forEach((body) => {
                    const updatedBody = { ...body, age: body.age + 1 };

                    if (updatedBody.age >= updatedBody.lifespan) {
                        // EL CUERPO MUERE: Decidir en qué se transforma
                        if (updatedBody.type === 'star') {
                            const destiny = Math.random();
                            if (destiny > 0.9) {
                                // 10% colapsa en Agujero Negro (vive 8 ticks)
                                newBodies.push({ ...updatedBody, type: 'blackhole', age: 0, lifespan: 8, size: 6 });
                            } else if (destiny > 0.7) {
                                // 20% explota en Nebulosa (vive 5 ticks)
                                newBodies.push({ ...updatedBody, type: 'nebula', age: 0, lifespan: 5, size: 15 });
                            }
                            // El 70% restante simplemente desaparece
                        } else if (updatedBody.type === 'nebula') {
                            // La nebulosa muere, pero al morir genera 1 o 2 estrellas en su zona
                            const spawns = Math.floor(Math.random() * 2) + 1;
                            for (let i = 0; i < spawns; i++) {
                                newSpawns.push(spawnStar(updatedBody.x, updatedBody.y, 30));
                            }
                        }
                        // Los agujeros negros simplemente se evaporan
                    } else {
                        // El cuerpo sigue vivo
                        newBodies.push(updatedBody);

                        // Si es una nebulosa viva, a veces expulsa una estrella temprana
                        if (updatedBody.type === 'nebula' && Math.random() > 0.7) {
                            newSpawns.push(spawnStar(updatedBody.x, updatedBody.y, 20));
                        }
                    }
                });

                // Mantener la población base: si hay muy pocas estrellas, el universo crea nuevas
                if (newBodies.length < 10) {
                    newSpawns.push(spawnStar());
                }

                return [...newBodies, ...newSpawns];
            });
        }, 1000);

        return () => clearInterval(tick);
    }, [spawnStar]);

    return (
        <div className="flex justify-center items-center w-full">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full shadow-[0_0_60px_rgba(156,39,176,0.1),_0_0_40px_rgba(0,229,255,0.08)] bg-[#030308] border border-[#1A2B3C]/50 overflow-hidden flex justify-center items-center relative">

                <svg
                    viewBox="0 0 500 500"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <radialGradient id="coreBulge" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                            <stop offset="20%" stopColor="#00E5FF" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#0A1128" stopOpacity="0" />
                        </radialGradient>

                        <radialGradient id="arm_cian" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#0A1128" stopOpacity="0" />
                        </radialGradient>

                        <radialGradient id="nebula_grad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#9C27B0" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#0A1128" stopOpacity="0" />
                        </radialGradient>
                    </defs>

                    {/* Fondo espacial puro */}
                    <circle cx="250" cy="250" r="250" fill="#0A0A16" opacity="0.6" />

                    {/* GRUPO ROTATORIO: Contiene la galaxia estática y el ecosistema dinámico */}
                    <g className="animate-[spin_120s_linear_infinite] origin-center">

                        {/* Galaxia Base (Estática para dar estructura) */}
                        <g transform="translate(250 250)">
                            <circle r="30" fill="url(#coreBulge)" />
                            <g opacity="0.6">
                                <path d="M0 0 C40 -40, 80 -80, 120 -40 C160 0, 120 80, 80 120 C40 160, -40 120, -80 80 C-120 40, -160 -40, -120 -80" fill="url(#arm_cian)" />
                                <path d="M0 0 C30 -30, 70 -70, 110 -30 C150 10, 110 70, 70 110 C30 150, -30 110, -70 70 C-110 30, -150 -30, -110 -70" fill="#030308" opacity="0.8" />
                            </g>
                            <g transform="rotate(180 0 0)" opacity="0.6">
                                <path d="M0 0 C40 -40, 80 -80, 120 -40 C160 0, 120 80, 80 120 C40 160, -40 120, -80 80 C-120 40, -160 -40, -120 -80" fill="url(#arm_cian)" />
                                <path d="M0 0 C30 -30, 70 -70, 110 -30 C150 10, 110 70, 70 110 C30 150, -30 110, -70 70 C-110 30, -150 -30, -110 -70" fill="#030308" opacity="0.8" />
                            </g>
                        </g>

                        {/* SIMULACIÓN DINÁMICA: Estrellas, Nebulosas y Agujeros Negros */}
                        <g>
                            {bodies.map((body) => {
                                if (body.type === 'star') {
                                    // Las estrellas parpadean ligeramente dependiendo de su edad
                                    const opacity = 1 - (body.age / body.lifespan) * 0.5;
                                    return <circle key={body.id} cx={body.x} cy={body.y} r={body.size} fill="#FFFFFF" opacity={opacity} className="transition-all duration-1000" />;
                                }

                                if (body.type === 'nebula') {
                                    // Nubes de gas pulsantes en expansión
                                    return <circle key={body.id} cx={body.x} cy={body.y} r={body.size + body.age * 2} fill="url(#nebula_grad)" className="animate-pulse transition-all duration-1000" />;
                                }

                                if (body.type === 'blackhole') {
                                    // Colapso oscuro con anillo de fotones cian
                                    return (
                                        <g key={body.id} className="transition-all duration-1000">
                                            <circle cx={body.x} cy={body.y} r={body.size + 2} fill="none" stroke="#00E5FF" strokeWidth="1" className="animate-ping opacity-50" />
                                            <circle cx={body.x} cy={body.y} r={body.size} fill="#000000" stroke="#00E5FF" strokeWidth="1.5" />
                                        </g>
                                    );
                                }
                                return null;
                            })}
                        </g>
                    </g>

                    {/* ========================================================== */}
                    {/* CAPA DE TELEMETRÍA (Estática, por encima de todo) */}
                    {/* ========================================================== */}
                    <g stroke="#00E5FF" strokeWidth="0.5" fill="none" opacity="0.3">
                        <circle cx="250" cy="250" r="30" />
                        <circle cx="250" cy="250" r="120" />
                        <circle cx="250" cy="250" r="220" />
                        <line x1="250" y1="10" x2="250" y2="490" />
                        <line x1="10" y1="250" x2="490" y2="250" />
                    </g>

                    {/* Etiquetas estáticas del HUD */}
                    <g fill="#00E5FF" fontFamily="monospace" fontSize="11" opacity="0.7">
                        <text x="260" y="125">SIM_STATUS: ACTIVE</text>
                        <text x="260" y="140">ENTITIES: {bodies.length}</text>
                        <text x="20" y="470" fontSize="9" opacity="0.5">let AI = new StellarEngine(ref);</text>
                    </g>
                </svg>
            </div>
        </div>
    );
}