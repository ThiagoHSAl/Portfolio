import {
  ArrowRightIcon,
  DroneIcon,
  GithubIcon,
  GlobeIcon,
  LinkedinIcon,
  MailIcon,
  SparkIcon,
  TargetIcon,
} from '../components/Icons'
import { Reveal } from '../components/Reveal'
import { ChipList, ExternalLink, SectionHeading, StatTile } from '../components/ui'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { useI18n } from '../i18n'
import { asset } from '../lib/asset'
import { hrefFor } from '../router'

const focusIcons = [TargetIcon, DroneIcon, SparkIcon]

function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden">
      <div className="aurora pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div className="dot-grid pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden />

      <div className="shell grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.35fr_1fr] lg:gap-16 lg:py-28">
        <div>
          <p className="eyebrow">{t.home.eyebrow}</p>

          <h1 className="mt-5 text-[2.1rem] leading-[1.08] font-bold sm:text-5xl lg:text-[3.4rem]">
            {t.home.titleLead} <span className="text-gradient">{t.home.titleAccent}</span>
            {t.home.titleTail}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">{t.home.lead}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={hrefFor('projetos')} className="btn btn-primary">
              {t.home.ctaPrimary}
            </a>
            <a href={hrefFor('pesquisa')} className="btn">
              {t.home.ctaSecondary}
            </a>
          </div>

          {/* flex-wrap é obrigatório: o chip do e-mail é largo e, sem quebrar linha,
              alargava a coluna do grid além da viewport no mobile. */}
          <ul className="mt-8 flex max-w-full flex-wrap items-center gap-2">
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid size-10 place-items-center rounded-xl border border-line bg-surface/70 text-muted backdrop-blur transition-colors hover:border-accent hover:text-ink"
              >
                <GithubIcon className="size-4" />
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid size-10 place-items-center rounded-xl border border-line bg-surface/70 text-muted backdrop-blur transition-colors hover:border-accent hover:text-ink"
              >
                <LinkedinIcon className="size-4" />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex h-10 max-w-full min-w-0 items-center gap-2 rounded-xl border border-line bg-surface/70 px-4 text-xs text-muted backdrop-blur transition-colors hover:border-accent hover:text-ink"
              >
                <MailIcon className="size-4 shrink-0" />
                <span className="truncate font-mono">{profile.email}</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
          <div
            className="absolute -inset-3 -z-10 rounded-[2rem] opacity-40 blur-2xl"
            style={{ background: 'linear-gradient(140deg, var(--accent), var(--accent-2))' }}
            aria-hidden
          />
          <img
            src={asset(profile.photo)}
            alt={t.home.photoAlt}
            width={720}
            height={720}
            className="aspect-square w-full rounded-3xl border border-line object-cover shadow-card"
          />
        </div>
      </div>
    </section>
  )
}

function Facts() {
  const { t } = useI18n()

  return (
    <section className="shell pb-16 sm:pb-20">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {t.home.facts.map((fact, index) => (
          <StatTile key={fact.label} value={fact.value} label={fact.label} href={fact.href} delay={index * 70} />
        ))}
      </div>
    </section>
  )
}

function Focus() {
  const { t } = useI18n()

  return (
    <section className="shell py-16 sm:py-20">
      <SectionHeading eyebrow={t.home.focusEyebrow} title={t.home.focusTitle} />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {t.home.focus.map((area, index) => {
          const Icon = focusIcons[index] ?? TargetIcon
          return (
            <Reveal key={area.title} delay={index * 90} className="card card-lift flex flex-col p-6">
              <span className="grid size-11 place-items-center rounded-xl border border-line bg-surface-2 text-accent">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{area.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{area.text}</p>
              <ChipList items={area.items} className="mt-6" />
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

function ProjectsPreview() {
  const { t, pick } = useI18n()

  return (
    <section className="shell py-16 sm:py-20">
      <SectionHeading eyebrow={t.home.projectsEyebrow} title={t.home.projectsTitle} lead={t.home.projectsLead} />

      <ul className="mt-10 grid gap-5 sm:grid-cols-2">
        {projects.map((project, index) => {
          // O `thumb` existe para a capa cujo enquadramento não sobrevive a esta grade.
          const imagem = project.thumb ?? project.cover?.src
          const aoVivo = project.links.find((link) => link.kind === 'live')

          return (
            <Reveal as="li" key={project.id} delay={index * 70} className="h-full">
              <article className="card card-lift flex h-full flex-col overflow-hidden">
                {imagem && (
                  <img
                    src={asset(imagem)}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full border-b border-line object-cover"
                  />
                )}
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[0.68rem] tracking-wide text-muted">{pick(project.context)}</p>
                  <h3 className="mt-2 text-lg font-semibold">{pick(project.name)}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{pick(project.tagline)}</p>

                  <div className="mt-6">
                    {aoVivo ? (
                      <ExternalLink href={aoVivo.href} className="btn btn-primary text-xs">
                        <GlobeIcon className="size-4" />
                        {t.ui.live}
                      </ExternalLink>
                    ) : (
                      <a href={hrefFor('pesquisa')} className="btn btn-primary text-xs">
                        {t.ui.readMore}
                        <ArrowRightIcon className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          )
        })}
      </ul>

      <div className="mt-8 flex justify-center">
        <a href={hrefFor('projetos')} className="btn">
          {t.ui.allProjects}
          <ArrowRightIcon className="size-4" />
        </a>
      </div>
    </section>
  )
}

function Contact() {
  const { t } = useI18n()

  return (
    <section className="shell py-16 sm:py-20">
      <Reveal className="card relative overflow-hidden p-8 text-center sm:p-14">
        <div className="aurora pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden />
        <p className="eyebrow">{t.home.contactEyebrow}</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-bold sm:text-3xl">{t.home.contactTitle}</h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">{t.home.contactText}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            <MailIcon className="size-4" />
            {profile.email}
          </a>
          <ExternalLink href={profile.linkedin}>
            <LinkedinIcon className="size-4" />
            LinkedIn
          </ExternalLink>
        </div>
      </Reveal>
    </section>
  )
}

export function Home() {
  return (
    <>
      <Hero />
      <Facts />
      <Focus />
      <ProjectsPreview />
      <Contact />
    </>
  )
}
