import { existsSync, copyFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Copy index.html to 404.html to handle client-side routing
const indexHtml = join(__dirname, '..', 'dist', 'index.html');
const notFoundHtml = join(__dirname, '..', 'dist', '404.html');

if (existsSync(indexHtml) && !existsSync(notFoundHtml)) {
  copyFileSync(indexHtml, notFoundHtml);
  console.log('Created 404.html for GitHub Pages SPA routing');
}

// Ensure .nojekyll file exists to prevent Jekyll processing
const noJekyll = join(__dirname, '..', 'dist', '.nojekyll');
if (!existsSync(noJekyll)) {
  writeFileSync(noJekyll, '');
  console.log('Created .nojekyll file to prevent Jekyll processing');
}
