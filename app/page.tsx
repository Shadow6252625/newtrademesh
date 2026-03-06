"use client"

import Link from "next/link"
import type React from "react"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { ConnectWalletModal } from "@/components/connect-wallet-modal"
import { LiquidButton } from "@/components/ui/liquid-glass-button"

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top } = containerRef.current.getBoundingClientRect()
    containerRef.current.style.setProperty("--mouse-x", `${e.clientX - left}px`)
    containerRef.current.style.setProperty("--mouse-y", `${e.clientY - top}px`)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn("spotlight-card", className)}
    >
      {children}
    </div>
  )
}

export default function HomePage() {
  const [walletModalOpen, setWalletModalOpen] = useState(false)

  return (
    <div className="relative min-h-screen antialiased selection:bg-cyan-500/30 selection:text-cyan-100 text-white bg-[#0a0a0b]">
      {/* Background */}
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14f40dea-bfc2-4fea-9f86-798fbef967be_3840w.webp')",
          maskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(1200px 600px at 18% 24%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(1200px 600px at 18% 24%, #000 60%, transparent 100%)",
        }}
      />

      {/* Glow accents */}
      <div className="pointer-events-none fixed inset-0 z-[1]">
        <div
          className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(60% 60% at 50% 50%, rgba(34,211,238,.35), rgba(34,211,238,0) 65%)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-[420px] w-[520px] rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(60% 60% at 50% 50%, rgba(168,85,247,.28), rgba(168,85,247,0) 65%)" }}
        />
      </div>

      <div className="relative z-10">
        <Header walletModalOpen={walletModalOpen} setWalletModalOpen={setWalletModalOpen} />
        <HeroSection />
        <FeaturesSection />
        <LogosSection />
        <PricingSection />
        <TokenomicsSection />
        <EcosystemSection />
        <DeveloperSection />
        <GovernanceSection />
        <SecuritySection />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>

      <ConnectWalletModal isOpen={walletModalOpen} onClose={() => setWalletModalOpen(false)} />
    </div>
  )
}

