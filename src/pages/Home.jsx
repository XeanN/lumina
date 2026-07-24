import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import Card from "../components/Card";
import AlertBox from "../components/AlertBox";
import Roadmap from "../components/Roadmap";
import Seo from "../components/Seo";
import { lumina } from "../data/siteContent";

export default function Home() {
  return (
    <>
      <Seo
        title="Inicio"
        description="LÚMINA es un espacio seguro de orientación y prevención en bienestar emocional para mujeres, niños, adolescentes y adultos."
      />
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title">{lumina.heroTitle}</h1>
            <p className="hero-subtitle">{lumina.heroSubtitle}</p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="https://chatlumina.aliiatech.com">Hablar con Lumina</a>
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

          <div className="media mt">
            {/* TODO: reemplazar por foto real — idealmente tú o tu equipo,
                luz cálida, sin poses forzadas de "persona triste mirando
                la ventana". Alternativa: una imagen abstracta de luz/amanecer
                que refuerce el nombre LÚMINA. */}
            <img src="https://picsum.photos/seed/lumina-hero/1200/750" alt="Persona en un momento de calma, luz cálida" />
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
            <p className="muted">Mujeres, adolescentes, niños y adultos que necesitan un primer apoyo.</p>
          </div>
          <div className="cta-actions">
            <Link className="btn btn-primary" to="/para-quien">Ver público</Link>
            <Link className="btn btn-ghost" to="/recursos">Recursos gratis</Link>
          </div>
        </div>
      </Section>

      <Section
        title="Cómo funciona"
        subtitle="Tú siempre tienes el control de la conversación."
      >
        <div className="grid grid-3">
          {lumina.howItWorks.map((s) => (
            <Card key={s.step} title={s.title}>
              <p className="muted">{s.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Conócenos"
        subtitle="Detrás de LÚMINA hay personas reales, no solo tecnología."
      >
        <div className="video-card">
          {/* TODO: reemplazar con video real (30-60s). Contenido sugerido:
              alguien del equipo explicando en primera persona por qué existe
              LÚMINA. No usar esta caja sin video real antes de publicar —
              un video falso/vacío es peor que no tener nada. */}
          <img src="https://picsum.photos/seed/lumina-video/1200/675" alt="" aria-hidden="true" />
          <div className="play-badge">
            <div className="play-icon" aria-hidden="true">▶</div>
            <p className="small">Video pendiente: presentación del equipo (30-60s)</p>
          </div>
        </div>
      </Section>

      <Section
        title="Hacia dónde vamos"
        subtitle="LÚMINA crece por fases. Así lo estamos construyendo."
      >
        <Roadmap items={lumina.roadmap} />
      </Section>
    </>
  );
}
