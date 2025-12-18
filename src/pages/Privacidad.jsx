import React from "react";
import Section from "../components/Section";
import AlertBox from "../components/AlertBox";
import { lumina } from "../data/siteContent";

export default function Privacidad() {
  return (
    <Section title="Privacidad" subtitle="Confianza, límites y respeto por tus datos.">
      <AlertBox title="Resumen (Fase 1)">
        <ul className="list">
          <li>Este sitio es informativo y de orientación preventiva.</li>
          <li>No recolectamos datos sensibles para diagnóstico.</li>
          <li>Si habilitamos formularios, se indicará qué se guarda y con qué propósito.</li>
          <li>{lumina.ethicalNote}</li>
        </ul>
      </AlertBox>

      <div className="prose mt">
        <p>
          LÚMINA prioriza la privacidad. En fases posteriores, esta página incluirá:
          finalidades de tratamiento, periodos de retención, mecanismos de eliminación,
          consentimiento, y medidas de seguridad.
        </p>
        <p className="muted small">
          Nota: esta sección se ampliará cuando conectemos backend (email/API) o autenticación.
        </p>
      </div>
    </Section>
  );
}
