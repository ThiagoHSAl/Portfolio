import { useLayoutEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Atraso em ms, para escalonar itens de uma mesma lista. */
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'article' | 'li'
}

type Estado = 'oculto' | 'imediato' | 'revelado'

/**
 * Revela o conteúdo quando ele entra na viewport — mas só o que começa abaixo da
 * primeira tela. O que já está na dobra inicial é pintado pronto, sem transição:
 * animar a primeira tela dá a impressão de página ainda carregando, principalmente
 * no celular, onde cabe pouca coisa.
 *
 * O conteúdo está no DOM desde o primeiro render (e no HTML lido por buscadores);
 * o efeito é só visual, e `prefers-reduced-motion` o neutraliza pelo CSS.
 */
export function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const Tag: ElementType = as
  const ref = useRef<HTMLElement | null>(null)
  const [estado, setEstado] = useState<Estado>('oculto')

  // useLayoutEffect: a medição e a mudança de estado acontecem antes da pintura,
  // então o conteúdo da primeira tela nunca chega a piscar invisível.
  useLayoutEffect(() => {
    const node = ref.current
    if (!node) return

    // Posição absoluta no documento, e não relativa à rolagem atual: ao trocar de
    // rota o scroll volta ao topo, então a primeira tela é sempre [0, innerHeight).
    const topoNoDocumento = node.getBoundingClientRect().top + window.scrollY
    if (topoNoDocumento < window.innerHeight) {
      setEstado('imediato')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setEstado('revelado')
            observer.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.02 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const classes = ['reveal', className]
  if (estado !== 'oculto') classes.push('is-visible')
  if (estado === 'imediato') classes.push('is-instant')

  return (
    <Tag
      // A tag é polimórfica, então o tipo do ref é a interseção de todos os elementos
      // possíveis (HTMLDivElement & HTMLLIElement & …). Guardamos o nó como HTMLElement,
      // que é o suficiente para o IntersectionObserver.
      ref={ref as never}
      className={classes.filter(Boolean).join(' ')}
      style={delay && estado !== 'imediato' ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
