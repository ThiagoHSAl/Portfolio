import { profile, role } from '../data/profile'
import { useI18n } from '../i18n'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'

export function Footer() {
  const { t, pick } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-line">
      <div className="shell flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-base font-semibold">{profile.fullName}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{pick(role)}</p>
          <p className="mt-4 text-xs text-muted">
            © {year} {t.footer.rights}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <ul className="flex gap-2">
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid size-10 place-items-center rounded-xl border border-line bg-surface-2 text-muted transition-colors hover:border-accent hover:text-ink"
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
                className="grid size-10 place-items-center rounded-xl border border-line bg-surface-2 text-muted transition-colors hover:border-accent hover:text-ink"
              >
                <LinkedinIcon className="size-4" />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                aria-label={profile.email}
                className="grid size-10 place-items-center rounded-xl border border-line bg-surface-2 text-muted transition-colors hover:border-accent hover:text-ink"
              >
                <MailIcon className="size-4" />
              </a>
            </li>
          </ul>

          <p className="text-xs text-muted sm:text-right">
            {t.footer.builtWith}{' '}
            <a href={profile.siteRepo} target="_blank" rel="noopener noreferrer" className="link-inline">
              {t.footer.sourceLink}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
