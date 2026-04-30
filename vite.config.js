import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Plugin to copy index.html to 404.html for GitHub Pages
const copyIndexTo404Plugin = () => ({
  name: 'copy-index-to-404',
  closeBundle() {
    const distPath = path.resolve(__dirname, 'dist');
    const indexPath = path.join(distPath, 'index.html');
    const notFoundPath = path.join(distPath, '404.html');
    if (fs.existsSync(indexPath)) {
      fs.copyFileSync(indexPath, notFoundPath);
      console.log('Copied index.html to 404.html');
    }
  }
});

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), copyIndexTo404Plugin()],
  base: command === 'build' ? '/perunduraisurgical/' : '/',
}))
