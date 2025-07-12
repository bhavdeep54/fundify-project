import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Fundify</Link>

        <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/wallet">Wallet</Link>
          <Link to="/exchange">Exchange</Link>
          <Link to="/explorer">Explorer</Link>
          <Link to="/pay">Pay</Link>
          <Link to="/institutional">Institutional</Link>
          <Link to="/login" className="btn-login">Login</Link>
          <Link to="/signup" className="btn-signup">Sign Up</Link>
        </nav>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
}
