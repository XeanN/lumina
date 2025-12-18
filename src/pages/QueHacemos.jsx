import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import AlertBox from "../components/AlertBox";
import { lumina } from "../data/siteContent";

export default function QueHacemos() {
  return (
    <Section
      title="Qué hacemos y qué no hacemos"
      subtitle="La claridad es parte de la confianza y la ética."
    >
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
    </Section>
  );
}
