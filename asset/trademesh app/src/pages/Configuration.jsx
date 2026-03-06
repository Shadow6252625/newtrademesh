import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Settings } from 'lucide-react';
import Logo from '../components/Logo';

export default function Configuration() {
    const navigate = useNavigate();
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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleLaunch = () => {
        // Simulate API call to Antigravity Backend: init_trade_node(data)
        console.log("Creating trade node:", formData);
        // Redirect
        navigate(`/dashboard/${formData.nodeId}`);
    };

    return (
        <div style={{ minHeight: '100vh', padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

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
        </div>
    );
}
