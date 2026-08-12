import type { Project, ProjectLink, Tone } from '../data/projects'
import { useI18n } from '../i18n'
import { asset } from '../lib/asset'
import { ArrowRightIcon, FileTextIcon, GithubIcon, GlobeIcon, ServerIcon } from './Icons'
import { Reveal } from './Reveal'
import { CheckList, ChipList, ExternalLink, Prose } from './ui'

/** Gradiente de identidade de cada projeto — o único lugar com cores fora dos tokens. */
const toneGradient: Record<Tone, string> = {
  cyan: 'linear-gradient(90deg, #3ddbf5, #2a86d6)',
  amber: 'linear-gradient(90deg, #ffb347, #e2762a)',
  violet: 'linear-gradient(90deg, #a78bfa, #6d5cf5)',
  emerald: 'linear-gradient(90deg, #4ade9a, #12a06b)',
}

function LinkButton({ link }: { link: ProjectLink }) {
  const { t, pick } = useI18n()

  const fallbackLabel: Record<ProjectLink['kind'], string> = {
    live: t.ui.live,
    repo: t.ui.repository,
    paper: t.ui.paper,
    backend: t.ui.backend,
    route: t.ui.readMore,
  }
  const label = link.label ? pick(link.label) : fallbackLabel[link.kind]

  const icon = {
    live: <GlobeIcon className="size-4" />,
    repo: <GithubIcon className="size-4" />,
    backend: <ServerIcon className="size-4" />,
    paper: <FileTextIcon className="size-4" />,
    route: null,
  }[link.kind]

  // Rota interna: sem target="_blank" e sem ícone de link externo.
  if (link.kind === 'route') {
    return (
      <a href={link.href} className="btn btn-primary">
        {label}
        <ArrowRightIcon className="size-4" />
      </a>
    )
  }

  // Abrir o projeto no ar é a ação principal do cartão, então ganha destaque.
  return (
    <ExternalLink href={link.href} className={link.kind === 'live' ? 'btn btn-primary' : 'btn'}>
      {icon}
      {label}
    </ExternalLink>
  )
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t, pick } = useI18n()
  const metrics = project.metrics ?? []

  return (
    <Reveal as="article" className="card overflow-hidden">
      <div className="h-1 w-full" style={{ background: toneGradient[project.tone] }} aria-hidden />

      <div className="p-6 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <p className="font-mono text-xs tracking-wide text-muted">
            <span className="text-accent">{String(index + 1).padStart(2, '0')}</span> · {pick(project.context)}
          </p>
          <p className="font-mono text-xs text-muted">{pick(project.period)}</p>
        </div>

        <div className="mt-4 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-12">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-bold sm:text-[1.7rem]">{pick(project.name)}</h3>
              {project.featured && (
                <span className="chip border-accent/40 text-accent">{t.ui.featured}</span>
              )}
            </div>
            <p className="mt-3 text-lg leading-relaxed text-ink-soft">{pick(project.tagline)}</p>
            <Prose paragraphs={pick(project.body)} className="mt-6 text-[0.95rem]" />
          </div>

          <div className="flex flex-col gap-6">
            {project.cover && (
              <figure className="overflow-hidden rounded-xl border border-line">
                <img
                  src={asset(project.cover.src)}
                  alt={pick(project.cover.alt)}
                  loading="lazy"
                  decoding="async"
                  width={1400}
                  height={1050}
                  className="block w-full"
                />
              </figure>
            )}

            {metrics.length > 0 && (
              <div>
                <p className="eyebrow">{t.ui.results}</p>
                <dl className="mt-3 grid grid-cols-2 gap-3">
                  {metrics.map((metric) => (
                    <div key={pick(metric.label)} className="rounded-xl border border-line bg-surface-2 p-4">
                      <dt className="sr-only">{pick(metric.label)}</dt>
                      <dd>
                        <span className="block font-display text-lg font-bold tracking-tight text-ink">
                          {pick(metric.value)}
                        </span>
                        <span className="mt-1 block text-[0.7rem] leading-snug text-muted">
                          {pick(metric.label)}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <div>
              <p className="eyebrow">{t.ui.highlights}</p>
              <CheckList items={pick(project.highlights)} className="mt-3" />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-line pt-6">
          <p className="eyebrow">{t.ui.stack}</p>
          <ChipList items={project.stack} className="mt-3" />
        </div>

        {(project.links.length > 0 || project.note) && (
          <div className="mt-6">
            <div className="flex flex-wrap items-center gap-3">
              {project.links.map((link) => (
                <LinkButton key={link.href} link={link} />
              ))}
            </div>
            {project.note && <p className="mt-3 text-xs leading-relaxed text-muted">{pick(project.note)}</p>}
          </div>
        )}
      </div>
    </Reveal>
  )
}
