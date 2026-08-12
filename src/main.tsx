import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { LangProvider } from './i18n'
import './index.css'

const container = document.getElementById('root')
if (!container) throw new Error('Elemento #root não encontrado no index.html')

createRoot(container).render(
  <StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </StrictMode>,
)