function Header({
  walletModalOpen,
  setWalletModalOpen,
}: { walletModalOpen: boolean; setWalletModalOpen: (open: boolean) => void }) {
  return (
    <header className="md:px-10 md:pt-16 max-w-7xl mr-auto ml-auto pt-10 pr-6 pl-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 font-semibold tracking-tight text-xl">
            <span className="inline-flex items-center gap-4">
              <span
                className="w-[50px] h-[50px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7362aa43-57c7-45b4-af5d-cf6500c0ed58_320w.png')",
                }}
              />
              <span>TradeMesh</span>
            </span>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a className="text-white/60 hover:text-white transition-colors" href="#">
            Markets
          </a>
          <a className="text-white/60 hover:text-white transition-colors" href="#">
            Protocol
          </a>
          <a className="text-white/60 hover:text-white transition-colors" href="#">
            Governance
          </a>
          <a
            className="text-white/60 hover:text-white transition-colors flex items-center justify-center"
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow on X"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.97 6.75H2.556l7.73-8.835L1.75 2.25h6.76l4.694 6.207 5.422-6.207zM17.002 18.807h1.844L6.983 4.126H5.015l12.987 14.681z" />
            </svg>
          </a>
          <a
            className="text-white/60 hover:text-white transition-colors flex items-center justify-center"
            href="https://t.me/trademesh1_bot"
            target="_blank"
            rel="noopener noreferrer"
            title="Join Telegram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.22-.054-.336-.375-.116l-6.869 4.332-2.965-.924c-.645-.213-.658-.645.136-.953l11.566-4.458c.538-.197 1.006.128.832.941z" />
            </svg>
          </a>
          <Link
            href="/dashboard"
            className="rounded-2xl animate-float ml-4 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 px-6 py-2.5 flex items-center justify-center transition-all"
          >
            <span className="tracking-tight font-bold text-lg text-white">Open Mesh</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start mt-10 md:mt-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 md:px-10">
      {/* Left: Hero content */}
      <div className="lg:col-span-5">
        <div className="glass-border inline-flex items-center gap-2 rounded-2xl px-2.5 py-1.5">
          <div className="h-6 w-6 grid place-items-center rounded-xl bg-cyan-500/10 text-cyan-400">
            <ZapIcon />
          </div>
          <span className="text-xs text-white/70">V2 Mainnet Live</span>
        </div>

        <h1 className="sm:text-6xl md:text-7xl leading-[0.95] text-5xl font-semibold text-white tracking-tight mt-5">
          Connective fabric for
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(180deg, #fff, rgba(255,255,255,0.65))" }}
          >
            {" "}
            global liquidity
          </span>
        </h1>

        <p className="sm:text-base leading-relaxed text-sm text-white/60 max-w-lg mt-5">
          A decentralized trading matrix interlinking global markets, assets, and data streams. Unify exchanges and
          automated agents in a frictionless intelligent mesh.
        </p>

        {/* Feature chips */}
        <div className="mt-6 flex flex-wrap gap-2.5">
          <div className="glass-border inline-flex hover:bg-white/[0.07] transition-colors rounded-2xl pt-1.5 pr-3 pb-1.5 pl-3 gap-2 items-center">
            <LayersIcon />
            <span className="text-xs text-white/70">Cross-chain Mesh</span>
          </div>
          <div className="glass-border inline-flex hover:bg-white/[0.07] transition-colors rounded-2xl pt-1.5 pr-3 pb-1.5 pl-3 gap-2 items-center">
            <BotIcon />
            <span className="text-xs text-white/70">AI Agents</span>
          </div>
          <div className="glass-border inline-flex hover:bg-white/[0.07] transition-colors rounded-2xl pt-1.5 pr-3 pb-1.5 pl-3 gap-2 items-center">
            <ActivityIcon />
            <span className="text-xs text-white/70">Zero Friction</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Link
            href="/dashboard"
            className="glass-border group inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-50 text-cyan-950 hover:bg-white px-4 sm:px-5 py-3 text-sm font-medium tracking-tight transition-all hover:-translate-y-0.5"
          >
            <TerminalIcon />
            <span>Launch App</span>
          </Link>
          {/* CHANGE: Convert button to link and connect to whitepaper page */}
          <a
            href="/whitepaper"
            className="glass-border group inline-flex hover:bg-white/10 transition-all hover:-translate-y-0.5 text-sm text-white tracking-tight rounded-2xl pt-3 pr-4 pb-3 pl-4 gap-2 items-center justify-center"
          >
            <FileTextIcon />
            <span>Read Whitepaper</span>
          </a>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Mini metrics */}
        <div className="mt-6 grid grid-cols-3 gap-4 max-w-md">
          <div className="glass-border overflow-hidden aspect-[16/12] rounded-3xl pt-4 pr-4 pb-4 pl-4 relative">
            <div className="text-xs text-white/60">Total Value</div>
            <div className="mt-1 text-lg font-medium tracking-tight text-white">$4.2B+</div>
          </div>
          <div className="glass-border overflow-hidden aspect-[16/12] rounded-3xl pt-4 pr-4 pb-4 pl-4 relative">
            <div className="text-xs text-white/60">Networks</div>
            <div className="mt-1 text-lg font-medium tracking-tight text-white">12</div>
          </div>
          <div className="glass-border overflow-hidden aspect-[16/12] rounded-3xl pt-4 pr-4 pb-4 pl-4 relative">
            <div className="text-xs text-white/60">Latency</div>
            <div className="mt-1 text-lg font-medium tracking-tight text-white">&lt;50ms</div>
          </div>
        </div>
      </div>

      {/* Right: Spinning Orb Video */}
      <div className="lg:col-span-7 relative flex items-center justify-center">
        <div className="glass-border overflow-hidden rounded-3xl relative w-full aspect-square md:aspect-[4/3]">
          <video
            autoPlay
            loop
            muted
            playsInline
            src="/spinning-orb.mp4"
            className="w-full h-full object-cover opacity-90 mix-blend-screen scale-105"
          />
          {/* Vignette & Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0b]/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] pointer-events-none" />
        </div>

        {/* Subtle Outer Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-700/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      </div>
    </section>
  )
}



function FeaturesSection() {
  return (
    <section className="md:px-10 md:pt-28 max-w-6xl mr-auto ml-auto pt-20 pr-6 pl-6">
      {/* Badge */}
      <div className="flex justify-center">
        <div className="glass-border inline-flex items-center gap-2 rounded-full px-3 py-1.5">
          <GlobeIcon className="text-cyan-300" />
          <span className="text-sm text-cyan-200/90">Global Connective Fabric</span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="mt-6 text-center text-4xl md:text-6xl font-semibold tracking-tight premium-gradient-text">
        A Frictionless Global
        <span className="block">Trading Matrix</span>
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-center text-base md:text-lg text-white/50 font-normal leading-relaxed">
        A network of networks where every transaction, algorithm, and market pulse is woven together through a
        transparent digital mesh.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 mt-12 gap-6">
        <LiquidityCard />
        <CrossChainCard />
        <CollaborativeCard />
        <AutomationCard />
      </div>
    </section>
  )
}

