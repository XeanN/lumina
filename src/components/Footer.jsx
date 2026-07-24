import React from "react";
import { Link } from "react-router-dom";
import { Camera, MessageCircle, Music2 } from "lucide-react";
import { lumina } from "../data/siteContent";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">{lumina.name}</div>
          <p className="muted">{lumina.tagline}</p>
          <p className="muted small">{lumina.ethicalNote}</p>

          <div className="footer-social">
            <a href="#" aria-label="Instagram de LÚMINA" className="footer-link"><Camera size={18} /></a>
            <a href="#" aria-label="TikTok de LÚMINA" className="footer-link"><Music2 size={18} /></a>
            <a href="#" aria-label="WhatsApp de LÚMINA" className="footer-link"><MessageCircle size={18} /></a>
          </div>
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
