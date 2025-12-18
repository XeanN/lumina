import React from "react";

export default function AlertBox({ title = "Importante", children }) {
  return (
    <div className="alert">
      <div className="alert-title">{title}</div>
      <div className="alert-body">{children}</div>
    </div>
  );
}
