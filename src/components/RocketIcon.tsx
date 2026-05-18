import React from 'react';

export const RocketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className={`w-6 h-6 ${props.className || ''}`}
    >
        <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18V22" stroke="#FFA726" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 17V22" stroke="#FFA726" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 17V22" stroke="#FFA726" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);