function LiquidityCard() {
  const [usProgress, setUsProgress] = useState(0)
  const [bdProgress, setBdProgress] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const cardRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateProgress()
          }
        })
      },
      { threshold: 0.4 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateProgress = () => {
    const duration = 1000
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setUsProgress(Math.round(76 * eased))
      setBdProgress(Math.round(44 * eased))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  return (
    <SpotlightCard className="glass-border group overflow-hidden rounded-3xl pt-5 pr-5 pb-5 pl-5 relative">
      <div ref={cardRef} className="absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="-right-24 -top-24 bg-cyan-500/10 w-72 h-72 rounded-full absolute blur-3xl" />

      <div className="glass-border rounded-2xl pt-4 pr-4 pb-4 pl-4">
        <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
          <BarChartIcon className="h-4 w-4 text-cyan-300" />
          <span className="font-medium">Aggregated Liquidity Depth</span>
        </div>

        <div className="space-y-3">
          <div className="glass-border rounded-xl p-3">
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center ring-1 ring-white/20">
                <GemIcon className="text-[10px]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white/90">Ethereum Pool</p>
                  <p className="text-xs text-white/60">$890M</p>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000"
                    style={{ width: `${usProgress}%` }}
                  />
                </div>
              </div>
              <span className="text-xs text-white/70">{usProgress}%</span>
            </div>
            <p className="mt-2 text-[11px] text-white/50">WETH / USDC</p>
          </div>

          <div className="glass-border rounded-xl p-3">
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center ring-1 ring-white/20">
                <ZapIcon className="text-[10px]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white/90">Solana Pool</p>
                  <p className="text-xs text-white/60">$528M</p>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-1000"
                    style={{ width: `${bdProgress}%` }}
                  />
                </div>
              </div>
              <span className="text-xs text-white/70">{bdProgress}%</span>
            </div>
            <p className="mt-2 text-[11px] text-white/50">SOL / USDC</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button className="glass-border inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-cyan-200 hover:bg-cyan-500/20 transition">
            <ScanEyeIcon className="h-4 w-4" />
            AI Insights
          </button>
          <div className="flex items-center gap-2 text-[11px] text-white/50">
            <ActivityIcon className="h-3.5 w-3.5 text-emerald-300" />
            Mesh Active
          </div>
        </div>
      </div>

      <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight premium-gradient-text">Unified Liquidity</h3>
      <p className="mt-1.5 text-sm text-white/50 leading-relaxed">
        Access deep liquidity pools across chains. The Mesh intelligently routes orders to the deepest sources
        instantly.
      </p>
    </SpotlightCard>
  )
}

function CrossChainCard() {
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (!listRef.current) return

    const list = listRef.current
    const items = Array.from(list.children)
    items.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement
      list.appendChild(clone)
    })

    let y = 0
    const speed = 0.25

    const animate = () => {
      y += speed
      const setHeight = items.reduce((h, el) => h + (el as HTMLElement).offsetHeight, 0)
      if (y >= setHeight) y = 0
      list.style.transform = `translateY(-${y}px)`
      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [])

  return (
    <SpotlightCard className="glass-border group relative overflow-hidden rounded-3xl p-5 md:p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="glass-border rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <ArrowLeftRightIcon className="h-4 w-4 text-indigo-300" />
            <span className="font-medium">Cross-Chain Flows</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-white/60">Live</span>
            <RefreshCwIcon className="h-4 w-4 text-white/40" />
          </div>
        </div>

        <div className="overflow-hidden h-36 glass-border rounded-xl mt-3">
          <ul ref={listRef} className="relative">
            <li className="flex pt-2 pr-3 pb-2 pl-3 items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-indigo-500/20 grid place-items-center text-[10px] ring-1 ring-indigo-500/40">
                  S
                </div>
                <div>
                  <p className="text-sm text-white/90">Swap: ETH → AVAX</p>
                  <p className="text-[11px] text-white/50">via Route X • 0.2s</p>
                </div>
              </div>
              <CheckCircleIcon className="h-4 w-4 text-emerald-300" />
            </li>
            <li className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-amber-500/20 grid place-items-center text-[10px] ring-1 ring-amber-500/40">
                  B
                </div>
                <div>
                  <p className="text-sm text-white/90">Bridge: SOL → ARB</p>
                  <p className="text-[11px] text-white/50">Atomic Swap • 0.5s</p>
                </div>
              </div>
              <CheckCircleIcon className="h-4 w-4 text-emerald-300" />
            </li>
            <li className="flex pt-2 pr-3 pb-2 pl-3 items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-indigo-500/20 grid place-items-center text-[10px] ring-1 ring-indigo-500/40">
                  S
                </div>
                <div>
                  <p className="text-sm text-white/90">Swap: ETH → AVAX</p>
                  <p className="text-[11px] text-white/50">via Route X • 0.2s</p>
                </div>
              </div>
              <CheckCircleIcon className="h-4 w-4 text-emerald-300" />
            </li>
          </ul>
        </div>
      </div>

      <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight premium-gradient-text">Automate Movement</h3>
      <p className="mt-1.5 text-sm text-white/50 leading-relaxed">
        Seamlessly move assets between ecosystems. The Mesh handles bridging, swapping, and gas abstraction invisibly.
      </p>
    </SpotlightCard>
  )
}

function CollaborativeCard() {
  return (
    <SpotlightCard className="glass-border group relative overflow-hidden rounded-3xl p-5 md:p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="glass-border rounded-2xl p-4">
        <div className="flex items-center gap-2 text-white/80 text-sm">
          <BlocksIcon className="h-4 w-4 text-emerald-300" />
          <span className="font-medium">Protocol Interoperability</span>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-3">
          <div className="glass-border flex flex-col items-center gap-2 rounded-xl p-3">
            <ArrowRightLeftIcon className="h-5 w-5 text-white/80" />
            <span className="text-xs text-white/70">DEXs</span>
          </div>
          <div className="glass-border flex flex-col items-center gap-2 rounded-xl p-3">
            <LandmarkIcon className="h-5 w-5 text-white/80" />
            <span className="text-xs text-white/70">Lending</span>
          </div>
          <div className="glass-border flex flex-col items-center gap-2 rounded-xl p-3">
            <BotIcon className="h-5 w-5 text-white/80" />
            <span className="text-xs text-white/70">Agents</span>
          </div>
          <div className="glass-border flex flex-col items-center gap-2 rounded-xl p-3">
            <WebhookIcon className="h-5 w-5 text-white/80" />
            <span className="text-xs text-white/70">Oracles</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex -space-x-2">
            <div className="h-6 w-6 rounded-full bg-emerald-900/40 ring-2 ring-[#0a0a0b] grid place-items-center">
              <BotIcon className="text-[12px] text-emerald-300" />
            </div>
            <div className="h-6 w-6 rounded-full bg-sky-900/40 ring-2 ring-[#0a0a0b] grid place-items-center">
              <CodeIcon className="text-[12px] text-sky-300" />
            </div>
            <div className="h-6 w-6 rounded-full bg-purple-900/40 ring-2 ring-[#0a0a0b] grid place-items-center">
              <CoinsIcon className="text-[12px] text-purple-300" />
            </div>
            <div className="h-6 w-6 rounded-full bg-white/10 ring-2 ring-[#0a0a0b] grid place-items-center text-[10px] text-white/70">
              +1k
            </div>
          </div>
          <div className="inline-flex items-center gap-2 text-[11px] text-white/60">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Nodes Active
          </div>
        </div>
      </div>

      <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight premium-gradient-text">Collaborative Fabric</h3>
      <p className="mt-1.5 text-sm text-white/50 leading-relaxed">
        Exchanges, traders, and automated agents collaborate seamlessly. A unified protocol for the machine economy.
      </p>
    </SpotlightCard>
  )
}

