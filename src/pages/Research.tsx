import { FileTextIcon } from '../components/Icons'
import { Reveal } from '../components/Reveal'
import { CheckList, ChipList, ExternalLink, NumberedList, PageHeader } from '../components/ui'
import { publications, type ModelResult, type Publication } from '../data/publications'
import { useI18n, type Lang } from '../i18n'
import { asset } from '../lib/asset'

function formatMetric(value: number, lang: Lang): string {
  return new Intl.NumberFormat(lang === 'pt' ? 'pt-BR' : 'en-US', {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  }).format(value)
}

function formatMeters(value: number, lang: Lang): string {
  return `${new Intl.NumberFormat(lang === 'pt' ? 'pt-BR' : 'en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)} m`
}

function ModelTable({ rows }: { rows: ModelResult[] }) {
  const { t, lang } = useI18n()

  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full min-w-[34rem] border-collapse text-sm">
        <caption className="sr-only">{t.research.modelTableTitle}</caption>
        <thead>
          <tr className="border-b border-line-strong text-left">
            <th scope="col" className="py-3 pr-4 font-mono text-[0.68rem] tracking-wide text-muted uppercase">
              {t.research.table.model}
            </th>
            {[t.research.table.precision, t.research.table.recall, t.research.table.map50, t.research.table.map5095].map(
              (header) => (
                <th
                  key={header}
                  scope="col"
                  className="py-3 pl-4 text-right font-mono text-[0.68rem] tracking-wide text-muted uppercase"
                >
                  {header}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.model}
              className={`border-b border-line last:border-0 ${row.deployed ? 'bg-accent-soft' : ''}`}
            >
              <th
                scope="row"
                className={`py-3 pr-4 text-left font-mono text-xs font-medium ${
                  row.deployed ? 'text-accent' : 'text-ink-soft'
                }`}
              >
                {row.model}
              </th>
              {[row.precision, row.recall, row.map50, row.map5095].map((value, index) => (
                <td
                  key={index}
                  className={`py-3 pl-4 text-right font-mono text-xs tabular-nums ${
                    row.deployed ? 'font-semibold text-ink' : 'text-muted'
                  }`}
                >
                  {formatMetric(value, lang)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function PublicationEntry({ publication }: { publication: Publication }) {
  const { t, lang, pick } = useI18n()

  return (
    <Reveal as="article" className="card overflow-hidden">
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #3ddbf5, #ffb347)' }} aria-hidden />

      <div className="p-6 sm:p-9 lg:p-11">
        <h2 className="text-2xl leading-tight font-bold sm:text-[1.9rem]">{publication.title}</h2>

        <dl className="mt-6 grid gap-5 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[0.68rem] tracking-wide text-muted uppercase">
              {t.research.authorsLabel}
            </dt>
            <dd className="mt-1.5 text-sm leading-snug text-ink-soft">
              {publication.authors.map((author, index) => (
                <span key={author}>
                  {index > 0 && ', '}
                  <span className={index === publication.selfIndex ? 'font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4' : ''}>
                    {author}
                  </span>
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[0.68rem] tracking-wide text-muted uppercase">{t.research.venueLabel}</dt>
            <dd className="mt-1.5 text-sm leading-snug text-ink-soft">{publication.venue}</dd>
          </div>
          <div>
            <dt className="font-mono text-[0.68rem] tracking-wide text-muted uppercase">{t.research.doiLabel}</dt>
            <dd className="mt-1.5">
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link-inline font-mono text-xs break-all"
              >
                {publication.doi}
              </a>
            </dd>
          </div>
        </dl>

        <div className="mt-7 flex flex-wrap gap-3">
          <ExternalLink href={publication.ieeeUrl} className="btn btn-primary">
            IEEE Xplore
          </ExternalLink>
          <ExternalLink href={asset(publication.pdfPath)}>
            <FileTextIcon className="size-4" />
            {t.ui.pdf}
          </ExternalLink>
        </div>

        {/* Resumo */}
        <section className="mt-10">
          <h3 className="eyebrow">{t.research.abstractLabel}</h3>
          <p className="mt-3 leading-relaxed text-ink-soft">{pick(publication.abstract)}</p>

          {lang === 'pt' && (
            <details className="mt-4">
              <summary className="cursor-pointer font-mono text-xs text-accent hover:underline">
                {t.research.abstractOriginal}
              </summary>
              <p className="mt-3 border-l-2 border-line-strong pl-4 text-sm leading-relaxed text-muted">
                {publication.abstractOriginal}
              </p>
            </details>
          )}

          <ChipList items={publication.keywords} className="mt-6" />
        </section>

        {/* Contribuições */}
        <section className="mt-10 border-t border-line pt-8">
          <h3 className="eyebrow">{t.research.contributionsLabel}</h3>
          <CheckList items={pick(publication.contributions)} className="mt-4" />
        </section>

        {/* Arquitetura */}
        <section className="mt-10 border-t border-line pt-8">
          <h3 className="eyebrow">{t.research.architectureLabel}</h3>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
            <NumberedList items={pick(publication.pipeline)} />
            <div className="rounded-xl border border-line bg-surface-2 p-5">
              <p className="font-mono text-[0.68rem] tracking-wide text-muted uppercase">Hardware</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                {pick(publication.hardware).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent" aria-hidden>
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="mt-10 border-t border-line pt-8">
          <h3 className="eyebrow">{t.research.resultsLabel}</h3>

          <h4 className="mt-5 text-base font-semibold">{t.research.modelTableTitle}</h4>
          <ModelTable rows={publication.modelResults} />
          <p className="mt-4 text-xs leading-relaxed text-muted">{t.research.modelTableNote}</p>

          <h4 className="mt-10 text-base font-semibold">{t.research.fieldLabel}</h4>
          <dl className="mt-5 grid grid-cols-3 gap-3">
            {publication.fieldResults.map((result) => (
              <div key={result.flight} className="rounded-xl border border-line bg-surface-2 p-4 text-center">
                <dt className="font-mono text-[0.68rem] tracking-wide text-muted uppercase">
                  {t.research.fieldTable.flight} {result.flight}
                </dt>
                <dd className="mt-2 font-display text-lg font-bold tracking-tight text-ink">
                  {formatMeters(result.errorMeters, lang)}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-center font-mono text-[0.68rem] tracking-wide text-muted uppercase">
            {t.research.fieldTable.error}
          </p>
          <p className="mt-4 text-xs leading-relaxed text-muted">{t.research.fieldNote}</p>

          <h4 className="mt-10 text-base font-semibold">{t.research.linkLabel}</h4>
          <figure className="mt-5">
            {/* A figura é um gráfico de fundo claro: a moldura branca a mantém legível no tema escuro. */}
            <div className="overflow-hidden rounded-xl border border-line bg-white p-3">
              <img
                src={asset('img/halow-enlace.png')}
                alt={t.research.linkImageAlt}
                width={1200}
                height={700}
                loading="lazy"
                decoding="async"
                className="block w-full"
              />
            </div>
            <figcaption className="mt-4 text-xs leading-relaxed text-muted">{t.research.linkNote}</figcaption>
          </figure>
        </section>

        <section className="mt-10 border-t border-line pt-8">
          <h3 className="eyebrow">{t.research.ackLabel}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{pick(publication.acknowledgment)}</p>
        </section>
      </div>
    </Reveal>
  )
}

export function Research() {
  const { t } = useI18n()

  return (
    <div className="shell py-14 sm:py-20">
      <PageHeader eyebrow={t.research.eyebrow} title={t.research.title} lead={t.research.lead} />

      <div className="space-y-8">
        {publications.map((publication) => (
          <PublicationEntry key={publication.id} publication={publication} />
        ))}
      </div>
    </div>
  )
}
