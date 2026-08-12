import { useCallback, useState } from 'react'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'

/**
 * O tema já foi aplicado no <html> pelo script inline do index.html, então aqui só
 * lemos o estado atual do DOM — nunca há divergência entre a primeira pintura e o React.
 */
export function useTheme(): { theme: Theme; toggle: () => void } {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      document.documentElement.classList.toggle('dark', next === 'dark')
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* localStorage bloqueado: a escolha vale só nesta sessão */
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
