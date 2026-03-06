import React from 'react';
import { motion } from 'framer-motion';

export default function Logo({ size = 'medium', className = '' }) {
    const sizeMap = {
        small: 'w-8 h-8 text-lg',
        medium: 'w-12 h-12 text-2xl',
        large: 'w-24 h-24 text-5xl',
    };

    const styleBase = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontWeight: '700',
        color: 'var(--text-main)',
        background: 'linear-gradient(135deg, rgba(0, 175, 255, 0.2), rgba(62, 111, 255, 0.8))',
        border: '1px solid var(--accent-cyan)',
        borderRadius: '12%',
        boxShadow: '0 0 15px rgba(0, 255, 255, 0.4), inset 0 0 10px rgba(0, 175, 255, 0.4)',
        textShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
    };

    let pxSize = 48;
    if (size === 'small') pxSize = 32;
    if (size === 'large') pxSize = 96;

    return (
        <motion.div
            className={`logo-container ${className}`}
            whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(0, 175, 255, 0.4), inset 0 0 10px rgba(0, 175, 255, 0.2)',
                borderColor: 'var(--accent-cyan)'
            }}
            style={{
                ...styleBase,
                width: pxSize,
                height: pxSize,
                fontSize: pxSize * 0.5,
                background: 'rgba(5, 8, 20, 0.5)',
                backdropFilter: 'blur(8px)',
                borderColor: 'rgba(0, 175, 255, 0.3)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 30% 30%, rgba(0, 175, 255, 0.2), transparent 70%)',
                zIndex: 0
            }} />

            <svg
                width={pxSize * 0.6}
                height={pxSize * 0.6}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: 'relative', zIndex: 1, filter: 'drop-shadow(0 0 5px var(--accent-cyan))' }}
            >
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
            </svg>
        </motion.div>
    );
}
