"use client";
import { motion } from "framer-motion";

export const Reveal = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Aumentado de 20 a 50 para que se note más
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} // Se activa un poco antes de llegar
            transition={{
                duration: 0.8, // Más lento para que el ojo lo capte bien
                ease: [0.21, 0.47, 0.32, 0.98] // Curva de velocidad tipo "entrada suave"
            }}
        >
            {children}
        </motion.div>
    );
};