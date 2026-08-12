import type { Localized } from '../i18n'

export const profile = {
  fullName: 'Thiago Henrique Silva de Almeida',
  shortName: 'Thiago Almeida',
  email: 'thiagohenriquesilva.a@gmail.com',
  /** Endereço institucional, o mesmo que consta no artigo publicado. */
  emailAcademico: 'thiagohenriquesilva@dcc.ufmg.br',
  github: 'https://github.com/ThiagoHSAl',
  linkedin: 'https://www.linkedin.com/in/thiagohsal/',
  siteRepo: 'https://github.com/ThiagoHSAl/Portfolio',
  photo: 'img/thiago.jpg',
}

export const role: Localized = {
  pt: 'Desenvolvedor e pesquisador · Percepção visual, agentes de IA e dados',
  en: 'Developer and researcher · Visual perception, AI agents and data',
}

export const verlab = {
  name: 'VerLab',
  url: 'https://verlab.dcc.ufmg.br/',
  full: {
    pt: 'VerLab — Laboratório de Visão Computacional e Robótica, DCC/UFMG',
    en: 'VerLab — Computer Vision and Robotics Laboratory, DCC/UFMG',
  } satisfies Localized,
}
