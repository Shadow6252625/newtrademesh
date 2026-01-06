"use client"

import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"

export default function WhitepaperPage() {
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

      <div className="relative z-10">
        {/* Header */}
        <header className="md:px-10 md:pt-8 max-w-4xl mr-auto ml-auto pt-8 pr-6 pl-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
        </header>

        {/* Content */}
        <main className="md:px-10 max-w-4xl mr-auto ml-auto pt-8 pr-6 pl-6 pb-20">
          {/* Title */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-4">TradeMesh Whitepaper</h1>
            <p className="text-lg text-white/60">A Decentralized Trading Matrix for Global Liquidity</p>
            <p className="text-sm text-white/40 mt-2">Version 2.0 | January 2026</p>
          </div>

          {/* Table of Contents */}
          <div className="glass-border rounded-2xl p-6 mb-12">
            <h2 className="text-xl font-semibold text-white mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#abstract" className="hover:text-cyan-300 transition">
                  1. Abstract
                </a>
              </li>
              <li>
                <a href="#introduction" className="hover:text-cyan-300 transition">
                  2. Introduction
                </a>
              </li>
              <li>
                <a href="#problem" className="hover:text-cyan-300 transition">
                  3. The Problem: Liquidity Fragmentation
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-cyan-300 transition">
                  4. The Solution: TradeMesh
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-cyan-300 transition">
                  5. Technical Architecture
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="hover:text-cyan-300 transition">
                  6. Tokenomics
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-cyan-300 transition">
                  7. Roadmap
                </a>
              </li>
              <li>
                <a href="#conclusion" className="hover:text-cyan-300 transition">
                  8. Conclusion
                </a>
              </li>
            </ul>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Abstract */}
            <section id="abstract">
              <h2 className="text-3xl font-semibold text-white mb-4">1. Abstract</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                TradeMesh represents a paradigm shift in decentralized finance by introducing a unified trading matrix
                that seamlessly connects global liquidity pools, exchanges, and automated market-making agents across
                multiple blockchains. Our protocol eliminates the friction of fragmented markets through intelligent
                routing, cross-chain atomic swaps, and AI-powered execution optimization.
              </p>
            </section>

            {/* Introduction */}
            <section id="introduction">
              <h2 className="text-3xl font-semibold text-white mb-4">2. Introduction</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                The decentralized finance ecosystem has grown exponentially, yet remains fundamentally fragmented.
                Liquidity is scattered across dozens of chains, hundreds of DEXs, and thousands of trading pairs. This
                fragmentation creates inefficiencies: poor price execution, high slippage, wasted gas fees, and missed
                arbitrage opportunities.
              </p>
              <p className="text-white/70 leading-relaxed">
                TradeMesh solves this through a connective fabric that unifies markets, enabling zero-friction
                cross-chain trading with real-time price discovery and AI-driven execution.
              </p>
            </section>

            {/* Problem */}
            <section id="problem">
              <h2 className="text-3xl font-semibold text-white mb-4">3. The Problem: Liquidity Fragmentation</h2>
              <div className="space-y-3">
                <div className="glass-border rounded-xl p-4">
                  <h3 className="text-cyan-300 font-semibold mb-2">Inefficient Routing</h3>
                  <p className="text-white/70 text-sm">
                    Users must manually navigate multiple DEXs and chains to find optimal swap prices, losing value to
                    suboptimal routing.
                  </p>
                </div>
                <div className="glass-border rounded-xl p-4">
                  <h3 className="text-cyan-300 font-semibold mb-2">High Slippage</h3>
                  <p className="text-white/70 text-sm">
                    Fragmented liquidity means larger price impact for significant trades, disproportionately affecting
                    institutional traders.
                  </p>
                </div>
                <div className="glass-border rounded-xl p-4">
                  <h3 className="text-cyan-300 font-semibold mb-2">Bridge Risk & Costs</h3>
                  <p className="text-white/70 text-sm">
                    Cross-chain trades require multiple bridge transactions, adding latency, fees, and security risks.
                  </p>
                </div>
                <div className="glass-border rounded-xl p-4">
                  <h3 className="text-cyan-300 font-semibold mb-2">Missed Opportunities</h3>
                  <p className="text-white/70 text-sm">
                    Arbitrage and market-making bots cannot efficiently exploit price discrepancies across fragmented
                    markets.
                  </p>
                </div>
              </div>
            </section>

            {/* Solution */}
            <section id="solution">
              <h2 className="text-3xl font-semibold text-white mb-4">4. The Solution: TradeMesh</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                TradeMesh introduces a unified trading matrix—a decentralized network that aggregates liquidity from all
                sources, optimizes execution paths in real-time, and connects autonomous agents seamlessly.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">Key Features:</h3>
              <div className="space-y-3">
                <div className="glass-border rounded-xl p-4">
                  <h4 className="text-cyan-300 font-semibold mb-2">Cross-Chain Atomic Swaps</h4>
                  <p className="text-white/70 text-sm">
                    Execute trades across chains in a single atomic transaction with guaranteed settlement and no
                    intermediate assets.
                  </p>
                </div>
                <div className="glass-border rounded-xl p-4">
                  <h4 className="text-cyan-300 font-semibold mb-2">Intelligent Order Routing</h4>
                  <p className="text-white/70 text-sm">
                    AI-powered algorithms analyze 50+ data feeds to find optimal execution routes, maximizing return for
                    every trade.
                  </p>
                </div>
                <div className="glass-border rounded-xl p-4">
                  <h4 className="text-cyan-300 font-semibold mb-2">Unified Liquidity Pool</h4>
                  <p className="text-white/70 text-sm">
                    Aggregate liquidity from DEXs, AMMs, and market makers into a single mesh, reducing slippage by up
                    to 60%.
                  </p>
                </div>
                <div className="glass-border rounded-xl p-4">
                  <h4 className="text-cyan-300 font-semibold mb-2">AI Agent Ecosystem</h4>
                  <p className="text-white/70 text-sm">
                    Enable autonomous trading bots to operate natively on TradeMesh, executing strategies with minimal
                    latency.
                  </p>
                </div>
              </div>
            </section>

            {/* Architecture */}
            <section id="architecture">
              <h2 className="text-3xl font-semibold text-white mb-4">5. Technical Architecture</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                TradeMesh is built on a modular architecture consisting of:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Core Protocol Layer</h4>
                  <p className="text-white/70 text-sm">
                    Handles state management, consensus, and execution guarantees across multiple chains.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Liquidity Aggregation Layer</h4>
                  <p className="text-white/70 text-sm">
                    Real-time indexing of liquidity sources, price feeds, and market depth across all connected chains.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Order Routing Engine</h4>
                  <p className="text-white/70 text-sm">
                    ML models trained on millions of historical trades optimize execution paths for every trade type.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Interoperability Layer</h4>
                  <p className="text-white/70 text-sm">
                    Secure cross-chain messaging with latency &lt;50ms and atomic settlement guarantees.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Agent Framework</h4>
                  <p className="text-white/70 text-sm">
                    REST and WebSocket APIs enabling autonomous agents to participate in the mesh natively.
                  </p>
                </div>
              </div>
            </section>

            {/* Tokenomics */}
            <section id="tokenomics">
              <h2 className="text-3xl font-semibold text-white mb-4">6. Tokenomics</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass-border rounded-xl p-4">
                  <p className="text-white/60 text-sm mb-1">Total Supply</p>
                  <p className="text-2xl font-semibold text-cyan-300">1B MESH</p>
                </div>
                <div className="glass-border rounded-xl p-4">
                  <p className="text-white/60 text-sm mb-1">Initial Price</p>
                  <p className="text-2xl font-semibold text-cyan-300">$0.50</p>
                </div>
              </div>
              <div className="glass-border rounded-xl p-6">
                <h4 className="font-semibold text-white mb-4">Token Distribution</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Community & Liquidity Mining</span>
                    <span className="text-cyan-300">40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Team & Advisors</span>
                    <span className="text-cyan-300">20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Strategic Investors</span>
                    <span className="text-cyan-300">20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Foundation Reserve</span>
                    <span className="text-cyan-300">20%</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Roadmap */}
            <section id="roadmap">
              <h2 className="text-3xl font-semibold text-white mb-4">7. Roadmap</h2>
              <div className="space-y-4">
                <div className="glass-border rounded-xl p-4">
                  <h4 className="text-cyan-300 font-semibold mb-1">Q1 2026: V2 Mainnet Launch</h4>
                  <p className="text-white/70 text-sm">Core protocol deployment on Ethereum with 6 connected chains.</p>
                </div>
                <div className="glass-border rounded-xl p-4">
                  <h4 className="text-cyan-300 font-semibold mb-1">Q2 2026: AI Agent Framework</h4>
                  <p className="text-white/70 text-sm">Release autonomous agent SDK with native TradeMesh support.</p>
                </div>
                <div className="glass-border rounded-xl p-4">
                  <h4 className="text-cyan-300 font-semibold mb-1">Q3 2026: Expansion to 20+ Chains</h4>
                  <p className="text-white/70 text-sm">Support for emerging L2s and alt-L1s with sub-30ms latency.</p>
                </div>
                <div className="glass-border rounded-xl p-4">
                  <h4 className="text-cyan-300 font-semibold mb-1">Q4 2026: Advanced Analytics & Governance</h4>
                  <p className="text-white/70 text-sm">Full DAO governance and advanced market analytics suite.</p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion">
              <h2 className="text-3xl font-semibold text-white mb-4">8. Conclusion</h2>
              <p className="text-white/70 leading-relaxed">
                TradeMesh represents the future of decentralized trading—a unified, intelligent, frictionless matrix
                connecting global liquidity. By eliminating fragmentation and empowering autonomous agents, we unlock
                trillions in efficient, accessible trading for all market participants.
              </p>
              <p className="text-white/70 leading-relaxed mt-4">
                Join us in building the connective fabric of global finance.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
