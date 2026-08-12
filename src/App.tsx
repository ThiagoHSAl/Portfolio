import { useEffect, type ComponentType } from 'react'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { profile } from './data/profile'
import { useI18n } from './i18n'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Research } from './pages/Research'
import { Resume } from './pages/Resume'
import { useRoute, type Route } from './router'

const pages: Record<Route, ComponentType> = {
  home: Home,
  sobre: About,
  projetos: Projects,
  pesquisa: Research,
  curriculo: Resume,
}

export function App() {
  const route = useRoute()
  const { t } = useI18n()
  const Page = pages[route]

  useEffect(() => {
    const names: Record<Route, string> = {
      home: t.nav.home,
      sobre: t.nav.about,
      projetos: t.nav.projects,
      pesquisa: t.nav.research,
      curriculo: t.nav.resume,
    }
    document.title =
      route === 'home' ? `${profile.shortName} · ${t.home.eyebrow}` : `${names[route]} · ${profile.shortName}`
  }, [route, t])

  // Trocar de rota num app de página única deve levar o leitor ao topo.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [route])

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg-deep"
      >
        {t.ui.skipToContent}
      </a>

      <Nav />

      <main id="conteudo" key={route} className="page-in">
        <Page />
      </main>

      <Footer />
    </>
  )
}
