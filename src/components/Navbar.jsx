import React from "react";
import { NavLink, Link } from "react-router-dom";
import { lumina } from "../data/siteContent";

const navItems = [
  { to: "/que-es", label: "¿Qué es?" },
  { to: "/para-quien", label: "¿Para quién?" },
  { to: "/que-hacemos", label: "Qué hacemos" },
  { to: "/recursos", label: "Recursos" },
  { to: "/ayuda-urgente", label: "Ayuda urgente" },
  { to: "/manifiesto", label: "Manifiesto" },
  { to: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <span className="brand-dot" aria-hidden="true" />
          <span className="brand-name">{lumina.name}</span>
        </Link>

        <nav className="nav-links" aria-label="Navegación principal">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <Link className="btn btn-primary" to="/contacto">
            Quiero orientación
          </Link>
        </div>
      </div>
    </header>
  );
}
