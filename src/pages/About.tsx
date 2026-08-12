import { Reveal } from '../components/Reveal'
import { PageHeader, Prose } from '../components/ui'
import { profile } from '../data/profile'
import { useI18n } from '../i18n'
import { asset } from '../lib/asset'

export function About() {
  const { t } = useI18n()

  return (
    <div className="shell py-14 sm:py-20">
      <PageHeader eyebrow={t.about.eyebrow} title={t.about.title} />

      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <div className="space-y-12">
          {t.about.sections.map((section, index) => (
            <Reveal key={section.title} as="section" delay={index * 60}>
              <h2 className="flex items-baseline gap-3 text-xl font-semibold sm:text-2xl">
                <span className="font-mono text-sm font-medium text-accent">{String(index + 1).padStart(2, '0')}</span>
                {section.title}
              </h2>
              <Prose paragraphs={section.paragraphs} className="mt-4" />
            </Reveal>
          ))}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Reveal className="card overflow-hidden">
            <img
              src={asset(profile.photo)}
              alt={t.about.photoAlt}
              width={720}
              height={720}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full object-cover"
            />
            <div className="p-6">
              <p className="eyebrow">{t.about.factsTitle}</p>
              <dl className="mt-4 space-y-4">
                {t.about.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="font-mono text-[0.68rem] tracking-wide text-muted uppercase">{fact.label}</dt>
                    <dd className="mt-1 text-sm leading-snug text-ink-soft">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </aside>
      </div>
    </div>
  )
}
