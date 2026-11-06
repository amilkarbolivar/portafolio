# Portafolio — Jorge Amilkar Bolívar Mora

Portafolio web moderno construido con React, Vite y Tailwind CSS.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Despliegue en GitHub Pages

Este proyecto incluye un workflow de GitHub Actions (`.github/workflows/pages.yml`) que construye y publica automáticamente en GitHub Pages al hacer push a `main`.

Pasos:
1. Crear un repositorio vacío en GitHub (ej. `portafolio`).
2. En la configuración del repositorio, activar **Pages → Source: GitHub Actions**.
3. Ejecutar:
   ```bash
   git init
   git add .
   git commit -m "feat: portafolio inicial"
   git branch -M main
   git remote add origin https://github.com/amilkarbolivar/<NOMBRE_REPO>.git
   git push -u origin main
   ```

## Personalización
Edita `src/App.jsx` para actualizar textos, proyectos, habilidades y enlaces.