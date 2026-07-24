import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import AlertBox from "../components/AlertBox";
import Seo from "../components/Seo";
import { lumina } from "../data/siteContent";

export default function QueHacemos() {
  return (
    <Section
      title="Qué hacemos y qué no hacemos"
      subtitle="La claridad es parte de la confianza y la ética."
    >
      <Seo
        title="Qué hacemos"
        description="Los límites éticos claros de LÚMINA: qué orientación emocional ofrecemos y qué no reemplazamos, como terapia o diagnóstico clínico."
      />
      <div className="grid grid-2">
        <Card title="✅ Lo que sí hacemos">
          <ul className="list">
            {lumina.do.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </Card>

        <Card title="❌ Lo que no hacemos">
          <ul className="list">
            {lumina.dont.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </Card>
      </div>

      <div className="stack mt">
        <AlertBox title="Importante">
          <p className="small">{lumina.ethicalNote}</p>
        </AlertBox>
      </div>

      <div className="stack mt">
        <h2 className="h2">Un recurso oficial para entender los primeros auxilios psicológicos</h2>
        <p className="muted">Video del Ministerio de Salud del Perú (MINSA) — la base técnica en la que se inspira el acompañamiento que ofrece LÚMINA.</p>
        <div className="media" style={{ aspectRatio: "16/9" }}>
          <iframe
            width="100%" height="100%"
            src="https://www.youtube.com/embed/MfVGK6E1FYY"
            title="Primeros Auxilios Psicológicos — MINSA Perú"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </Section>
  );
}
