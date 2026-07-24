import React, { useState } from "react";
import Section from "../components/Section";
import AlertBox from "../components/AlertBox";
import Seo from "../components/Seo";
import { lumina } from "../data/siteContent";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // En Fase 1 no enviamos a backend. Luego lo conectamos (EmailJS, Firebase, API propia, etc.)
    setSent(true);
  };

  return (
    <Section
      title="Contacto / Orientación"
      subtitle="Si quieres dar un primer paso, escribe con calma. Tu privacidad importa."
    >
      <Seo
        title="Contacto"
        description="Escribe a LÚMINA para recibir orientación emocional gratuita y confidencial. Respondemos en 24 a 48 horas."
      />
      <AlertBox title="Aviso ético">
        <p className="small">{lumina.ethicalNote}</p>
      </AlertBox>

      <div className="grid grid-2 mt">
        <form className="form" onSubmit={onSubmit}>
          <label className="label">
            Nombre (opcional)
            <input className="input" name="nombre" value={form.nombre} onChange={onChange} placeholder="Tu nombre" />
          </label>

          <label className="label">
            Correo (opcional)
            <input className="input" type="email" name="correo" value={form.correo} onChange={onChange} placeholder="tu@email.com" />
          </label>

          <label className="label">
            Mensaje
            <textarea className="textarea" name="mensaje" value={form.mensaje} onChange={onChange} placeholder="Cuéntame qué necesitas (sin datos sensibles si puedes)..." rows={6} required />
          </label>

          <button className="btn btn-primary" type="submit">Enviar</button>

          {sent && (
            <p className="small" style={{ marginTop: 12 }}>
              ✅ Mensaje guardado localmente (demo). Luego lo conectamos a un envío real.
            </p>
          )}
        </form>

        <div className="stack">
          <h3 className="h3">Privacidad</h3>
          <p className="muted">
            En esta fase inicial, LÚMINA es un sitio informativo. Cuando activemos formularios reales,
            publicaremos políticas claras de datos, consentimientos y límites.
          </p>
          <p className="muted">
            Si estás en riesgo inmediato, ve a <a className="link" href="/ayuda-urgente">Ayuda urgente</a>.
          </p>

          <h3 className="h3 mt">¿Qué esperar después de escribir?</h3>
          <p className="muted">
            En esta fase, alguien del equipo de LÚMINA lee cada mensaje
            personalmente — no hay un chat automático todavía. Respondemos
            en un plazo de 24 a 48 horas.
          </p>

          <h3 className="h3 mt">¿Prefieres escribir por WhatsApp?</h3>
          <p className="muted">
            <a className="btn btn-ghost" href="https://wa.me/51969980152" target="_blank" rel="noreferrer">
              Escribir por WhatsApp
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
