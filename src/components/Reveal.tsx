import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Atraso em ms, para escalonar itens de uma mesma lista. */
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'article' | 'li'
}

/**
 * Revela o conteúdo quando ele entra na viewport. O efeito é puramente visual: o
 * conteúdo já está no DOM (e no HTML lido por buscadores) desde o primeiro render,
 * e `prefers-reduced-motion` neutraliza a transição pelo CSS.
 */
export function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const Tag: ElementType = as
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.06 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      // A tag é polimórfica, então o tipo do ref é a interseção de todos os elementos
      // possíveis (HTMLDivElement & HTMLLIElement & …). Guardamos o nó como HTMLElement,
      // que é o suficiente para o IntersectionObserver.
      ref={ref as never}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
