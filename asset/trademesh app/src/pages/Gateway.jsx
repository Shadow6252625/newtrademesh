import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Logo from '../components/Logo';

export default function Gateway() {
    const navigate = useNavigate();

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>

            {/* Absolute Logo Top Left (just as brand requests) */}
            <div style={{ position: 'absolute', top: 20, left: 20 }}>
                <Logo size="small" />
            </div>

            {/* Main Content */}
            <motion.div
                className="glass-panel"
                style={{ padding: '60px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '600px', width: '90%', position: 'relative' }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="hud-corner hud-tl" style={{ width: 20, height: 20, opacity: 0.8 }} />
                <div className="hud-corner hud-tr" style={{ width: 20, height: 20, opacity: 0.8 }} />
                <div className="hud-corner hud-bl" style={{ width: 20, height: 20, opacity: 0.8 }} />
                <div className="hud-corner hud-br" style={{ width: 20, height: 20, opacity: 0.8 }} />

                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    style={{ marginBottom: '40px' }}
                >
                    <Logo size="large" />
                </motion.div>

                <motion.h1
                    className="accent-gradient glow-text"
                    style={{ fontSize: '3.5rem', marginBottom: '15px', fontWeight: 800, letterSpacing: '4px' }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    TRADEMESH
                </motion.h1>

                <motion.div
                    style={{ width: '40px', height: '2px', background: 'var(--accent-cyan)', marginBottom: '25px', borderRadius: '1px' }}
                    initial={{ width: 0 }}
                    animate={{ width: 40 }}
                    transition={{ delay: 0.5, duration: 1 }}
                />

                <motion.p
                    style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: '1.6', maxWidth: '400px', letterSpacing: '0.5px' }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    NEURAL_FABRIC: DECENTRALIZED_EXCHANGE_REIMAGINED.
                </motion.p>

                <motion.button
                    className="btn-primary"
                    onClick={() => navigate('/configure')}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ padding: '15px 40px' }}
                >
                    INITIALIZE_NODE <ArrowRight size={18} />
                </motion.button>
            </motion.div>

            {/* Animated Thread lines (pseudo mesh) */}
            <div className="mesh-grid" style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, pointerEvents: 'none',
                backgroundImage: 'linear-gradient(rgba(0, 175, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 175, 255, 0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                transform: 'perspective(500px) rotateX(60deg)',
                transformOrigin: 'bottom',
                opacity: 0.3
            }} />
        </div>
    );
}
