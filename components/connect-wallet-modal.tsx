"use client"
import { useState, useEffect } from "react"

interface WalletProvider {
  name: string
  icon: string
  objectName: string
  downloadUrl: string
}

const WALLET_PROVIDERS: WalletProvider[] = [
  {
    name: "Phantom",
    icon: "/phantom-logo.png",
    objectName: "phantom",
    downloadUrl: "https://phantom.app/",
  },
  {
    name: "Solflare",
    icon: "/solflare-logo.png",
    objectName: "solflare",
    downloadUrl: "https://solflare.com/",
  },
]

export function ConnectWalletModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [connecting, setConnecting] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!isOpen) {
      setError(null)
      setConnecting(null)
    }
  }, [isOpen])

  const detectAndConnect = async (walletName: string, objectName: string) => {
    setConnecting(walletName)
    setError(null)

    try {
      // Check if wallet is installed
      const isInstalled = (window as any)[objectName] !== undefined

      if (!isInstalled) {
        const provider = WALLET_PROVIDERS.find((w) => w.name === walletName)
        setError(`${walletName} not detected. Opening download page...`)
        setTimeout(() => {
          window.open(provider?.downloadUrl, "_blank")
          setConnecting(null)
        }, 1500)
        return
      }

      // Get wallet provider
      const wallet = (window as any)[objectName]

      if (objectName === "phantom") {
        // Phantom connection
        const provider = wallet.solana
        const response = await provider.connect()
        console.log("[v0] Connected to Phantom:", response.publicKey.toString())
        setError(null)
        setTimeout(() => {
          onClose()
          setConnecting(null)
        }, 500)
      } else if (objectName === "solflare") {
        // Solflare connection
        const response = await wallet.connect()
        console.log("[v0] Connected to Solflare:", response.publicKey.toString())
        setError(null)
        setTimeout(() => {
          onClose()
          setConnecting(null)
        }, 500)
      }
    } catch (err: any) {
      console.error("[v0] Connection error:", err)
      setError(err.message || `Failed to connect ${walletName}`)
      setConnecting(null)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Modal Card */}
      <div className="relative w-full max-w-md mx-4 rounded-3xl border border-white/10 bg-[#0f0f11]/90 p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">Connect Your Wallet</h2>
          <p className="text-white/60 text-sm">Choose a Solana wallet to connect to TradeMesh</p>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">{error}</div>
        )}

        {/* Wallet buttons */}
        <div className="space-y-3">
          {WALLET_PROVIDERS.map((provider) => (
            <button
              key={provider.name}
              onClick={() => detectAndConnect(provider.name, provider.objectName)}
              disabled={connecting !== null}
              className="w-full glass-border inline-flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img
                src={provider.icon || "/placeholder.svg"}
                alt={`${provider.name} logo`}
                className="w-6 h-6 rounded-full"
              />
              <span className="flex-1 text-left font-medium text-white">
                {connecting === provider.name ? `Connecting to ${provider.name}...` : `Connect ${provider.name} Wallet`}
              </span>
              {connecting === provider.name && (
                <div className="w-4 h-4 rounded-full border-2 border-cyan-500/30 border-t-cyan-500 animate-spin" />
              )}
            </button>
          ))}
        </div>

        {/* Footer text */}
        <p className="text-center text-white/40 text-xs mt-6">
          Don't have a wallet?{" "}
          <a
            href="https://solana.com/ecosystem/explore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Get started here
          </a>
        </p>
      </div>
    </div>
  )
}
