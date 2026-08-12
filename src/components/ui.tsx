import type { ReactNode } from 'react'
import { useI18n } from '../i18n'
import { ArrowUpRightIcon, CheckIcon } from './Icons'
import { RichText } from './RichText'
import { Reveal } from './Reveal'

export function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <header className="mb-14 max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-3 text-3xl leading-[1.12] font-bold sm:text-4xl lg:text-[2.75rem]">{title}</h1>
      {lead && <p className="mt-5 text-lg leading-relaxed text-muted">{lead}</p>}
    </header>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className = '',
}: {
  eyebrow?: string
  title: string
  lead?: string
  className?: string
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{title}</h2>
      {lead && <p className="mt-4 leading-relaxed text-muted">{lead}</p>}
    </div>
  )
}

export function ChipList({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <li key={item} className="chip">
          {item}
        </li>
      ))}
    </ul>
  )
}

export function Prose({ paragraphs, className = '' }: { paragraphs: string[]; className?: string }) {
  return (
    <div className={`prose-copy ${className}`}>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>
          <RichText text={paragraph} />
        </p>
      ))}
    </div>
  )
}

export function CheckList({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
          <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
          <span>
            <RichText text={item} />
          </span>
        </li>
      ))}
    </ul>
  )
}

export function NumberedList({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ol className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <li key={item} className="flex gap-4">
          <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 font-mono text-xs font-medium text-accent">
            {index + 1}
          </span>
          <span className="text-sm leading-relaxed text-ink-soft">
            <RichText text={item} />
          </span>
        </li>
      ))}
    </ol>
  )
}

export function ExternalLink({
  href,
  children,
  className = 'btn',
  showIcon = true,
}: {
  href: string
  children: ReactNode
  className?: string
  showIcon?: boolean
}) {
  const { t } = useI18n()
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      {showIcon && <ArrowUpRightIcon className="size-4 shrink-0 opacity-70" />}
      <span className="sr-only"> ({t.ui.externalLink})</span>
    </a>
  )
}

export function StatTile({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  return (
    <Reveal delay={delay} className="card card-lift p-5">
      <p className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">{value}</p>
      <p className="mt-2 text-xs leading-snug text-muted">{label}</p>
    </Reveal>
  )
}