function AutomationCard() {
  return (
    <SpotlightCard className="glass-border group relative overflow-hidden rounded-3xl p-5 md:p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="glass-border rounded-2xl p-4 relative overflow-hidden">
        <div className="flex items-center justify-between text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <WandIcon className="h-4 w-4 text-amber-300" />
            <span className="font-medium">Smart Router</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="glass-border inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] text-white/80 hover:bg-white/10 transition">
              <PlusIcon className="h-3.5 w-3.5" />
              Strategy
            </button>
            <button className="glass-border inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] text-emerald-200 hover:bg-emerald-500/20 transition">
              <PlayIcon className="h-3.5 w-3.5" />
              Execute
            </button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="glass-border relative rounded-xl p-3">
            <div className="flex items-center gap-2 text-xs text-white/80">
              <FlagIcon className="h-4 w-4 text-amber-300" />
              Signal
            </div>
            <p className="mt-2 text-xs text-white/70">Arb Opportunity</p>
          </div>
          <div className="glass-border relative rounded-xl p-3">
            <div className="flex items-center gap-2 text-xs text-white/80">
              <GitBranchIcon className="h-4 w-4 text-white/70" />
              Route
            </div>
            <p className="mt-2 text-xs text-white/70">Multi-hop Mesh</p>
          </div>
          <div className="glass-border relative rounded-xl p-3">
            <div className="flex items-center gap-2 text-xs text-white/80">
              <WalletIcon className="h-4 w-4 text-emerald-300" />
              Settle
            </div>
            <p className="mt-2 text-xs text-white/70">Flash Loan</p>
          </div>
        </div>

        <pre className="mt-4 text-[11px] leading-relaxed glass-border rounded-xl p-3 text-white/80 overflow-x-auto">
          {`async function executeRoute(asset) {
  const path = await mesh.findOptimal(asset);
  if (path.slippage < 0.05) {
    return path.execute();
  }
}`}
        </pre>
      </div>

      <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight premium-gradient-text">Adaptive Intelligence</h3>
      <p className="mt-1.5 text-sm text-white/50 leading-relaxed">
        Programmable logic that adapts to market volatility. Configure bots to execute trades only when mesh conditions
        are perfect.
      </p>
    </SpotlightCard>
  )
}

