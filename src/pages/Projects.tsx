import { ArrowUpRightIcon } from '../components/Icons'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { ChipList, PageHeader, SectionHeading } from '../components/ui'
import { otherWork, projects } from '../data/projects'
import { useI18n } from '../i18n'

export function Projects() {
  const { t, pick } = useI18n()

  return (
    <div className="shell py-14 sm:py-20">
      <PageHeader eyebrow={t.projects.eyebrow} title={t.projects.title} lead={t.projects.lead} />

      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <section className="mt-24">
        <SectionHeading title={t.projects.othersTitle} lead={t.projects.othersLead} />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherWork.map((work, index) => (
            <Reveal key={work.name} as="li" delay={index * 60} className="h-full">
              <a
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-lift flex h-full flex-col p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-base font-semibold">{work.name}</h3>
                  <ArrowUpRightIcon className="size-4 shrink-0 text-muted" />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{pick(work.description)}</p>
                <ChipList items={work.stack} className="mt-5" />
              </a>
            </Reveal>
          ))}
        </ul>
      </section>
    </div>
  )
}
