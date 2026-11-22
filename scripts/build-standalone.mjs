import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import esbuild from 'esbuild';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const docsDir = path.join(rootDir, 'docs');

// 1. Run standard Vite production build to get compiled Tailwind CSS
execSync('npx vite build', { stdio: 'inherit', cwd: rootDir });

const distAssetsDir = path.join(distDir, 'assets');
const cssFile = fs.readdirSync(distAssetsDir).find((f) => f.endsWith('.css'));
if (!cssFile) {
  throw new Error('No compiled CSS file found in dist/assets');
}
const cssContent = fs.readFileSync(path.join(distAssetsDir, cssFile), 'utf8');

// 2. Bundle src/main.tsx as a self-contained IIFE script (works via file:// without CORS or server)
const bundleResult = await esbuild.build({
  entryPoints: [path.join(rootDir, 'src/main.tsx')],
  bundle: true,
  write: false,
  minify: true,
  format: 'iife',
  platform: 'browser',
  target: ['es2020'],
  jsx: 'automatic',
  define: {
    'process.env.NODE_ENV': '"production"',
    'import.meta.env.BASE_URL': '"./"'
  },
  loader: {
    '.jpeg': 'dataurl',
    '.jpg': 'dataurl',
    '.png': 'dataurl',
    '.svg': 'dataurl'
  },
  plugins: [
    {
      name: 'ignore-css',
      setup(build) {
        build.onResolve({ filter: /\.css$/ }, (args) => ({
          path: args.path,
          namespace: 'ignore-css'
        }));
        build.onLoad({ filter: /.*/, namespace: 'ignore-css' }, () => ({
          contents: '',
          loader: 'js'
        }));
      }
    }
  ]
});

const jsContent = bundleResult.outputFiles[0].text.replace(/<\/script/gi, '<\\/script');

const html = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OVA Universidad Simón Bolívar · Sede Cúcuta</title>
    <meta name="description" content="Objeto Virtual de Aprendizaje de la Universidad Simón Bolívar, sede Cúcuta, en Innovación y Design Thinking, Ciberseguridad, Gestión de Riesgos, Cultura Organizacional y Gestión del Cambio." />
    <meta property="og:title" content="OVA Universidad Simón Bolívar · Sede Cúcuta" />
    <meta property="og:description" content="Objeto Virtual de Aprendizaje de la Universidad Simón Bolívar, sede Cúcuta, en Innovación y Design Thinking, Ciberseguridad, Gestión de Riesgos, Cultura Organizacional y Gestión del Cambio." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>${cssContent}</style>
  </head>
  <body class="bg-[#FAFAF8] text-[#132219] antialiased selection:bg-[#006837] selection:text-white">
    <div id="root"></div>
    <script>${jsContent}</script>
  </body>
</html>
`;

fs.rmSync(docsDir, { recursive: true, force: true });
fs.mkdirSync(docsDir, { recursive: true });
fs.writeFileSync(path.join(docsDir, 'index.html'), html, 'utf8');
fs.writeFileSync(path.join(docsDir, '.nojekyll'), '', 'utf8');

console.log(`Standalone HTML generated at docs/index.html (${(Buffer.byteLength(html, 'utf8') / 1024).toFixed(1)} KB)`);
