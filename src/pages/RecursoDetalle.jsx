import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Section from "../components/Section";
import { lumina } from "../data/siteContent";

export default function RecursoDetalle() {
  const { slug } = useParams();
  const resource = lumina.resources.find((r) => r.slug === slug);

  if (!resource) return <Navigate to="/recursos" replace />;

  return (
    <Section title={resource.title} subtitle={resource.desc}>
      <div className="prose">
        {resource.body.map((p, idx) => <p key={idx}>{p}</p>)}
      </div>
      <p className="mt">
        <Link className="link" to="/recursos">← Volver a recursos</Link>
        {"  ·  "}
        <Link className="link" to="/ayuda-urgente">Ayuda urgente</Link>
      </p>
    </Section>
  );
}
