import React from "react";
import { Link } from "react-router-dom";
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
          <Card key={r.slug} title={r.title}>
            <p className="muted">{r.desc}</p>
            <Link className="link" to={`/recursos/${r.slug}`}>
              {r.linkText} →
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
