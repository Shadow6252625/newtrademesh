'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    Activity,
    Cpu,
    Globe,
    Zap,
    Shield,
    TrendingUp,
    History,
    Layers,
    Wallet,
    X,
    ChevronRight,
    AlertTriangle,
    Play,
    Pause,
    FastForward,
    Flame,
    Bug
} from 'lucide-react';
import Logo from '@/components/trademesh-app/components/Logo';
import { mockEngine } from '@/components/trademesh-app/services/mockEngine';

// --- Components ---

const StatusBadge = ({ label, color = "var(--accent-cyan)", pulse = false }: { label: string, color?: string, pulse?: boolean }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '2px 8px', background: `${color}10`, border: `1px solid ${color}30`, borderRadius: '4px' }}>
        {pulse && <div style={{ width: 6, height: 6, borderRadius: '50%', background: color, animation: 'pulse 2s infinite' }} />}
        <span className="mono" style={{ fontSize: '0.65rem', color: color, fontWeight: 700, letterSpacing: '0.5px' }}>{label}</span>
    </div>
);

const Panel = ({ title, icon: Icon, children, className = "", headerExtra = null }: { title: string, icon?: any, children: React.ReactNode, className?: string, headerExtra?: React.ReactNode }) => (
    <motion.div
        className={`glass-panel ${className}`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}
    >
        <div className="hud-corner hud-tl" />
        <div className="hud-corner hud-tr" />
        <div className="hud-corner hud-bl" />
        <div className="hud-corner hud-br" />

        <div style={{ padding: '10px 15px', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {Icon && <Icon size={14} color="var(--accent-cyan)" style={{ filter: 'drop-shadow(0 0 5px var(--accent-cyan))' }} />}
                <span className="mono" style={{ fontWeight: 700, fontSize: '0.75rem', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.9)' }}>{title}</span>
            </div>
            {headerExtra}
        </div>
        <div style={{ flex: 1, padding: '15px', overflowY: 'auto', position: 'relative', zIndex: 1 }}>
            {children}
        </div>
    </motion.div>
);

const LiveMonitorPanel = ({ title, icon: Icon, children, className = "" }: { title: string, icon?: any, children: React.ReactNode, className?: string }) => (
    <motion.div
        className={`glass-panel ${className}`}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative', border: '1px solid rgba(0, 255, 255, 0.4)', height: '100%' }}
    >
        <div className="hud-corner hud-tl" style={{ opacity: 0.8 }} />
        <div className="hud-corner hud-tr" style={{ opacity: 0.8 }} />
        <div className="hud-corner hud-bl" style={{ opacity: 0.8 }} />
        <div className="hud-corner hud-br" style={{ opacity: 0.8 }} />

        {/* Scanning Line Effect */}
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--accent-cyan), transparent)',
            zIndex: 4,
            animation: 'scanLine 6s linear infinite',
            boxShadow: '0 0 20px var(--accent-cyan)',
            opacity: 0.4
        }} />

        {/* Content Overlay */}
        <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '10px 15px', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {Icon && <Icon size={14} className="glow-text" color="var(--accent-cyan)" />}
                    <span className="mono glow-text" style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '2.5px' }}>{title}</span>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                    <StatusBadge label="LIVE_FEED" color="#FF4444" pulse />
                </div>
            </div>
            <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
                {children}
            </div>
        </div>
    </motion.div>
);

