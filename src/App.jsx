import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";

import Home from "./pages/Home.jsx";
import QueEs from "./pages/QueEs.jsx";
import ParaQuien from "./pages/ParaQuien.jsx";
import QueHacemos from "./pages/QueHacemos.jsx";
import Recursos from "./pages/Recursos.jsx";
import AyudaUrgente from "./pages/AyudaUrgente.jsx";
import Manifiesto from "./pages/Manifiesto.jsx";
import Contacto from "./pages/Contacto.jsx";
import Privacidad from "./pages/Privacidad.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/que-es" element={<QueEs />} />
        <Route path="/para-quien" element={<ParaQuien />} />
        <Route path="/que-hacemos" element={<QueHacemos />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/ayuda-urgente" element={<AyudaUrgente />} />
        <Route path="/manifiesto" element={<Manifiesto />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/privacidad" element={<Privacidad />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
