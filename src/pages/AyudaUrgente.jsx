import React from "react";
import Section from "../components/Section";
import AlertBox from "../components/AlertBox";
import { lumina } from "../data/siteContent";

export default function AyudaUrgente() {
  return (
    <Section title={lumina.urgent.title} subtitle={lumina.urgent.desc}>
      <AlertBox title="Si estás en riesgo inmediato">
        <ul className="list">
          {lumina.urgent.tips.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <p className="small muted" style={{marginTop: 10}}>
          Nota: aquí luego ponemos teléfonos/recursos oficiales por país (Perú primero).
        </p>
      </AlertBox>
    </Section>
  );
}
