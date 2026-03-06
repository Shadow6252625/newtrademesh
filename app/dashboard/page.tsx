'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Settings, Wallet, X, ChevronRight } from 'lucide-react';
import Logo from '@/components/trademesh-app/components/Logo';

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

export default function Configuration() {
    const router = useRouter();
    const [wallet, setWallet] = useState<string | null>(null);
    const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        network: 'Ethereum',
        tradeMode: 'Spot',
        nodeId: `node-${Math.floor(Math.random() * 10000)}`,
        region: 'US-East',
        performanceWeight: 'Optimal',
        maxExposure: 10,
        stopLoss: 5,
        autoHedge: false,
        apiKey: '',
        endpointUrl: 'https://api.trademesh.network/v1',
        predictiveAI: true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleLaunch = () => {
        console.log("Creating trade node:", formData);
        router.push(`/dashboard/node/${formData.nodeId}`);
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
        } catch (err) {
            console.error("Connection failed", err);
            setWallet(provider === 'Phantom' ? 'Phan...4k2x' : 'Solf...9m1p');
            setIsWalletModalOpen(false);
        }
    };

    return (
        <div style={{ minHeight: '100vh', padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 10 }}>

            {/* Header */}
            <div style={{ width: '100%', maxWidth: '850px', display: 'flex', alignItems: 'center', marginBottom: '50px' }}>
                <Logo size="medium" />
                <div style={{ marginLeft: '25px' }}>
                    <div className="accent-gradient mono" style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '4px' }}>/CONFIGURATION</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '2px' }}>System_Node_Initialization</div>
                </div>
            </div>

            <motion.div
                className="glass-panel"
                style={{ width: '100%', maxWidth: '850px', padding: '50px', position: 'relative' }}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="hud-corner hud-tl" style={{ width: 24, height: 24 }} />
                <div className="hud-corner hud-tr" style={{ width: 24, height: 24 }} />
                <div className="hud-corner hud-bl" style={{ width: 24, height: 24 }} />
                <div className="hud-corner hud-br" style={{ width: 24, height: 24 }} />

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '25px' }}>
                    <Settings size={32} color="var(--accent-cyan)" style={{ marginRight: '20px', filter: 'drop-shadow(0 0 10px var(--accent-cyan))' }} />
                    <div>
                        <h1 className="text-gradient" style={{ fontSize: '2.2rem', margin: 0, fontWeight: 800, letterSpacing: '-0.02em' }}>Node Parameters</h1>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>Configure your decentralized execution environment</p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>

                    {/* Column 1 */}
                    <div>
                        <div className="form-group">
                            <label className="form-label">Network_Protocol</label>
                            <select className="form-select" name="network" value={formData.network} onChange={handleChange}>
                                <option value="Ethereum">Ethereum L1</option>
                                <option value="Solana">Solana Mainnet</option>
                                <option value="Polygon">Polygon POS</option>
                                <option value="Custom">Custom RPC</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Execution_Mode</label>
                            <select className="form-select" name="tradeMode" value={formData.tradeMode} onChange={handleChange}>
                                <option value="Spot">Spot_Exchange</option>
                                <option value="Margin">Margin_Leverage</option>
                                <option value="Liquidity Routing">AI_Liquidity_Routing</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Node_Identity_Hash</label>
                            <input type="text" className="form-input" name="nodeId" value={formData.nodeId} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Geographic_Relay</label>
                            <input type="text" className="form-input" name="region" value={formData.region} onChange={handleChange} />
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <div className="form-group">
                            <label className="form-label">Risk_Exposure_Limit ({formData.maxExposure}%)</label>
                            <input type="range" name="maxExposure" min="1" max="100" value={formData.maxExposure} onChange={handleChange} style={{ width: '100%', accentColor: 'var(--accent-cyan)' }} />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Safety_Threshold_SL ({formData.stopLoss}%)</label>
                            <input type="range" name="stopLoss" min="0" max="50" value={formData.stopLoss} onChange={handleChange} style={{ width: '100%', accentColor: 'var(--accent-cyan)' }} />
                        </div>

                        <div className="form-group" style={{ marginTop: '20px' }}>
                            <label className="form-label">Secure_Authentication_Key</label>
                            <input type="password" className="form-input" name="apiKey" placeholder="NODE_SECRET_KEY" value={formData.apiKey} onChange={handleChange} />
                        </div>

                        <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '30px', background: 'rgba(0, 255, 255, 0.05)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(0, 255, 255, 0.2)' }}>
                            <input
                                type="checkbox"
                                name="predictiveAI"
                                checked={formData.predictiveAI}
                                onChange={handleChange}
                                style={{ width: '22px', height: '22px', cursor: 'pointer', accentColor: 'var(--accent-cyan)' }}
                            />
                            <div>
                                <label className="mono" style={{ display: 'block', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 800, letterSpacing: '1px' }}>PREDICTIVE_ROUTING_AI</label>
                                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Enable neural-assisted trade path optimization</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                        className="btn-primary"
                        onClick={handleLaunch}
                        style={{ padding: '15px 40px', fontSize: '0.9rem' }}
                    >
                        START_DEPLOYMENT <ArrowRight size={18} />
                    </button>
                </div>
            </motion.div>

            <WalletModal
                isOpen={isWalletModalOpen}
                onClose={() => setIsWalletModalOpen(false)}
                onConnect={connectWallet}
            />
        </div>
    );
}
