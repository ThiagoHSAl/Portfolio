import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { anosCompletosDesde, INICIO_BOMBEIROS } from '../lib/tempo'
import { en } from './en'
import { pt, type Dict } from './pt'

export type Lang = 'pt' | 'en'

/** Um texto de conteúdo nos dois idiomas. Usado pelos arquivos de `src/data`. */
export type Localized = Record<Lang, string>
/** Uma lista de textos nos dois idiomas (parágrafos, tópicos). */
export type LocalizedList = Record<Lang, string[]>

const dicts: Record<Lang, Dict> = { pt, en }
const STORAGE_KEY = 'lang'

type LangContextValue = {
  lang: Lang
  /** Dicionário de textos de interface do idioma ativo. */
  t: Dict
  setLang: (lang: Lang) => void
  /** Resolve um campo bilíngue de conteúdo no idioma ativo. */
  pick: <T>(value: Record<Lang, T>) => T
}

const LangContext = createContext<LangContextValue | null>(null)

/**
 * Substitui marcadores `{nome}` em qualquer string do dicionário ou do conteúdo,
 * recursivamente. Existe para que dados que envelhecem, como o tempo de serviço no
 * Corpo de Bombeiros, sejam calculados na hora em vez de escritos à mão.
 */
function interpolar<T>(valor: T, vars: Record<string, string>): T {
  if (typeof valor === 'string') {
    return valor.replace(/\{(\w+)\}/g, (original, chave: string) => vars[chave] ?? original) as T
  }
  if (Array.isArray(valor)) {
    return valor.map((item) => interpolar(item, vars)) as T
  }
  if (valor !== null && typeof valor === 'object') {
    return Object.fromEntries(
      Object.entries(valor).map(([chave, item]) => [chave, interpolar(item, vars)]),
    ) as T
  }
  return valor
}

function readInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    /* localStorage bloqueado */
  }
  // Visitante com navegador em outro idioma provavelmente prefere inglês ao português.
  return navigator.language?.toLowerCase().startsWith('pt') === false ? 'en' : 'pt'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* localStorage bloqueado: a escolha vale só nesta sessão */
    }
  }, [])

  const value = useMemo<LangContextValue>(() => {
    const vars = { anosBombeiro: String(anosCompletosDesde(INICIO_BOMBEIROS)) }
    return {
      lang,
      t: interpolar(dicts[lang], vars),
      setLang,
      pick: (localized) => interpolar(localized[lang], vars),
    }
  }, [lang, setLang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useI18n(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useI18n precisa estar dentro de <LangProvider>')
  return ctx
}
