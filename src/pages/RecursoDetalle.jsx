import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Section from "../components/Section";
import Seo from "../components/Seo";
import { lumina } from "../data/siteContent";

export default function RecursoDetalle() {
  const { slug } = useParams();
  const resource = lumina.resources.find((r) => r.slug === slug);

  if (!resource) return <Navigate to="/recursos" replace />;

  return (
    <Section title={resource.title} subtitle={resource.desc}>
      <Seo title={resource.title} description={resource.desc} />

      {resource.image && (
        <div className="media mt" style={{ marginBottom: 24 }}>
          <img src={resource.image.src} alt={resource.image.alt} />
        </div>
      )}

      <div className="prose">
        {resource.body.map((block, idx) =>
          block.startsWith("## ") ? (
            <h2 key={idx} className="h2 mt">{block.replace("## ", "")}</h2>
          ) : (
            <p key={idx}>{block}</p>
          )
        )}
      </div>

      <p className="mt">
        <Link className="link" to="/recursos">← Volver a recursos</Link>
        {"  ·  "}
        <Link className="link" to="/ayuda-urgente">Ayuda urgente</Link>
      </p>
    </Section>
  );
}
