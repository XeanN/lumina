import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import { lumina } from "../data/siteContent";

export default function Recursos() {
  return (
    <Section
      title="Recursos gratuitos"
      subtitle="Pequeños pasos, sostenidos, pueden cambiar tu día."
    >
      <div className="grid grid-3">
        {lumina.resources.map((r) => (
          <Card key={r.title} title={r.title}>
            <p className="muted">{r.desc}</p>
            <a className="link" href={r.href} onClick={(e)=>e.preventDefault()}>
              {r.linkText} →
            </a>
            <p className="small muted" style={{marginTop: 10}}>
              (Luego reemplazamos esto por rutas reales: /recursos/...)
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
