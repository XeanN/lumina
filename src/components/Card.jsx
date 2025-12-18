import React from "react";

export default function Card({ title, icon, children }) {
  return (
    <div className="card">
      <div className="card-head">
        {icon && <span className="card-icon" aria-hidden="true">{icon}</span>}
        <h3 className="h3">{title}</h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}
