import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import { lumina } from "../data/siteContent";

export default function QueEs() {
  return (
    <Section title="¿Qué es LÚMINA?" subtitle={lumina.tagline}>
      <div className="stack">
        <p className="lead">
          <strong>{lumina.name}</strong> es una iniciativa social–tecnológica de orientación y prevención
          en bienestar emocional para mujeres, niños y adolescentes.
        </p>
        <p className="muted">{lumina.ethicalNote}</p>
      </div>

      <div className="grid grid-2">
        <Card title="Propósito">
          <p className="muted">{lumina.mission}</p>
        </Card>
        <Card title="Visión">
          <p className="muted">{lumina.vision}</p>
        </Card>
      </div>
    </Section>
  );
}
