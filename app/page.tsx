"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

export default function HomePage() {
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
        <Header />
        <HeroSection />
        <FeaturesSection />
        <LogosSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  )
}

function Header() {
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
          <button className="glass-border inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm transition-colors hover:bg-white/10">
            <WalletIcon />
            <span className="tracking-tight">Connect</span>
          </button>
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
          <button className="glass-border group inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-50 text-cyan-950 hover:bg-white px-4 sm:px-5 py-3 text-sm font-medium tracking-tight transition-all hover:-translate-y-0.5">
            <TerminalIcon />
            <span>Launch App</span>
          </button>
          <button className="glass-border group inline-flex hover:bg-white/10 transition-all hover:-translate-y-0.5 text-sm text-white tracking-tight rounded-2xl pt-3 pr-4 pb-3 pl-4 gap-2 items-center justify-center">
            <FileTextIcon />
            <span>Read Whitepaper</span>
          </button>
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

      {/* Right: Interactive grid + floating glass cards */}
      <div className="lg:col-span-7">
        <TestimonialStack />
      </div>
    </section>
  )
}

function TestimonialStack() {
  const [activeIndex, setActiveIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout>()

  const cards = [
    {
      icon: <ArrowLeftRightIcon />,
      quote: "Automated arbitrage paths across Layer 2s are settling instantly.",
      name: "Mesh Agent 0x8A",
      role: "Arbitrage Bot",
      avatar: <BotIcon className="text-cyan-300" />,
    },
    {
      icon: <DropletsIcon />,
      quote: "Liquidity fragmentation solved. One pool, accessible from any chain.",
      name: "Marcus Lin",
      role: "Market Maker",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320",
    },
    {
      icon: <ShieldCheckIcon />,
      quote: "Smart order routing optimized execution price by 4.2% automatically.",
      name: "Apex Fund",
      role: "Institutional Desk",
      avatar: <BuildingIcon className="text-indigo-300" />,
    },
    {
      icon: <NetworkIcon />,
      quote: "The API provides real-time pulse on global volume flows.",
      name: "Liam Foster",
      role: "Quant Developer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=320",
    },
  ]

  useEffect(() => {
    const startTimer = () => {
      if (timerRef.current) clearInterval(timerRef.current)
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % cards.length)
      }, 3000)
    }
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [cards.length])

  const getCardClass = (index: number) => {
    const pos = (index - activeIndex + cards.length) % cards.length
    if (pos === 0) return "active"
    if (pos === 1) return "next-1"
    if (pos === 2) return "next-2"
    return "hidden-card"
  }

  return (
    <div className="glass-border overflow-hidden aspect-[16/12] rounded-3xl pt-4 pr-4 pb-4 pl-4 relative">
      {/* Stacked testimonial cards */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-[280px] sm:max-w-[300px] h-[320px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`testimonial-card pointer-events-auto ${getCardClass(index)}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="glass-border transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] rounded-2xl shadow-2xl">
                <div className="pt-4 pr-4 pb-4 pl-4">
                  <div className="inline-flex w-9 h-9 rounded-xl items-center justify-center glass-effect">
                    {card.icon}
                  </div>
                  <p className="leading-relaxed text-xs text-white/70 mt-3">"{card.quote}"</p>
                  <div className="mt-4 flex items-center gap-2 pt-3 border-t border-white/10">
                    {typeof card.avatar === "string" ? (
                      <img
                        className="h-8 w-8 rounded-xl ring-2 ring-white/10 object-cover"
                        src={card.avatar || "/placeholder.svg"}
                        alt={card.name}
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-xl ring-2 ring-white/10 bg-cyan-900/50 grid place-items-center">
                        {card.avatar}
                      </div>
                    )}
                    <div>
                      <div className="text-[11px] font-medium text-white tracking-tight">{card.name}</div>
                      <div className="text-[11px] text-white/60">{card.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="pointer-events-auto absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {cards.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              index === activeIndex ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{ background: "radial-gradient(600px 280px at 60% 40%, rgba(255,255,255,0.07), transparent 60%)" }}
      />
    </div>
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
      <h1 className="mt-6 text-center text-4xl md:text-6xl font-semibold tracking-tight text-white">
        A Frictionless Global
        <span className="block">Trading Matrix</span>
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-center text-base md:text-lg text-white/70 font-normal">
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
    <section ref={cardRef} className="glass-border group overflow-hidden rounded-3xl pt-5 pr-5 pb-5 pl-5 relative">
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

      <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Unified Liquidity</h3>
      <p className="mt-1.5 text-sm text-white/70">
        Access deep liquidity pools across chains. The Mesh intelligently routes orders to the deepest sources
        instantly.
      </p>
    </section>
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
    <section className="glass-border group relative overflow-hidden rounded-3xl p-5 md:p-6">
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

      <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Automate Movement</h3>
      <p className="mt-1.5 text-sm text-white/70">
        Seamlessly move assets between ecosystems. The Mesh handles bridging, swapping, and gas abstraction invisibly.
      </p>
    </section>
  )
}

function CollaborativeCard() {
  return (
    <section className="glass-border group relative overflow-hidden rounded-3xl p-5 md:p-6">
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

      <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Collaborative Fabric</h3>
      <p className="mt-1.5 text-sm text-white/70">
        Exchanges, traders, and automated agents collaborate seamlessly. A unified protocol for the machine economy.
      </p>
    </section>
  )
}

function AutomationCard() {
  return (
    <section className="glass-border group relative overflow-hidden rounded-3xl p-5 md:p-6">
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

      <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Adaptive Intelligence</h3>
      <p className="mt-1.5 text-sm text-white/70">
        Programmable logic that adapts to market volatility. Configure bots to execute trades only when mesh conditions
        are perfect.
      </p>
    </section>
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
          <button className="glass-border mt-6 w-full rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 px-4 py-2.5 text-sm font-medium transition">
            Connect Wallet
          </button>
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
          <button className="glass-border mt-6 w-full rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 px-4 py-2.5 text-sm font-medium transition">
            Run Node
          </button>
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

        <form className="mt-6 flex flex-col sm:flex-row gap-3" aria-label="Join the waitlist">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="trader@fund.com"
            className="glass-border w-full rounded-xl placeholder-white/40 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/30 bg-transparent text-white"
          />
          <button className="glass-border rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 px-5 py-3 text-sm font-medium transition">
            Request Access
          </button>
        </form>

        <p className="mt-3 text-xs text-white/50">Early access for liquidity providers.</p>
      </div>
    </section>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="max-w-6xl mx-auto md:px-10 px-6 pb-12">
      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/50">© {currentYear} TradeMesh Inc.</p>
        <nav className="flex items-center gap-4 text-xs text-white/60">
          <a href="#" className="hover:text-white">
            Protocol
          </a>
          <a href="#" className="hover:text-white">
            Governance
          </a>
          <a href="#" className="hover:text-white">
            Audits
          </a>
        </nav>
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
      <path d="m21.64 3.64l-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72M14 7l3 3M5 6v4m14 4v4M10 2v2M7 8H3m18 8h-4M11 3H9" />
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
