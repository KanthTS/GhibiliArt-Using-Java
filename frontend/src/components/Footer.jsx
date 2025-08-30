import React from "react";
import { Github, Twitter, Youtube, Mail } from "lucide-react";
import "./Footer.css"; // Import CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand / About */}
        <div>
          <h2 className="footer-brand">MyBrand</h2>
          <p className="footer-desc">
            A sleek UI inspired by modern design systems. Build apps faster with
            clean, responsive components.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h3>Product</h3>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#docs">Docs</a></li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3>Follow us</h3>
          <div className="footer-socials">
            <a href="https://github.com"><Github size={22} /></a>
            <a href="https://twitter.com"><Twitter size={22} /></a>
            <a href="https://youtube.com"><Youtube size={22} /></a>
            <a href="mailto:someone@example.com"><Mail size={22} /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