const WalletModal = ({ isOpen, onClose, onConnect }: { isOpen: boolean, onClose: () => void, onConnect: (provider: string, objectName: string) => void }) => {
    const [connecting, setConnecting] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const wallets = [
        { name: 'Phantom', icon: '/phantom-logo.png', objectName: 'phantom', downloadUrl: 'https://phantom.app/' },
        { name: 'Solflare', icon: '/solflare-logo.png', objectName: 'solflare', downloadUrl: 'https://solflare.com/' }
    ];

    const handleConnect = async (wallet: typeof wallets[0]) => {
        setConnecting(wallet.name);
        setError(null);
        try {
            const isInstalled = (window as any)[wallet.objectName] !== undefined;
            if (!isInstalled) {
                setError(`${wallet.name} not detected.`);
                setTimeout(() => window.open(wallet.downloadUrl, '_blank'), 1000);
                return;
            }
            await onConnect(wallet.name, wallet.objectName);
        } catch (err: any) {
            setError(err.message || "Connection failed");
        } finally {
            setConnecting(null);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
                    />
                    <motion.div
                        className="glass-panel"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        style={{ position: 'relative', width: '100%', maxWidth: '420px', padding: '40px', zIndex: 1001, border: '1px solid var(--accent-cyan)' }}
                    >
                        <div className="hud-corner hud-tl" />
                        <div className="hud-corner hud-tr" />
                        <div className="hud-corner hud-bl" />
                        <div className="hud-corner hud-br" />

                        <button onClick={onClose} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                            <X size={20} />
                        </button>

                        <div style={{ textAlign: 'center', marginBottom: '35px' }}>
                            <h2 className="glow-text mono" style={{ fontSize: '1.5rem', marginBottom: '10px', letterSpacing: '2px' }}>AUTHENTICATE_IDENTITY</h2>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Choose a secure relay for on-chain execution</p>
                        </div>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{ marginBottom: '20px', padding: '12px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', color: '#ef4444', fontSize: '0.75rem', textAlign: 'center' }}
                            >
                                {error}
                            </motion.div>
                        )}

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {wallets.map(w => (
                                <button
                                    key={w.name}
                                    className="form-input"
                                    onClick={() => handleConnect(w)}
                                    disabled={!!connecting}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        padding: '15px 20px',
                                        background: connecting === w.name ? 'rgba(0, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                                        borderColor: connecting === w.name ? 'var(--accent-cyan)' : 'var(--glass-border)'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'white', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px rgba(255,255,255,0.1)' }}>
                                            <img src={w.icon} alt={w.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                        </div>
                                        <span className="mono" style={{ fontWeight: 700, letterSpacing: '1px' }}>{w.name}</span>
                                    </div>
                                    <ChevronRight size={16} color="var(--text-muted)" />
                                </button>
                            ))}
                        </div>

                        <p style={{ textAlign: 'center', fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '30px', letterSpacing: '0.5px' }}>
                            Secured by TradeMesh Multi-Sig Neural Layers
                        </p>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

// --- Main Dashboard ---

