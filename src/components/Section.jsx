import React from "react";

export default function Section({ title, subtitle, children }) {
  return (
    <section className="section">
      <div className="container">
        {title && <h1 className="h1">{title}</h1>}
        {subtitle && <p className="lead">{subtitle}</p>}
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
}
