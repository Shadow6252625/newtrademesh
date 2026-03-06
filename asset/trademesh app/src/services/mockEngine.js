/**
 * TradeMesh Mock Trade Simulation Engine
 * Emulates Antigravity Backend Functions and Real-time Channels
 */

class TradeMeshEngine {
    constructor() {
        this.intervals = {};
        this.subscribers = {
            trade_updates: [],
            route_updates: [],
            anomaly_alerts: []
        };
        this.prefs = this.loadPrefs();
    }

    loadPrefs() {
        const saved = localStorage.getItem('trademesh_sim_prefs');
        return saved ? JSON.parse(saved) : {
            enabled: true,
            speed: 'medium',
            intensity: 'normal',
            preferredMode: 'mock'
        };
    }

    savePrefs(newPrefs) {
        this.prefs = { ...this.prefs, ...newPrefs };
        localStorage.setItem('trademesh_sim_prefs', JSON.stringify(this.prefs));
        // Restart if speed/intensity changed
        if (this.prefs.enabled) {
            this.start('current-node', 'user-1');
        }
    }

    subscribe(channel, callback) {
        if (this.subscribers[channel]) {
            this.subscribers[channel].push(callback);
        }
        return () => {
            this.subscribers[channel] = this.subscribers[channel].filter(cb => cb !== callback);
        };
    }

    emit(channel, payload) {
        // console.log(`[REALTIME][${channel}]`, payload);
        this.subscribers[channel].forEach(cb => cb(payload));
    }

    getIntervalTime() {
        const mapping = { slow: 4000, medium: 1500, fast: 500 };
        return mapping[this.prefs.speed] || 1500;
    }

    getIntensityFactor() {
        const mapping = { low: 0.5, normal: 1, high: 2 };
        return mapping[this.prefs.intensity] || 1;
    }

    start(nodeId, userId) {
        this.stop();
        if (!this.prefs.enabled) return;

        const interval = this.getIntervalTime();

        this.intervals.trades = setInterval(() => {
            this.simulateTradeActivity(nodeId);
        }, interval);

        this.intervals.routes = setInterval(() => {
            this.simulateRouteSnapshot(nodeId);
        }, interval * 3);

        console.log(`Simulator started for ${nodeId} at ${interval}ms`);
    }

    stop() {
        Object.values(this.intervals).forEach(clearInterval);
        this.intervals = {};
    }

    simulateTradeActivity(nodeId) {
        const pairs = ['BTC/USDC', 'ETH/USDC', 'SOL/USDC', 'MESH/USDC', 'LINK/USDC'];
        const markets = ['Binance', 'Coinbase', 'Raydium', 'Uniswap', 'Jupiter', 'Curve'];
        const intensity = this.getIntensityFactor();

        // Occasional anomaly check
        const anomalyProb = (this.prefs.intensity === 'high' ? 0.1 : 0.03);
        if (Math.random() < anomalyProb) {
            this.injectAnomaly(nodeId);
        }

        const trade = {
            id: Math.random().toString(36).substr(2, 9),
            nodeId,
            pair: pairs[Math.floor(Math.random() * pairs.length)],
            volume: (Math.random() * 2 * intensity).toFixed(4),
            price: (Math.random() * 50000 + 100).toFixed(2),
            side: Math.random() > 0.5 ? 'BUY' : 'SELL',
            route: Array.from({ length: Math.floor(Math.random() * 3) + 2 }, () => markets[Math.floor(Math.random() * markets.length)]),
            routeEfficiency: (Math.random() * 10 + 90).toFixed(2),
            slippage: (Math.random() * 0.5 * (1 / intensity)).toFixed(3),
            status: Math.random() > 0.95 ? 'FAILED' : 'EXECUTED',
            source: 'mock',
            timestamp: new Date().toISOString()
        };

        // Persistence simulation
        const trades = JSON.parse(localStorage.getItem('trademesh_trades') || '[]');
        trades.unshift(trade);
        localStorage.setItem('trademesh_trades', JSON.stringify(trades.slice(0, 500))); // Keep 500

        this.emit('trade_updates', trade);
    }

    simulateRouteSnapshot(nodeId) {
        const markets = ['Ethereum Mainnet', 'Solana RPC 1', 'Polygon PoS', 'Arbitrum One'];
        const route = {
            id: Math.random().toString(36).substr(2, 9),
            nodeId,
            markets,
            latencyMs: Math.floor(Math.random() * 150 + 50),
            successRate: (Math.random() * 2 + 98).toFixed(2),
            createdAt: new Date().toISOString()
        };

        const routes = JSON.parse(localStorage.getItem('trademesh_routes') || '[]');
        routes.unshift(route);
        localStorage.setItem('trademesh_routes', JSON.stringify(routes.slice(0, 100)));

        this.emit('route_updates', route);
    }

    injectAnomaly(nodeId) {
        const types = [
            { type: 'High Slippage', severity: 'warning', msg: 'Liquidity drain detected in MESH/USDC pool' },
            { type: 'Failed Execution Spike', severity: 'critical', msg: 'Multiple node failures on Solana RPC' },
            { type: 'Routing Loop', severity: 'warning', msg: 'Inefficient routing detected across bridge 0xFA2' },
            { type: 'Latency Spike', severity: 'info', msg: 'Global network latency increased by 400ms' }
        ];
        const anomaly = types[Math.floor(Math.random() * types.length)];

        const alert = {
            id: Math.random().toString(36).substr(2, 9),
            nodeId,
            type: anomaly.type,
            severity: anomaly.severity,
            message: anomaly.msg,
            createdAt: new Date().toISOString()
        };

        const alerts = JSON.parse(localStorage.getItem('trademesh_alerts') || '[]');
        alerts.unshift(alert);
        localStorage.setItem('trademesh_alerts', JSON.stringify(alerts.slice(0, 100)));

        this.emit('anomaly_alerts', alert);
    }

    rotateMockData() {
        console.log("[MAINTENANCE] Rotating mock data...");
        const trades = JSON.parse(localStorage.getItem('trademesh_trades') || '[]');
        if (trades.length > 500) {
            localStorage.setItem('trademesh_trades', JSON.stringify(trades.slice(0, 500)));
        }
    }
}

export const mockEngine = new TradeMeshEngine();
mockEngine.rotateMockData();
