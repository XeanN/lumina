import React from "react";
import { User, UserRound, Baby } from "lucide-react";
import Section from "../components/Section";
import Card from "../components/Card";
import { lumina } from "../data/siteContent";

const icons = {
  woman: <User size={20} />,
  teen: <UserRound size={20} />,
  child: <Baby size={20} />,
};

export default function ParaQuien() {
  return (
    <Section
      title="¿Para quién es?"
      subtitle="LÚMINA acompaña a quienes más necesitan un primer paso seguro."
    >
      <div className="grid grid-3">
        {lumina.audiences.map((a) => (
          <Card key={a.title} title={a.title} icon={icons[a.icon]} image={a.image}>
            <ul className="list">
              {a.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
