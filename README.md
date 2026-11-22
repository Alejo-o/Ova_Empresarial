# OVA Universidad Simón Bolívar · Sede Cúcuta

Objeto Virtual de Aprendizaje (OVA) interactivo sobre **Innovación y Design Thinking**, **Ciberseguridad**, **Gestión de Riesgos**, **Cultura Organizacional** y **Gestión del Cambio**.

**Autores:** Alejandro Olivares, Juan Pablo Santamaría y Kevin Aguirre.

## Cómo ejecutarlo localmente

```bash
npm install
npm run dev
```

## Cómo publicarlo en GitHub Pages (sin pantalla en blanco)

Este proyecto está hecho con React, TypeScript y Vite (`index.html` de la raíz no se ejecuta sin compilar). Para publicarlo en GitHub Pages elige **una** de estas dos opciones en **Settings → Pages**:

1. **Opción recomendada (automática):** en **Source**, selecciona **GitHub Actions** (usa `.github/workflows/deploy.yml`).
2. **Opción directa desde rama:** en **Source**, selecciona **Deploy from a branch**, rama `main` y carpeta **`/docs`**.
