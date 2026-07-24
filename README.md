# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Pendientes de contenido: reemplazar imágenes placeholder

El sitio usa imágenes de [Lorem Picsum](https://picsum.photos) como
placeholder temporal (sin problema de copyright, es su propósito
declarado). Cada una tiene un comentario `TODO` en el código junto a ella.
Búscalas todas con `grep -rn "picsum.photos/seed/" src/`.

| Ubicación | Seed actual | Qué debería ser |
|---|---|---|
| Home, hero | `lumina-hero` | Foto real del equipo o imagen de luz/amanecer |
| Home, sección "Conócenos" | `lumina-video` (poster) | Video real de 30-60s del equipo |
| ¿Para quién?, tarjeta Mujeres | `lumina-mujeres` | Foto real, sin cliché de tristeza |
| ¿Para quién?, tarjeta Adolescentes | `lumina-adolescentes` | Foto real |
| ¿Para quién?, tarjeta Niños | `lumina-ninos` | Foto real |
| Manifiesto | `lumina-manifiesto` | Foto de luz/amanecer, o del equipo |

También pendiente: los íconos sociales del footer (`src/components/Footer.jsx`)
apuntan a `href="#"` hasta tener las cuentas reales de Instagram/TikTok/WhatsApp.
