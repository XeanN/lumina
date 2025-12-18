import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import { lumina } from "../data/siteContent";

export default function ParaQuien() {
  return (
    <Section
      title="¿Para quién es?"
      subtitle="LÚMINA acompaña a quienes más necesitan un primer paso seguro."
    >
      <div className="grid grid-3">
        {lumina.audiences.map((a) => (
          <Card key={a.title} title={a.title} icon={a.icon}>
            <ul className="list">
              {a.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
