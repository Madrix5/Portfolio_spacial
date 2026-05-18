import React from 'react';

export const RocketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className={`w-6 h-6 ${props.className || ''}`}
    >
        {/* Cuerpo principal del cohete */}
        <path
            d="M12 2C12 2 9 6 9 12C9 15 10 18 12 20C14 18 15 15 15 12C15 6 12 2 12 2Z"
            fill="#00E5FF"
            className="fill-apollo-cyan"
        />
        {/* Aletas laterales */}
        <path d="M9 15L6 19L9 18V15Z" fill="#00B8D4" />
        <path d="M15 15L18 19L15 18V15Z" fill="#00B8D4" />
        {/* Ventana de mando */}
        <circle cx="12" cy="9" r="1.5" fill="#1A1A1A" />
        {/* Propulsor de plasma (animado por CSS) */}
        <path
            d="M11 20L12 24L13 20H11Z"
            fill="#FFA726"
            className="animate-pulse"
        />
    </svg>
);