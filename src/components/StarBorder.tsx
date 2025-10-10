import React, { ReactNode } from 'react';

interface StarBorderProps {
    children: ReactNode;
    color?: string;
    speed?: string;
    className?: string;
}

const StarBorder: React.FC<StarBorderProps> = ({ children, color = 'rgba(147, 51, 234, 0.6)', speed = '6s', className = '' }) => {
    return (
        <div className={`relative p-1 rounded-2xl ${className}`}>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-75 blur-sm animate-pulse"></div>
            <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg">
                {children}
            </div>
        </div>
    );
};

export default StarBorder;