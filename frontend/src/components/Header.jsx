import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://img.freepik.com/premium-photo/ai-logo-high-technology-logo-generative-ai_888418-1636.jpg" alt="logo" className="logo-img" />
        <span className="logo-name">Ghibli Art</span>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