export default function NodeDashboard() {
    const params = useParams();
    const nodeId = params?.nodeId as string;
    const [wallet, setWallet] = useState<string | null>(null);
    const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
    const [trades, setTrades] = useState<any[]>([]);
    const [alerts, setAlerts] = useState<any[]>([]);
    const [routeInfo, setRouteInfo] = useState({ latency: 0, successRate: "100" });
    const [stats, setStats] = useState({ uptime: '99.98%', tps: 0, agents: 124 });
    const [chartData, setChartData] = useState<number[]>([]);
    const [simPrefs, setSimPrefs] = useState(mockEngine.prefs);

    // Mouse Rotation Logic for Network Orb
    const mX = useMotionValue(0);
    const mY = useMotionValue(0);
    const rotateX = useTransform(mY, [-300, 300], [20, -20]);
    const rotateY = useTransform(mX, [-300, 300], [-20, 20]);
    const springX = useSpring(rotateX, { damping: 35, stiffness: 150 });
    const springY = useSpring(rotateY, { damping: 35, stiffness: 150 });

    const onMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        mX.set(x);
        mY.set(y);
    };

    const onMouseLeave = () => {
        mX.set(0);
        mY.set(0);
    };

    // Simulation Management
    useEffect(() => {
        if (!nodeId) return;

        // Start engine
        mockEngine.start(nodeId, 'user-1');

        // Subscribe to channels
        const unsubTrades = mockEngine.subscribe('trade_updates', (trade: any) => {
            setTrades(prev => [trade, ...prev].slice(0, 15));
            setChartData(prev => {
                const lastVal = prev.length > 0 ? prev[prev.length - 1] : 50;
                const change = (parseFloat(trade.volume) * (trade.side === 'BUY' ? 1 : -1)) * 2;
                return [...prev, Math.max(10, Math.min(90, lastVal + change))].slice(-25);
            });
            setStats(prev => ({ ...prev, tps: Math.floor(Math.random() * 40 + 30) }));
        });

        const unsubRoutes = mockEngine.subscribe('route_updates', (route: any) => {
            setRouteInfo({ latency: route.latencyMs, successRate: route.successRate });
        });

        const unsubAlerts = mockEngine.subscribe('anomaly_alerts', (alert: any) => {
            setAlerts(prev => [alert, ...prev].slice(0, 5));
        });

        return () => {
            unsubTrades();
            unsubRoutes();
            unsubAlerts();
            mockEngine.stop();
        };
    }, [nodeId]);

    const updateSimPrefs = (newPrefs: any) => {
        const updated = { ...simPrefs, ...newPrefs };
        setSimPrefs(updated);
        mockEngine.savePrefs(updated);
    };

    const connectWallet = async (provider: string, objectName: string) => {
        try {
            const walletObj = (window as any)[objectName];
            let address = "";

            if (objectName === "phantom") {
                const response = await walletObj.solana.connect();
                address = response.publicKey.toString();
            } else {
                const response = await walletObj.connect();
                address = response.publicKey.toString();
            }

            const formatted = `${address.slice(0, 4)}...${address.slice(-4)}`;
            setWallet(formatted);
            setIsWalletModalOpen(false);
            // Real market hand-off simulation
            updateSimPrefs({ enabled: false, preferredMode: 'real' });
            console.log(`Connected to ${provider}: ${address}`);
        } catch (err) {
            console.error("Connection failed", err);
            // Fallback for demo if needed
            setWallet(provider === 'Phantom' ? 'Phan...4k2x' : 'Solf...9m1p');
            setIsWalletModalOpen(false);
        }
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

            {/* Top Bar */}
            <header className="glass-panel" style={{
                margin: '15px 20px',
                padding: '12px 25px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(11, 14, 24, 0.4)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--accent-cyan), transparent)', opacity: 0.3 }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ transform: 'scale(1.1)' }}>
                        <Logo size="small" />
                    </div>
                    <div>
                        <div className="mono" style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '4px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: 'var(--primary-start)' }}>TRADE</span>MESH
                        </div>
                        <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '2px' }}>Intelligent_Fabric_v4.2</div>
                    </div>

                    <div style={{ width: 1, height: 28, background: 'rgba(255, 255, 255, 0.1)', marginLeft: '10px' }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>NODE_ID</div>
                        <div className="mono" style={{ color: 'var(--accent-cyan)', fontSize: '0.75rem', fontWeight: 700 }}>{nodeId}</div>
                    </div>

                    <StatusBadge label="ACTIVE_DEPLOYMENT" color="var(--accent-emerald)" pulse />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>SYSTEM_TIME</div>
                        <div className="mono" style={{ fontSize: '0.75rem', fontWeight: 600 }}>{new Date().toLocaleTimeString()}</div>
                    </div>

                </div>
            </header>

            {/* Grid Layout */}
            <main style={{
                flex: 1,
                display: 'grid',
                gridTemplateColumns: '320px 1fr 340px',
                gridTemplateRows: '450px 1fr 180px',
                gap: '15px',
                padding: '0 20px 15px 20px'
            }}>

                {/* Left Column: Stats & Simulator Controls */}
                <div style={{ gridRow: '1 / 3', display: 'flex', flexDirection: 'column', gap: '15px' }}>

                    <Panel title="Simulator" icon={Cpu}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'stretch', justifyContent: 'space-between' }}>
                                <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>ENGINE_STATE</span>
                                <button
                                    onClick={() => updateSimPrefs({ enabled: !simPrefs.enabled })}
                                    style={{
                                        background: simPrefs.enabled ? 'rgba(0,175,255,0.1)' : 'rgba(255,255,255,0.02)',
                                        border: '1px solid var(--glass-border)',
                                        color: simPrefs.enabled ? 'var(--accent-cyan)' : 'var(--text-muted)',
                                        padding: '4px 12px',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        fontSize: '0.65rem',
                                        fontWeight: 700,
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {simPrefs.enabled ? <><Pause size={10} /> RUNNING</> : <><Play size={10} /> PAUSED</>}
                                </button>
                            </div>

                            <div style={{ width: '100%' }}>
                                <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px', letterSpacing: '1px' }}>THROUGHPUT_MODE</span>
                                <div style={{ display: 'flex', gap: '4px', padding: '2px', background: 'rgba(0,0,0,0.2)', borderRadius: '6px' }}>
                                    {['slow', 'medium', 'fast'].map(s => (
                                        <button
                                            key={s}
                                            onClick={() => updateSimPrefs({ speed: s })}
                                            style={{
                                                flex: 1,
                                                background: simPrefs.speed === s ? 'rgba(0,175,255,0.15)' : 'transparent',
                                                border: 'none',
                                                color: simPrefs.speed === s ? 'var(--accent-cyan)' : 'var(--text-muted)',
                                                padding: '6px 0',
                                                borderRadius: '4px',
                                                fontSize: '0.6rem',
                                                fontWeight: 600,
                                                textTransform: 'uppercase',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => mockEngine.injectAnomaly(nodeId)}
                                style={{
                                    marginTop: '5px',
                                    padding: '10px',
                                    fontSize: '0.65rem',
                                    background: 'rgba(239, 68, 68, 0.05)',
                                    border: '1px solid rgba(239, 68, 68, 0.2)',
                                    color: '#ef4444',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontWeight: 700,
                                    letterSpacing: '1px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px'
                                }}
                            >
                                <Bug size={12} /> TRIGGER_ANOMALY_TEST
                            </button>
                        </div>
                    </Panel>

                    <Panel title="Network Overview" icon={Globe} className="flex-1">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '8px' }}>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>TPS</div>
                                    <div className="mono" style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)' }}>{stats.tps}</div>
                                </div>
                                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '8px' }}>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>UPTIME</div>
                                    <div className="mono" style={{ fontSize: '1.2rem' }}>{stats.uptime}</div>
                                </div>
                            </div>
                            <div style={{ background: 'rgba(0,175,255,0.05)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(0,175,255,0.1)' }}>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Mesh Active Nodes ({stats.agents})</div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '3px' }}>
                                    {Array.from({ length: 24 }).map((_, i) => (
                                        <div key={i} style={{ height: '8px', background: Math.random() > 0.1 ? 'var(--primary-start)' : 'rgba(255,255,255,0.1)', borderRadius: '1px', opacity: 0.6 }} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Panel>
                </div>

                {/* Center: Live Monitor with Global Background Integration */}
                <div style={{ gridColumn: '2 / 3', gridRow: '1 / 2' }}>
                    <LiveMonitorPanel
                        title="Network Pulse"
                        icon={Layers}
                        className="h-full"
                    >
                        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                <motion.div
                                    onMouseMove={onMouseMove}
                                    onMouseLeave={onMouseLeave}
                                    style={{
                                        rotateX: springX,
                                        rotateY: springY,
                                        perspective: 1000,
                                        transformStyle: 'preserve-3d',
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'crosshair'
                                    }}
                                >
                                    <svg viewBox="0 0 400 320" style={{ width: '90%', height: 'auto', maxHeight: '100%', opacity: 0.9 }}>
                                        <defs>
                                            <filter id="glow">
                                                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                                                <feMerge>
                                                    <feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" />
                                                </feMerge>
                                            </filter>
                                        </defs>

                                        {/* Central Node - "The Orb" */}
                                        <circle cx="200" cy="150" r="8" fill="var(--accent-cyan)" filter="url(#glow)" />

                                        {/* Outer Nodes */}
                                        <g opacity="0.6">
                                            <circle cx="100" cy="80" r="3" fill="var(--primary-start)" />
                                            <circle cx="300" cy="80" r="3" fill="var(--primary-start)" />
                                            <circle cx="100" cy="220" r="3" fill="var(--primary-start)" />
                                            <circle cx="300" cy="220" r="3" fill="var(--primary-start)" />
                                            <circle cx="50" cy="150" r="3" fill="var(--primary-start)" />
                                            <circle cx="350" cy="150" r="3" fill="var(--primary-start)" />
                                        </g>

                                        {/* Dynamic Connections */}
                                        {[
                                            [100, 80], [300, 80], [100, 220], [300, 220], [50, 150], [350, 150]
                                        ].map((pos, idx) => (
                                            <motion.line
                                                key={idx}
                                                x1="200" y1="150" x2={pos[0]} y2={pos[1]}
                                                stroke="var(--accent-cyan)" strokeWidth="0.8" strokeDasharray="5,5"
                                                animate={{ strokeDashoffset: [20, 0], opacity: [0.2, 0.6, 0.2] }}
                                                transition={{ repeat: Infinity, duration: 2 + idx * 0.5, ease: "linear" }}
                                            />
                                        ))}
                                    </svg>
                                </motion.div>

                                <div style={{ position: 'absolute', top: 0, right: 0, textAlign: 'right', display: 'flex', gap: '20px', pointerEvents: 'none' }}>
                                    <div>
                                        <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '1px' }}>LATENCY</div>
                                        <div className="mono glow-text" style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>{routeInfo.latency}ms</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '1px' }}>RELAY SYNC</div>
                                        <div className="mono glow-text" style={{ fontSize: '1.2rem', color: '#4ade80', fontWeight: 700 }}>{routeInfo.successRate}%</div>
                                    </div>
                                </div>
                            </div>

                            {/* System Status Integration */}
                            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>CORE_LAYER_STATUS:</div>
                                    <div className="mono" style={{ fontSize: '0.65rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>SYNCHRONIZED_STABLE</div>
                                </div>
                                <StatusBadge label="V_4.2" color="var(--accent-cyan)" />
                            </div>
                        </div>
                    </LiveMonitorPanel>
                </div>

                {/* Right Column: Performance & Trade Feed */}
                <div style={{ gridRow: '1 / 3', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <Panel title="PnL Tracking" icon={TrendingUp}>
                        <div style={{ height: '100px', display: 'flex', alignItems: 'flex-end', gap: '3px', paddingBottom: '10px' }}>
                            {chartData.map((val, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ height: `${val}%` }}
                                    style={{ flex: 1, background: 'linear-gradient(to top, var(--primary-start), var(--accent-cyan))', borderRadius: '1px', minHeight: '2px' }}
                                />
                            ))}
                        </div>
                        <div style={{ marginTop: '10px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                            <div style={{ fontSize: '0.75rem' }}>
                                <span style={{ color: 'var(--text-muted)' }}>Net Profit: </span>
                                <span style={{ color: '#4ade80' }}>+12.4%</span>
                            </div>
                            <div style={{ fontSize: '0.75rem', textAlign: 'right' }}>
                                <span style={{ color: 'var(--text-muted)' }}>SR: </span>
                                <span>3.2</span>
                            </div>
                        </div>
                    </Panel>

                    <Panel title="Real-time Feed" icon={Activity} className="flex-1">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <AnimatePresence initial={false}>
                                {trades.length === 0 && <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textAlign: 'center', marginTop: '20px' }}>WAITING_FOR_DATA_STREAM...</div>}
                                {trades.map(trade => (
                                    <motion.div
                                        key={trade.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        style={{
                                            display: 'grid',
                                            gridTemplateColumns: '1fr auto',
                                            padding: '8px 12px',
                                            background: 'rgba(255,255,255,0.01)',
                                            borderLeft: `2px solid ${trade.side === 'BUY' ? 'var(--accent-emerald)' : '#ef4444'}`,
                                            marginBottom: '1px'
                                        }}
                                    >
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span className="mono" style={{ fontSize: '0.7rem', fontWeight: 700 }}>{trade.pair}</span>
                                            <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>VOL: {trade.volume}</span>
                                        </div>
                                        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <span className="mono" style={{ fontSize: '0.75rem', color: trade.side === 'BUY' ? 'var(--accent-emerald)' : '#ef4444', fontWeight: 700 }}>{trade.side}</span>
                                            <span className="mono" style={{ fontSize: '0.65rem' }}>@{trade.price}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </Panel>
                </div>

                {/* Bottom Left: Alerts */}
                <div style={{ gridColumn: '1 / 2' }}>
                    <Panel title="Infrastructure" icon={Zap}>
                        <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px' }}>
                            {alerts.length === 0 && <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>All systems nominal.</div>}
                            {alerts.slice(0, 2).map(alert => (
                                <div key={alert.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: alert.severity === 'critical' ? '#ef4444' : '#eab308' }}>
                                    <AlertTriangle size={12} />
                                    <span className="mono" style={{ fontSize: '0.7rem' }}>{alert.type}</span>
                                </div>
                            ))}
                        </div>
                    </Panel>
                </div>

                {/* Bottom Center: Neural Sentinel */}
                <div style={{ gridColumn: '2 / 3', gridRow: '2 / 4' }}>
                    <Panel title="Neural Sentinel" icon={Shield}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', height: '100%', justifyContent: 'center' }}>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>INTEGRITY_CHECK</span>
                                    <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--accent-cyan)' }}>SECURE</span>
                                </div>
                                <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                                    <motion.div
                                        animate={{ width: ['0%', '100%', '100%'], opacity: [1, 1, 0] }}
                                        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                        style={{ height: '100%', background: 'var(--accent-cyan)', boxShadow: '0 0 10px var(--accent-cyan)' }}
                                    />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div className="mono glow-text" style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>99.8%</div>
                                <div style={{ fontSize: '0.5rem', color: 'var(--text-muted)' }}>NODES_VERIFIED</div>
                            </div>
                        </div>
                    </Panel>
                </div>

                {/* Bottom Right: Ledger/History */}
                <div style={{ gridColumn: '3 / 4' }}>
                    <Panel title="Audit Ledger" icon={History}>
                        <div style={{ fontSize: '0.65rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '6px', marginBottom: '4px' }}>
                                <span className="mono">OPERATION_LOG</span>
                                <span className="mono">V_CORE_7</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', overflowY: 'auto' }}>
                                {['MESH_SYNC_OK', 'SSL_HANDSHAKE_COMPLETE', 'ROUTE_CALC_V2_LOADED', 'SECURITY_AUTH_SUCCESS'].map((log, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '8px', opacity: 1 - i * 0.2 }}>
                                        <span style={{ color: 'var(--accent-cyan)' }}>[SYSTEM]</span>
                                        <span className="mono" style={{ color: 'rgba(255,255,255,0.7)' }}>{log}</span>
                                        <span style={{ marginLeft: 'auto', color: 'var(--accent-emerald)' }}>✓</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Panel>
                </div>
            </main>

            {/* Premium Footer Info Bar */}
            <footer style={{
                height: '30px',
                background: 'rgba(2, 4, 8, 0.8)',
                backdropFilter: 'blur(10px)',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 25px',
                gap: '30px',
                zIndex: 100
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-emerald)', boxShadow: '0 0 10px var(--accent-emerald)' }} />
                    <span className="mono" style={{ fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>CORE_V.9.4_STABLE</span>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                    <div className="mono" style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>NETWORK_LOAD: <span style={{ color: 'var(--accent-cyan)' }}>2.4%</span></div>
                    <div className="mono" style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>REGION: <span style={{ color: 'var(--accent-cyan)' }}>GLOBAL_MESH_01</span></div>
                </div>

                <div style={{ marginLeft: 'auto', opacity: 0.5 }}>
                    <div className="mono" style={{ fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '2px' }}>TRADEMESH_COMMAND_CENTER_2026</div>
                </div>
            </footer>

            {/* Decorative Background HUD elements */}
            <div style={{ position: 'fixed', top: '50%', left: '20px', width: '1px', height: '100px', background: 'linear-gradient(to bottom, transparent, var(--accent-cyan), transparent)', opacity: 0.2 }} />
            <div style={{ position: 'fixed', top: '50%', right: '20px', width: '1px', height: '100px', background: 'linear-gradient(to bottom, transparent, var(--accent-cyan), transparent)', opacity: 0.2 }} />

            <div style={{ position: 'fixed', top: '40px', left: '50%', width: '150px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--accent-cyan), transparent)', opacity: 0.1 }} />

            <WalletModal
                isOpen={isWalletModalOpen}
                onClose={() => setIsWalletModalOpen(false)}
                onConnect={connectWallet}
            />
        </div>
    );
}
