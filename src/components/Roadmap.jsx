import React from "react";

export default function Roadmap({ items }) {
  return (
    <div className="stack">
      {items.map((it) => (
        <div key={it.title} className="roadmap-item">
          <div className="roadmap-head">
            <h3 className="h3">{it.title}</h3>
            <span className="badge">{it.status}</span>
          </div>
          <p className="muted">{it.desc}</p>
        </div>
      ))}
    </div>
  );
}
