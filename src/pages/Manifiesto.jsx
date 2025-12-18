import React from "react";
import Section from "../components/Section";
import { lumina } from "../data/siteContent";

export default function Manifiesto() {
  return (
    <Section title="Manifiesto" subtitle={lumina.tagline}>
      <div className="prose">
        {lumina.manifesto.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
        <p className="signature">— {lumina.name}</p>
      </div>
    </Section>
  );
}
