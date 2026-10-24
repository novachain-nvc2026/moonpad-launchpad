 
import { useState } from 'react'
import './App.css'

function App() {
  const [chain, setChain] = useState('TON')
  const [tokenName, setTokenName] = useState('')
  const [symbol, setSymbol] = useState('')
  const [supply, setSupply] = useState('1000000000')
  const [notice, setNotice] = useState('')

  function handlePreview(e) {
    e.preventDefault()
    if (!tokenName.trim() || !symbol.trim()) {
      setNotice('Enter a token name and symbol first.')
      return
    }
    setNotice(
      `Preview ready: ${tokenName.trim()} (${symbol.trim().toUpperCase()}) on ${chain}. No token has been created.`
    )
  }

  return (
    <main className="moonpad">
      <header className="topbar">
        <a className="brand" href="#">
          <span className="brand-icon">☾</span>
          <span>MOONPAD</span>
        </a>
        <span className="network-pill">TESTNET MODE</span>
        <button className="wallet-button" onClick={() => setNotice('Wallet connection is not implemented yet.')}>
          Connect Wallet
        </button>
      </header>

      <section className="hero">
        <p className="eyebrow">THE MEME COIN LAUNCHPAD</p>
        <h1>Ideas to tokens.<br /><span>Made for communities.</span></h1>
        <p className="hero-copy">
          Create a token preview for TON or Solana. Start safely on test networks.
        </p>
      </section>

      <section className="launch-layout">
        <form className="launch-card" onSubmit={handlePreview}>
          <div className="card-heading">
            <div>
              <p className="eyebrow">TOKEN BUILDER</p>
              <h2>Create your token</h2>
            </div>
            <span className="step-number">01</span>
          </div>

          <label>Choose blockchain</label>
          <div className="chain-options">
            {['TON', 'Solana'].map((item) => (
              <button
                type="button"
                key={item}
                className={`chain-option ${chain === item ? 'selected' : ''}`}
                onClick={() => setChain(item)}
              >
                <span className="chain-symbol">{item === 'TON' ? '◈' : '◎'}</span>
                <span>{item}</span>
                <small>{item === 'TON' ? 'TON Testnet' : 'Solana Devnet'}</small>
              </button>
            ))}
          </div>

          <label htmlFor="tokenName">Token name</label>
          <input
            id="tokenName"
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
            placeholder="e.g. Moon Cat"
            maxLength={32}
          />

          <label htmlFor="symbol">Token symbol</label>
          <input
            id="symbol"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            placeholder="e.g. MCAT"
            maxLength={10}
          />

          <label htmlFor="supply">Total supply</label>
          <input
            id="supply"
            type="number"
            min="1"
            value={supply}
            onChange={(e) => setSupply(e.target.value)}
          />

          <button className="create-button" type="submit">
            Preview Token <span>↗</span>
          </button>

          {notice && <p className="notice" role="status">{notice}</p>}
          <p className="disclaimer">
            Preview only. Wallet connection and on-chain creation are not active.
          </p>
        </form>

        <aside className="preview-card">
          <div className="preview-top">
            <span className="live-dot" /> TOKEN PREVIEW
            <span className="preview-tag">TEST</span>
          </div>
          <div className="coin-art">☾</div>
          <h2>{tokenName.trim() || 'Your Token'}</h2>
          <p className="token-symbol">
            {symbol.trim() ? `$${symbol.trim().toUpperCase()}` : '$SYMBOL'}
          </p>
          <div className="preview-details">
            <div><span>Network</span><strong>{chain}</strong></div>
            <div><span>Total supply</span><strong>{Number(supply || 0).toLocaleString()}</strong></div>
            <div><span>Status</span><strong>Preview only</strong></div>
          </div>
          <p className="preview-foot">Your idea starts here.</p>
        </aside>
      </section>

      <footer>
        <span>☾ MOONPAD</span>
        <span>Built for communities · Testnet first</span>
      </footer>
    </main>
  )
}

export default App

