import "@/components/trademesh-app/index.css"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="dashboard-root" style={{
            minHeight: '100vh',
            width: '100%',
            position: 'relative',
            overflowX: 'hidden',
        }}>
            {/* Absolute Base Layer - Slightly transparent to let video through if needed, but provides the base dark theme */}
            <div style={{
                position: 'fixed',
                inset: 0,
                background: '#020408',
                zIndex: -10,
                opacity: 0.4
            }} />

            <video
                className="app-video-bg"
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'fixed',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -8,
                    opacity: 0.8,
                    filter: 'brightness(0.7) contrast(1.1)'
                }}
            >
                <source src="/background.mp4" type="video/mp4" />
            </video>

            {/* Mesh and Glow effects */}
            <div className="mesh-bg" style={{
                position: 'fixed',
                inset: 0,
                zIndex: -5,
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 175, 255, 0.1), transparent 80%)',
                pointerEvents: 'none'
            }}></div>

            <div className="grain-overlay" style={{ zIndex: -2 }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </div>
        </div>
    )
}
