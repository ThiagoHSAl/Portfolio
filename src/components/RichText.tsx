import { Fragment } from 'react'

const MARKERS = /(\*\*[^*]+\*\*|`[^`]+`)/g

/**
 * Formatação mínima para os textos de conteúdo: `**negrito**` e `` `código` ``.
 * Suficiente para o portfólio e sem o peso (nem o `dangerouslySetInnerHTML`) de um
 * parser de Markdown completo.
 */
export function RichText({ text }: { text: string }) {
  return (
    <>
      {text
        .split(MARKERS)
        .filter(Boolean)
        .map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <strong key={index} className="font-semibold text-ink">
                {part.slice(2, -2)}
              </strong>
            )
          }
          if (part.startsWith('`') && part.endsWith('`')) {
            return (
              <code
                key={index}
                className="rounded-md border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[0.85em] text-accent"
              >
                {part.slice(1, -1)}
              </code>
            )
          }
          return <Fragment key={index}>{part}</Fragment>
        })}
    </>
  )
}
