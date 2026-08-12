import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/**
 * O GitHub Pages serve o site em https://<user>.github.io/<repo>/, então os assets
 * precisam do prefixo do repositório. Em domínio próprio, basta rodar o build com
 * VITE_BASE=/ (ou definir a variável no workflow).
 */
const base = process.env.VITE_BASE ?? '/Portfolio/'

/**
 * O GitHub Pages não tem rewrite de servidor. Duplicar o index.html como 404.html faz
 * o app carregar em qualquer caminho digitado direto, sem depender do host.
 */
function githubPagesFallback(): Plugin {
  return {
    name: 'github-pages-404-fallback',
    apply: 'build',
    closeBundle() {
      const dist = resolve(import.meta.dirname, 'dist')
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
    },
  }
}

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), githubPagesFallback()],
  build: {
    target: 'es2022',
    sourcemap: false,
  },
})
