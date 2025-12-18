import React from "react";
import { Link } from "react-router-dom";
import { lumina } from "../data/siteContent";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">{lumina.name}</div>
          <p className="muted">{lumina.tagline}</p>
          <p className="muted small">{lumina.ethicalNote}</p>
        </div>

        <div className="footer-links">
          <Link to="/privacidad" className="footer-link">Privacidad</Link>
          <Link to="/ayuda-urgente" className="footer-link">Ayuda urgente</Link>
          <Link to="/contacto" className="footer-link">Contacto</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span className="muted small">© {new Date().getFullYear()} {lumina.name}. Proyecto social–mental.</span>
      </div>
    </footer>
  );
}
