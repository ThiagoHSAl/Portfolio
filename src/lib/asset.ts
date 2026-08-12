/**
 * Resolve um caminho de `public/` respeitando o prefixo de deploy (`/Portfolio/` no
 * GitHub Pages, `/` em domínio próprio).
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
