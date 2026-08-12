import type { ReactNode } from 'react'
import { Reveal } from '../components/Reveal'
import { FileTextIcon } from '../components/Icons'
import { ChipList, ExternalLink, PageHeader } from '../components/ui'
import { asset } from '../lib/asset'
import { publications } from '../data/publications'
import { educationEntries, experienceEntries, researchEntries, extras, skillGroups, type TimelineEntry } from '../data/resume'
import { useI18n } from '../i18n'

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-line pt-10">
      <h2 className="eyebrow">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  )
}

function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const { t, pick } = useI18n()

  return (
    <ol className="space-y-8">
      {entries.map((entry, index) => (
        <Reveal as="li" key={pick(entry.title)} delay={index * 70} className="relative pl-7">
          {/* Marcador e, exceto no último item, o trilho que liga ao próximo. */}
          <span className="absolute top-2 left-0 size-2.5 rounded-full bg-accent" aria-hidden />
          {index < entries.length - 1 && (
            <span className="absolute top-6 -bottom-8 left-[0.3rem] w-px bg-line" aria-hidden />
          )}

          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="text-base font-semibold sm:text-lg">{pick(entry.title)}</h3>
            <p className="font-mono text-xs text-muted">{pick(entry.period)}</p>
          </div>

          <p className="mt-1 text-sm text-accent">
            {entry.orgUrl ? (
              <a href={entry.orgUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {pick(entry.org)}
              </a>
            ) : (
              pick(entry.org)
            )}
          </p>

          {entry.description && (
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{pick(entry.description)}</p>
          )}

          {entry.bullets && (
            <ul className="mt-4 space-y-1.5">
              {pick(entry.bullets).map((bullet) => (
                <li key={bullet} className="flex gap-2 text-sm text-muted">
                  <span className="text-accent" aria-hidden>
                    ·
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          {entry.funding && (
            <p className="mt-4 font-mono text-[0.68rem] tracking-wide text-muted uppercase">
              {t.resume.fundingLabel}: {pick(entry.funding)}
            </p>
          )}
        </Reveal>
      ))}
    </ol>
  )
}

export function Resume() {
  const { t, pick } = useI18n()

  return (
    <div className="shell py-14 sm:py-20">
      <PageHeader eyebrow={t.resume.eyebrow} title={t.resume.title} lead={t.resume.lead} />

      <div className="max-w-3xl space-y-12">
        {/* Uma página em A4, gerada a partir de tools/curriculo.html. */}
        <a href={asset('thiago-almeida-curriculo.pdf')} download className="btn btn-primary w-fit">
          <FileTextIcon className="size-4" />
          {t.resume.downloadPdf}
        </a>
        <Section title={t.resume.researchTitle}>
          <Timeline entries={researchEntries} />
        </Section>

        <Section title={t.resume.publicationsTitle}>
          <ul className="space-y-5">
            {publications.map((publication) => (
              <li key={publication.id} className="card p-5">
                <p className="font-display text-base leading-snug font-semibold">{publication.title}</p>
                <p className="mt-2 text-sm text-muted">
                  {publication.authors.join(', ')}. <span className="italic">{publication.venue}</span>,{' '}
                  {publication.year}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <ExternalLink href={publication.ieeeUrl} className="btn text-xs">
                    IEEE Xplore
                  </ExternalLink>
                  <a
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-inline font-mono text-xs break-all"
                  >
                    {publication.doi}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section title={t.resume.experienceTitle}>
          <Timeline entries={experienceEntries} />
        </Section>

        <Section title={t.resume.educationTitle}>
          <Timeline entries={educationEntries} />
        </Section>

        <Section title={t.resume.skillsTitle}>
          <div className="space-y-6">
            {skillGroups.map((group, index) => (
              <Reveal key={pick(group.title)} delay={index * 50}>
                <h3 className="text-sm font-semibold text-ink-soft">{pick(group.title)}</h3>
                <ChipList items={group.items} className="mt-3" />
              </Reveal>
            ))}
          </div>
        </Section>

        <Section title={t.resume.extrasTitle}>
          <ul className="space-y-3">
            {pick(extras).map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  )
}
