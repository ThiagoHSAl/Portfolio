import { useSyncExternalStore } from 'react'

/**
 * Roteador por hash, em ~40 linhas. O GitHub Pages não reescreve URLs, e um hash
 * dispensa qualquer configuração de servidor — o custo é a barra `#/` no endereço.
 */
export const routes = ['home', 'sobre', 'projetos', 'pesquisa', 'curriculo'] as const

export type Route = (typeof routes)[number]

function isRoute(value: string): value is Route {
  return (routes as readonly string[]).includes(value)
}

function currentRoute(): Route {
  const raw = window.location.hash.replace(/^#\/?/, '').split('?')[0] ?? ''
  return isRoute(raw) ? raw : 'home'
}

function subscribe(onChange: () => void) {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

export function useRoute(): Route {
  return useSyncExternalStore(subscribe, currentRoute, () => 'home' as Route)
}

export function hrefFor(route: Route): string {
  return `#/${route}`
}

export function navigate(route: Route) {
  window.location.hash = hrefFor(route)
}
