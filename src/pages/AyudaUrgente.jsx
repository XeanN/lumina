import React from "react";
import { Heart, Stethoscope, Siren, Shield } from "lucide-react";
import Section from "../components/Section";
import Seo from "../components/Seo";
import AlertBox from "../components/AlertBox";
import Card from "../components/Card";
import { lumina } from "../data/siteContent";

const icons = {
  "Línea 100": Heart,
  "Línea 113, opción 5": Stethoscope,
  "SAMU": Siren,
  "Policía Nacional": Shield,
};

export default function AyudaUrgente() {
  return (
    <Section title={lumina.urgent.title} subtitle={lumina.urgent.desc}>
      <Seo title="Ayuda urgente" description={lumina.urgent.desc} />

      <AlertBox title="Antes de llamar">
        <ul className="list">
          {lumina.urgent.tips.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </AlertBox>

      <div className="grid grid-2 mt">
        {lumina.urgent.lines.map((l) => {
          const Icon = icons[l.name] || Shield;
          return (
            <Card key={l.name} title={l.name} icon={<Icon size={20} />}>
              <p className="small muted" style={{ marginBottom: 6 }}>{l.org}</p>
              <p className="muted">{l.desc}</p>
              <p className="signature" style={{ fontSize: 16, marginTop: 10 }}>{l.contact}</p>
              {l.extra && <p className="small muted" style={{ marginTop: 4 }}>{l.extra}</p>}
            </Card>
          );
        })}
      </div>

      <p className="small muted mt">{lumina.urgent.outsidePeru}</p>
    </Section>
  );
}