function LogosSection() {
  return (
    <section className="max-w-7xl mt-40 mr-auto ml-auto pt-16 pr-4 pb-6 pl-4 relative sm:px-6 lg:px-8 lg:mt-40">
      <div className="text-center">
        <p className="uppercase text-sm font-medium text-slate-400 tracking-wide">
          Interlinked with major protocols & exchanges
        </p>
      </div>
      <div className="overflow-hidden mt-6 relative">
        <div
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <div className="flex gap-6 will-change-transform animate-marquee">
            <div className="flex gap-6 shrink-0 sm:gap-x-6 lg:gap-x-20">
              {[
                "e5f2922d-4fb6-4f7c-8795-cd9ba63105a4",
                "92287bc0-bc70-4864-bf05-a89c1b99a218",
                "8284c62f-bfed-4d35-aaa2-956d0a8969b3",
                "3764a6eb-78e1-495f-9143-c85a648446c4",
                "dea31d52-7076-423f-bace-53eeec3014d3",
                "b16a9cf6-6be1-4d0d-bc63-07a471092998",
              ].map((id, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-cover rounded-lg"
                  style={{
                    backgroundImage: `url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/${id}_1600w.png)`,
                  }}
                />
              ))}
            </div>
            <div className="flex shrink-0 sm:gap-x-6 lg:gap-x-20">
              {[
                "e5f2922d-4fb6-4f7c-8795-cd9ba63105a4",
                "92287bc0-bc70-4864-bf05-a89c1b99a218",
                "8284c62f-bfed-4d35-aaa2-956d0a8969b3",
                "3764a6eb-78e1-495f-9143-c85a648446c4",
                "dea31d52-7076-423f-bace-53eeec3014d3",
                "b16a9cf6-6be1-4d0d-bc63-07a471092998",
              ].map((id, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-cover rounded-lg"
                  style={{
                    backgroundImage: `url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/${id}_1600w.png)`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section className="max-w-6xl mx-auto md:px-10 px-6 pt-16 md:pt-24">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Access the Mesh</h2>
        <p className="mt-3 text-white/60">Connect via public endpoints or dedicated nodes.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="glass-border rounded-3xl p-6">
          <h3 className="text-lg font-medium">Public Mesh</h3>
          <p className="mt-1 text-sm text-white/60">For DeFi users & hobbyists</p>
          <div className="mt-6 flex items-baseline gap-1">
            <span className="text-4xl font-semibold">0.1%</span>
            <span className="text-white/60">fee</span>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
              Standard routing
            </li>
            <li className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
              All chains supported
            </li>
            <li className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
              Basic analytics
            </li>
          </ul>
          <Link
            href="/dashboard"
            className="glass-border mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 px-4 py-2.5 text-sm font-medium transition"
          >
            Connect Wallet
          </Link>
        </div>

        <div className="glass-border relative rounded-3xl p-6">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 glass-border inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-amber-200">
            Pro Trader
          </div>
          <h3 className="text-lg font-medium">Node Operator</h3>
          <p className="mt-1 text-sm text-white/60">For algo-traders & dApps</p>
          <div className="mt-6 flex items-baseline gap-1">
            <span className="text-4xl font-semibold">0.05%</span>
            <span className="text-white/60">fee</span>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
              Priority execution
            </li>
            <li className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
              MEV protection
            </li>
            <li className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
              WebSocket API
            </li>
          </ul>
          <Link
            href="/dashboard"
            className="glass-border mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 px-4 py-2.5 text-sm font-medium transition"
          >
            Run Node
          </Link>
        </div>

        <div className="glass-border rounded-3xl p-6">
          <h3 className="text-lg font-medium">Institutional</h3>
          <p className="mt-1 text-sm text-white/60">For exchanges & market makers</p>
          <div className="mt-6 flex items-baseline gap-1">
            <span className="text-4xl font-semibold">Custom</span>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
              Direct colo access
            </li>
            <li className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
              Zero-fee rebates
            </li>
            <li className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
              Dedicated lanes
            </li>
          </ul>
          <button className="glass-border mt-6 w-full rounded-xl px-4 py-2.5 text-sm font-medium transition hover:bg-white/15">
            Contact Team
          </button>
        </div>
      </div>
    </section>
  )
}

function TokenomicsSection() {
  return (
    <section className="max-w-6xl mx-auto md:px-10 px-6 pt-24 md:pt-32">
      <div className="flex justify-center">
        <div className="glass-border inline-flex items-center gap-2 rounded-full px-3 py-1.5">
          <PieChartIcon className="text-indigo-300 w-4 h-4" />
          <span className="text-sm text-indigo-200/90">$MESH Tokenomics</span>
        </div>
      </div>
      <div className="text-center mt-6">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Fueling the Intelligence</h2>
        <p className="mt-3 text-white/60 max-w-2xl mx-auto">
          The $MESH token powers the protocol, aligning incentives between traders, node operators, and liquidity providers.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        {/* Chart representation */}
        <div className="lg:col-span-5 glass-border rounded-3xl p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent pointer-events-none" />

          {/* CSS Donut Chart */}
          <div className="relative w-48 h-48 rounded-full flex items-center justify-center glow-effect"
            style={{
              background: "conic-gradient(rgba(34,211,238,0.8) 0% 40%, rgba(168,85,247,0.8) 40% 65%, rgba(52,211,153,0.8) 65% 85%, rgba(251,191,36,0.8) 85% 100%)",
              boxShadow: "0 0 40px rgba(99, 102, 241, 0.2)"
            }}>
            <div className="absolute w-32 h-32 bg-[#0a0a0b] rounded-full flex flex-col items-center justify-center z-10 glass-border">
              <span className="text-2xl font-semibold text-white">1B</span>
              <span className="text-[10px] text-white/50 uppercase tracking-widest mt-1">Total Supply</span>
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="lg:col-span-7 glass-border rounded-3xl p-6 md:p-8">
          <h3 className="text-xl font-medium mb-6">Distribution Breakdown</h3>
          <div className="space-y-4">

            {/* Item 1 */}
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                <div>
                  <div className="text-sm font-medium text-white/90">Community & Rewards</div>
                  <div className="text-[11px] text-white/50">Liquidity mining, airdrops, and staking yields</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-white">40%</div>
                <div className="text-[11px] text-white/50">400M $MESH</div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                <div>
                  <div className="text-sm font-medium text-white/90">Core Contributors</div>
                  <div className="text-[11px] text-white/50">3-year linear vesting with 1-year cliff</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-white">25%</div>
                <div className="text-[11px] text-white/50">250M $MESH</div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                <div>
                  <div className="text-sm font-medium text-white/90">Treasury & Ecosystem</div>
                  <div className="text-[11px] text-white/50">Grants, partnerships, and protocol development</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-white">20%</div>
                <div className="text-[11px] text-white/50">200M $MESH</div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
                <div>
                  <div className="text-sm font-medium text-white/90">Investors</div>
                  <div className="text-[11px] text-white/50">2-year linear vesting with 6-month cliff</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-white">15%</div>
                <div className="text-[11px] text-white/50">150M $MESH</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

function EcosystemSection() {
  return (
    <section className="max-w-6xl mx-auto md:px-10 px-6 pt-24 md:pt-32">
      <div className="flex justify-center">
        <div className="glass-border inline-flex items-center gap-2 rounded-full px-3 py-1.5">
          <GlobeIcon className="text-emerald-300 w-4 h-4" />
          <span className="text-sm text-emerald-200/90">Growing Ecosystem</span>
        </div>
      </div>
      <div className="text-center mt-6">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Built on the Mesh</h2>
        <p className="mt-3 text-white/60 max-w-2xl mx-auto">
          A sprawling network of dApps, wallets, and protocols leveraging our unified liquidity layer for frictionless execution.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Category 1 */}
        <div className="glass-border rounded-3xl p-6 group hover:bg-white/[0.02] transition-colors relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-opacity group-hover:opacity-100 opacity-50" />
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 ring-1 ring-emerald-500/20 overflow-hidden">
            <img src="/ecosystem-icons/wallets.png" alt="Wallets" className="w-full h-full object-cover scale-125" />
          </div>
          <h3 className="text-lg font-medium text-white/90">Wallets & Interfaces</h3>
          <p className="mt-2 text-sm text-white/60 leading-relaxed">
            Native integrations across top-tier non-custodial wallets allow users to swap assets with zero cognitive overhead, powered invisibly by TradeMesh routing.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="glass-border px-2.5 py-1 rounded-full text-white/70">Phantom</span>
            <span className="glass-border px-2.5 py-1 rounded-full text-white/70">MetaMask</span>
            <span className="glass-border px-2.5 py-1 rounded-full text-white/70">Rabby</span>
          </div>
        </div>

        {/* Category 2 */}
        <div className="glass-border rounded-3xl p-6 group hover:bg-white/[0.02] transition-colors relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-opacity group-hover:opacity-100 opacity-50" />
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 ring-1 ring-cyan-500/20 overflow-hidden">
            <img src="/ecosystem-icons/dex.png" alt="DEX" className="w-full h-full object-cover scale-125" />
          </div>
          <h3 className="text-lg font-medium text-white/90">DEX Aggregators</h3>
          <p className="mt-2 text-sm text-white/60 leading-relaxed">
            Protocols tap into our multi-chain liquidity API to offer their users the best execution prices without managing complex cross-chain infrastructure.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="glass-border px-2.5 py-1 rounded-full text-white/70">1inch API</span>
            <span className="glass-border px-2.5 py-1 rounded-full text-white/70">Jupiter</span>
            <span className="glass-border px-2.5 py-1 rounded-full text-white/70">ParaSwap</span>
          </div>
        </div>

        {/* Category 3 */}
        <div className="glass-border rounded-3xl p-6 group hover:bg-white/[0.02] transition-colors relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-opacity group-hover:opacity-100 opacity-50" />
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 ring-1 ring-amber-500/20 overflow-hidden">
            <img src="/ecosystem-icons/agents.png" alt="Agents" className="w-full h-full object-cover scale-125" />
          </div>
          <h3 className="text-lg font-medium text-white/90">Automated Agents</h3>
          <p className="mt-2 text-sm text-white/60 leading-relaxed">
            Quant funds and independent MEV searchers deploy custom logic bots directly to our relay nodes, capturing arbitrage opportunities instantaneously.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="glass-border px-2.5 py-1 rounded-full text-white/70">MakerDAO</span>
            <span className="glass-border px-2.5 py-1 rounded-full text-white/70">Aave Flash</span>
            <span className="glass-border px-2.5 py-1 rounded-full text-white/70">Custom Bots</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function DeveloperSection() {
  return (
    <section className="max-w-6xl mx-auto md:px-10 px-6 pt-24 md:pt-32">
      <div className="flex justify-center">
        <div className="glass-border inline-flex items-center gap-2 rounded-full px-3 py-1.5">
          <TerminalIcon className="text-cyan-300 w-4 h-4" />
          <span className="text-sm text-cyan-200/90">Developer SDK</span>
        </div>
      </div>
      <div className="text-center mt-6">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Programmable Liquidity</h2>
        <p className="mt-3 text-white/60 max-w-2xl mx-auto">
          Integrate the TradeMesh routing engine into your application with three lines of code. Complete access to cross-chain state.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
              <ZapIcon className="text-cyan-400 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white/90">Instant Settlement</h3>
              <p className="mt-1 text-sm text-white/60">Atomic swaps across L2s settle in under 500ms using optimistic verification.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
              <ShieldCheckIcon className="text-cyan-400 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white/90">Pre-check Execution</h3>
              <p className="mt-1 text-sm text-white/60">Simulate routes entirely off-chain to guarantee zero reverted transactions.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
              <CodeIcon className="text-cyan-400 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white/90">Typed Interfaces</h3>
              <p className="mt-1 text-sm text-white/60">Fully typed SDK for TypeScript, Rust, and Python seamlessly kept in sync.</p>
            </div>
          </div>
          <button className="glass-border inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition hover:bg-white/10 mt-4 text-cyan-50">
            Read Documentation
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="glass-border rounded-3xl p-2 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="bg-[#1e1e1e] rounded-2xl overflow-hidden border border-white/10">
            <div className="flex items-center px-4 py-3 bg-[#2d2d2d] border-b border-white/5 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-4 text-[11px] text-white/50 font-mono">swap.ts</span>
            </div>
            <div className="p-4 overflow-x-auto text-sm font-mono text-white/80 leading-relaxed">
              <pre>
                <span className="text-purple-400">import</span> {`{ TradeMesh }`} <span className="text-purple-400">from</span> <span className="text-emerald-300">'@trademesh/sdk'</span>;
                <br /><br />
                <span className="text-blue-400">const</span> mesh = <span className="text-purple-400">new</span> <span className="text-amber-300">TradeMesh</span>(process.env.API_KEY);
                <br /><br />
                <span className="text-white/40">// Route 1M USDC to ETH optimally</span><br />
                <span className="text-blue-400">const</span> route = <span className="text-purple-400">await</span> mesh.<span className="text-blue-300">getBestRoute</span>({`{`}<br />
                {`  `}tokenIn: <span className="text-emerald-300">'USDC'</span>,<br />
                {`  `}tokenOut: <span className="text-emerald-300">'WETH'</span>,<br />
                {`  `}amountIn: <span className="text-emerald-300">'1000000'</span>,<br />
                {`  `}slippage: <span className="text-amber-400">0.5</span><br />
                {`}`});
                <br /><br />
                <span className="text-purple-400">await</span> mesh.<span className="text-blue-300">execute</span>(route, wallet);
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function GovernanceSection() {
  return (
    <section className="max-w-6xl mx-auto md:px-10 px-6 pt-24 md:pt-32">
      <div className="glass-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-purple-500/10 text-purple-300 text-sm font-medium mb-4 ring-1 ring-purple-500/20">
              <UsersIcon className="w-4 h-4" />
              Decentralized Governance
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Shaping the Future of Liquidity</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Protocol parameters, fee structures, and the addition of new chains are determined by the community. $MESH holders dictate the roadmap through transparent on-chain voting.
            </p>
            <div className="flex gap-4">
              <button className="glass-border rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 px-5 py-2.5 text-sm font-medium transition">
                View Proposals
              </button>
              <button className="border border-white/10 hover:bg-white/5 rounded-xl text-white px-5 py-2.5 text-sm font-medium transition flex items-center gap-2">
                Join Discord
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-border p-6 rounded-2xl flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-white mb-1">12.4k</span>
              <span className="text-xs text-white/50 uppercase tracking-wider">Active Voters</span>
            </div>
            <div className="glass-border p-6 rounded-2xl flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-white mb-1">84</span>
              <span className="text-xs text-white/50 uppercase tracking-wider">Proposals Passed</span>
            </div>
            <div className="glass-border p-6 rounded-2xl flex flex-col items-center justify-center text-center col-span-2">
              <span className="text-3xl font-bold text-white mb-1">78.2%</span>
              <span className="text-xs text-white/50 uppercase tracking-wider">Circulating Supply Staked</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SecuritySection() {
  return (
    <section className="max-w-6xl mx-auto md:px-10 px-6 pt-24 md:pt-32 pb-10">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Institutional Grade Security</h2>
        <p className="mt-3 text-white/60 max-w-2xl mx-auto mb-10">
          The Mesh protocol is fortified through rigorous formal verification, multiple independent audits, and a proactive bug bounty program.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-border rounded-3xl p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 border border-emerald-500/20 overflow-hidden">
            <img src="/security-icons/audit.png" alt="Audits" className="w-full h-full object-cover scale-150" />
          </div>
          <h3 className="text-lg font-medium text-white/90">Triple Audited</h3>
          <p className="mt-2 text-sm text-white/60">Smart contracts audited by Trail of Bits, OpenZeppelin, and CertiK.</p>
        </div>

        <div className="glass-border rounded-3xl p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/20 overflow-hidden">
            <img src="/security-icons/bounty.png" alt="Bug Bounty" className="w-full h-full object-cover scale-150" />
          </div>
          <h3 className="text-lg font-medium text-white/90">$1M Bug Bounty</h3>
          <p className="mt-2 text-sm text-white/60">Active bug bounty program hosted on Immunefi to reward whitehat researchers.</p>
        </div>

        <div className="glass-border rounded-3xl p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-500/20 overflow-hidden">
            <img src="/security-icons/monitoring.png" alt="Monitoring" className="w-full h-full object-cover scale-150" />
          </div>
          <h3 className="text-lg font-medium text-white/90">Real-time Monitoring</h3>
          <p className="mt-2 text-sm text-white/60">24/7 on-chain threat detection and automated circuit breakers.</p>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="max-w-5xl mx-auto md:px-10 px-6 pt-16 md:pt-24">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Protocol FAQs</h2>
        <p className="mt-3 text-white/60">Understanding the fabric.</p>
      </div>
      <div className="mt-8 space-y-3">
        <details className="glass-border group rounded-2xl p-4">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-white/90">
            How does TradeMesh ensure atomicity?
            <span className="glass-border ml-4 grid h-6 w-6 place-items-center rounded-md">
              <ChevronDownIcon className="h-4 w-4 transition-transform group-open:rotate-180" />
            </span>
          </summary>
          <p className="mt-3 text-sm text-white/70">
            We use a decentralized network of relayers and liquidity pools that lock funds on both chains
            simultaneously, ensuring trades either fully succeed or revert.
          </p>
        </details>
        <details className="glass-border group rounded-2xl p-4">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-white/90">
            Which chains are currently supported?
            <span className="glass-border ml-4 grid h-6 w-6 place-items-center rounded-md">
              <ChevronDownIcon className="h-4 w-4 transition-transform group-open:rotate-180" />
            </span>
          </summary>
          <p className="mt-3 text-sm text-white/70">
            TradeMesh is live on Ethereum, Arbitrum, Optimism, Polygon, Solana, and Avalanche, with more L2s being added
            quarterly.
          </p>
        </details>
        <details className="glass-border group rounded-2xl p-4">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-white/90">
            Can I build my own trading bot on the Mesh?
            <span className="glass-border ml-4 grid h-6 w-6 place-items-center rounded-md">
              <ChevronDownIcon className="h-4 w-4 transition-transform group-open:rotate-180" />
            </span>
          </summary>
          <p className="mt-3 text-sm text-white/70">
            Yes. Our SDK provides programmatic access to the entire liquidity grid, allowing you to deploy agents that
            execute logic based on global market data.
          </p>
        </details>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="max-w-4xl mx-auto md:px-10 px-6 pt-16 md:pt-24 pb-24">
      <div className="glass-border rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Enter the Matrix</h2>
        <p className="mt-3 text-white/70">Join the decentralized mesh reshaping global commerce.</p>

        <div className="mt-8">
          <Link
            href="/dashboard"
            className="glass-border rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 px-8 py-3 text-sm font-bold transition inline-flex items-center justify-center"
          >
            Enter the Matrix
          </Link>
        </div>

        <p className="mt-3 text-xs text-white/50">Early access for liquidity providers.</p>
      </div>
    </section>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-20 pt-20 pb-10 overflow-hidden border-t border-white/5 bg-[#0a0a0b]/80 backdrop-blur-3xl">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -ml-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -mr-48 -mb-48 pointer-events-none" />

      {/* Footer Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 mix-blend-screen scale-110"
        >
          <source src="/footer-video.mp4" type="video/mp4" />
        </video>
        {/* Soft Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] via-transparent to-[#0a0a0b]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand & Newsletter Column (Spans 4) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-xl bg-cover bg-center ring-2 ring-white/10"
                style={{
                  backgroundImage: "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7362aa43-57c7-45b4-af5d-cf6500c0ed58_320w.png')"
                }}
              />
              <span className="font-semibold tracking-tight text-xl text-white">TradeMesh</span>
            </div>

            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              The connective fabric for global liquidity. Unifying exchanges, agents, and markets across the decentralized web.
            </p>

            <form className="relative max-w-sm flex items-center" onSubmit={(e) => e.preventDefault()}>
              <MailIcon className="absolute left-4 w-4 h-4 text-white/40" />
              <input
                type="email"
                placeholder="Join the newsletter"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-10 pr-24 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-shadow"
              />
              <button className="absolute right-1 text-xs font-medium bg-white text-black px-4 py-2 rounded-xl hover:bg-zinc-200 transition-colors">
                Subscribe
              </button>
            </form>
          </div>

          {/* Links Grid (Spans 8) */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            {/* Protocol */}
            <div className="space-y-4">
              <h4 className="font-medium text-white/90">Protocol</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Markets Layer</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Liquidity Pools</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Mesh Nodes</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Governance</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">$MESH Token</a></li>
              </ul>
            </div>

            {/* Developers */}
            <div className="space-y-4">
              <h4 className="font-medium text-white/90">Developers</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Smart Contracts</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Bug Bounty</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Audits</a></li>
              </ul>
            </div>

            {/* Ecosystem */}
            <div className="space-y-4">
              <h4 className="font-medium text-white/90">Company</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="#" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Careers<span className="ml-2 text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded-full">Hiring</span></a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Press Kit</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="mt-16 mb-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Bar: Copyright & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[13px] text-white/40">
            © {currentYear} TradeMesh Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all hover:scale-105" aria-label="Twitter">
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all hover:scale-105" aria-label="Discord">
              <DiscordIcon className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all hover:scale-105" aria-label="Telegram">
              <TelegramIcon className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all hover:scale-105" aria-label="GitHub">
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Icon Components
function WalletIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}

function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-sm"
      {...props}
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  )
}

function LayersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-base"
      {...props}
    >
      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
    </svg>
  )
}

function BotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-base"
      {...props}
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2m16 0h2m-7-1v2m-6-2v2" />
    </svg>
  )
}

function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-base"
      {...props}
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}

function TerminalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-base"
      {...props}
    >
      <path d="M12 19h8M4 17l6-6l-6-6" />
    </svg>
  )
}

function FileTextIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-base"
      {...props}
    >
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8" />
    </svg>
  )
}

function ArrowLeftRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 3L4 7l4 4M4 7h16m-4 14l4-4l-4-4m4 4H4" />
    </svg>
  )
}

function DropletsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05" />
      <path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
  )
}

function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12l2 2l4-4" />
    </svg>
  )
}

function NetworkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="6" height="6" x="16" y="16" rx="1" />
      <rect width="6" height="6" x="2" y="16" rx="1" />
      <rect width="6" height="6" x="9" y="2" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8" />
    </svg>
  )
}

function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3" />
      <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
    </svg>
  )
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20" />
    </svg>
  )
}

function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3" />
    </svg>
  )
}

function GemIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10.5 3L8 9l4 13l4-13l-2.5-6" />
      <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20" />
    </svg>
  )
}

function ScanEyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="12" r="1" />
      <path d="M18.944 12.33a1 1 0 0 0 0-.66a7.5 7.5 0 0 0-13.888 0a1 1 0 0 0 0 .66a7.5 7.5 0 0 0 13.888 0" />
    </svg>
  )
}

function RefreshCwIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  )
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12l2 2l4-4" />
    </svg>
  )
}

function BlocksIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10 3v12" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  )
}

function ArrowRightLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m16 3l4 4l-4 4m4-4H4m4 14l-4-4l4-4m-4 4h16" />
    </svg>
  )
}

function LandmarkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10 18v-7m1.12-8.802a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949zM14 18v-7m4 7v-7M3 22h18M6 18v-7" />
    </svg>
  )
}

function WebhookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
      <path d="m6 17l3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
      <path d="m12 6l3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
    </svg>
  )
}

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" />
    </svg>
  )
}

function CoinsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 0 1 10.34 18M7 6h1v4" />
      <path d="m16.71 13.88l.7.71l-2.82 2.82" />
    </svg>
  )
}

function WandIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21.64 3.64l-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72M14 7l3 3M5 6v4m14 4v4M10 2v2M7 8H3m18 8h-4M11 3H9" />
    </svg>
  )
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14m-7-7v14" />
    </svg>
  )
}

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
    </svg>
  )
}

function FlagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
    </svg>
  )
}

function GitBranchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 3v12" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  )
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m6 9l6 6l6-6" />
    </svg>
  )
}

function PieChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  )
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function BugIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M17.47 9c1.93-.2 3.53-1.9 3.53-4" />
      <path d="M8 14H4" />
      <path d="M20 14h-4" />
      <path d="M6 19c2 1 3 3 3 5" />
      <path d="M18 19c-2 1-3 3-3 5" />
    </svg>
  )
}

function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 12h.01M15 12h.01M7.5 4.5l-1.5 1.5M16.5 4.5l1.5 1.5M21 12c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.5-8 8-8 8 3.6 8 8C4.5 9 5.5 16 5.5 16c0 0 2.5 4 6.5 4s6.5-4 6.5-4c0 0 1-7-2.5-11.5" />
    </svg>
  )
}

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
