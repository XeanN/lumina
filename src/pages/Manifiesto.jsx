import React from "react";
import Section from "../components/Section";
import { lumina } from "../data/siteContent";

export default function Manifiesto() {
  return (
    <Section title="Manifiesto" subtitle={lumina.tagline}>
      <div className="media mt" style={{ marginBottom: 24 }}>
        {/* TODO: reemplazar por foto real — amanecer, luz entrando por una
            ventana, algo que conecte visualmente con el nombre LÚMINA sin
            ser literal ni cursi. */}
        <img src="https://picsum.photos/seed/lumina-manifiesto/1200/500" alt="Luz cálida de amanecer" />
      </div>
      <div className="prose">
        {lumina.manifesto.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
        <p className="signature">— {lumina.name}</p>
      </div>
    </Section>
  );
}
