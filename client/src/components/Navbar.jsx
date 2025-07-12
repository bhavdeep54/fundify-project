import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">Fundify</Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-button"
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav className="navbar-links">
          <Link to="/wallet" className="nav-link">Wallet</Link>
          <Link to="/exchange" className="nav-link">Exchange</Link>
          <Link to="/explorer" className="nav-link">Explorer</Link>
          <Link to="/pay" className="nav-link">Pay</Link>
          <Link to="/institutional" className="nav-link">Institutional</Link>
          <Link to="/login" className="btn-login">Login</Link>
          <Link to="/signup" className="btn-signup">Sign Up</Link>
        </nav>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <Link to="/wallet" className="mobile-link" onClick={() => setIsOpen(false)}>Wallet</Link>
          <Link to="/exchange" className="mobile-link" onClick={() => setIsOpen(false)}>Exchange</Link>
          <Link to="/explorer" className="mobile-link" onClick={() => setIsOpen(false)}>Explorer</Link>
          <Link to="/pay" className="mobile-link" onClick={() => setIsOpen(false)}>Pay</Link>
          <Link to="/institutional" className="mobile-link" onClick={() => setIsOpen(false)}>Institutional</Link>
          <Link to="/login" className="btn-login" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/signup" className="btn-signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
        </div>
      )}
    </header>
  );
}
