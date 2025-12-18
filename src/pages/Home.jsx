import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import Card from "../components/Card";
import AlertBox from "../components/AlertBox";
import { lumina } from "../data/siteContent";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title">{lumina.heroTitle}</h1>
            <p className="hero-subtitle">{lumina.heroSubtitle}</p>

            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contacto">Quiero orientación</Link>
              <Link className="btn btn-ghost" to="/que-es">Conocer LÚMINA</Link>
            </div>

            <div className="hero-note">
              <AlertBox title="Límites éticos">
                <p className="small">{lumina.ethicalNote}</p>
                <p className="small">
                  Si estás en riesgo inmediato, ve a <Link to="/ayuda-urgente">Ayuda urgente</Link>.
                </p>
              </AlertBox>
            </div>
          </div>

          <div className="hero-panel" aria-hidden="true">
            <div className="hero-badge">Espacio seguro</div>
            <div className="hero-badge">Prevención</div>
            <div className="hero-badge">Sin juicio</div>
            <div className="hero-badge">Tecnología ética</div>
          </div>
        </div>
      </section>

      <Section
        title="Nuestros pilares"
        subtitle="LÚMINA existe para acompañar antes de que el dolor crezca."
      >
        <div className="grid grid-4">
          {lumina.pillars.map((p) => (
            <Card key={p.title} title={p.title}>
              <p className="muted">{p.desc}</p>
            </Card>
          ))}
        </div>

        <div className="cta-strip">
          <div>
            <h2 className="h2">¿Para quién es LÚMINA?</h2>
            <p className="muted">Mujeres, adolescentes y niños (a través de adultos).</p>
          </div>
          <div className="cta-actions">
            <Link className="btn btn-primary" to="/para-quien">Ver público</Link>
            <Link className="btn btn-ghost" to="/recursos">Recursos gratis</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
