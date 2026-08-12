import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { useI18n, type Lang } from '../i18n'
import { useTheme } from '../lib/useTheme'
import { hrefFor, routes, useRoute, type Route } from '../router'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons'

const navRoutes: Route[] = [...routes]

function labelFor(route: Route, t: ReturnType<typeof useI18n>['t']): string {
  switch (route) {
    case 'home':
      return t.nav.home
    case 'sobre':
      return t.nav.about
    case 'projetos':
      return t.nav.projects
    case 'pesquisa':
      return t.nav.research
    case 'curriculo':
      return t.nav.resume
  }
}

function LangToggle() {
  const { lang, setLang, t } = useI18n()

  return (
    <div
      className="flex items-center rounded-lg border border-line bg-surface-2 p-0.5"
      role="group"
      aria-label={t.ui.languageLabel}
    >
      {(['pt', 'en'] as Lang[]).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={`rounded-md px-2 py-1 font-mono text-[0.7rem] font-medium uppercase transition-colors ${
            lang === option ? 'bg-accent text-bg-deep' : 'text-muted hover:text-ink'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { t } = useI18n()

  return (
    <button
      type="button"
      onClick={toggle}
      title={theme === 'dark' ? t.ui.themeToLight : t.ui.themeToDark}
      aria-label={theme === 'dark' ? t.ui.themeToLight : t.ui.themeToDark}
      className="grid size-9 place-items-center rounded-lg border border-line bg-surface-2 text-muted transition-colors hover:border-accent hover:text-ink"
    >
      {theme === 'dark' ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
    </button>
  )
}

export function Nav() {
  const { t } = useI18n()
  const route = useRoute()
  const [menuOpen, setMenuOpen] = useState(false)

  // Navegar deve fechar o menu mobile, inclusive pelos botões de voltar/avançar.
  useEffect(() => setMenuOpen(false), [route])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-xl">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <a href={hrefFor('home')} className="group flex items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 font-display text-sm font-bold text-accent transition-colors group-hover:border-accent">
            TA
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
            {profile.shortName}
          </span>
        </a>

        <nav aria-label={t.nav.home} className="hidden items-center gap-1 md:flex">
          {navRoutes.map((item) => {
            const active = item === route
            return (
              <a
                key={item}
                href={hrefFor(item)}
                aria-current={active ? 'page' : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active ? 'bg-surface-2 text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {labelFor(item, t)}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          {/* O rótulo "Menu" fica visível: só o ícone não era reconhecido como navegação. */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            className="flex h-9 items-center gap-1.5 rounded-lg border border-line bg-surface-2 px-2.5 text-xs font-semibold text-ink-soft transition-colors hover:border-accent hover:text-ink md:hidden"
          >
            {menuOpen ? <CloseIcon className="size-4" /> : <MenuIcon className="size-4" />}
            {menuOpen ? t.ui.closeMenu : t.ui.openMenu}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-line bg-bg md:hidden" aria-label={t.ui.openMenu}>
          <ul className="shell flex flex-col py-2">
            {navRoutes.map((item) => (
              <li key={item}>
                <a
                  href={hrefFor(item)}
                  aria-current={item === route ? 'page' : undefined}
                  className={`block rounded-lg px-3 py-3 text-sm font-medium ${
                    item === route ? 'bg-surface-2 text-ink' : 'text-muted'
                  }`}
                >
                  {labelFor(item, t)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
