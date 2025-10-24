const fs = require('fs');
const path = require('path');

// Copy index.html to 404.html to handle client-side routing
const indexHtml = path.join(__dirname, '..', 'dist', 'index.html');
const notFoundHtml = path.join(__dirname, '..', 'dist', '404.html');

if (fs.existsSync(indexHtml) && !fs.existsSync(notFoundHtml)) {
  fs.copyFileSync(indexHtml, notFoundHtml);
  console.log('Created 404.html for GitHub Pages SPA routing');
}

// Ensure .nojekyll file exists to prevent Jekyll processing
const noJekyll = path.join(__dirname, '..', 'dist', '.nojekyll');
if (!fs.existsSync(noJekyll)) {
  fs.writeFileSync(noJekyll, '');
  console.log('Created .nojekyll file to prevent Jekyll processing');
}
