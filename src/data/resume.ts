import type { Localized, LocalizedList } from '../i18n'
import { verlab } from './profile'

export type TimelineEntry = {
  title: Localized
  org: Localized
  orgUrl?: string
  period: Localized
  description?: Localized
  bullets?: LocalizedList
  funding?: Localized
}

export type SkillGroup = {
  title: Localized
  items: string[]
}

export const researchEntries: TimelineEntry[] = [
  {
    title: {
      pt: 'Bolsista de iniciação científica em percepção aérea para busca e salvamento',
      en: 'Undergraduate research fellow in aerial perception for search and rescue',
    },
    org: verlab.full,
    orgUrl: verlab.url,
    period: { pt: 'desde 2025', en: 'since 2025' },
    description: {
      pt: 'Detecção e geolocalização de pessoas por veículo aéreo não tripulado: treino sim-to-real de detectores YOLO, pipeline fotogramétrico de estimativa de coordenadas, integração embarcada (Pixhawk, MAVLink, Raspberry Pi), caracterização de enlace IEEE 802.11ah em campo e experimentos de validação em voo autônomo.',
      en: 'UAV-based person detection and geolocation: sim-to-real training of YOLO detectors, a photogrammetric coordinate-estimation pipeline, embedded integration (Pixhawk, MAVLink, Raspberry Pi), field characterization of an IEEE 802.11ah link, and validation experiments in autonomous flight.',
    },
    funding: { pt: 'CAPES · CNPq · FAPEMIG', en: 'CAPES · CNPq · FAPEMIG' },
  },
]

export const experienceEntries: TimelineEntry[] = [
  {
    title: {
      pt: 'Militar em operações de emergência e aviação',
      en: 'Military service in emergency operations and aviation',
    },
    org: {
      pt: 'Corpo de Bombeiros Militar de Minas Gerais',
      en: 'Minas Gerais Military Fire Department',
    },
    period: { pt: 'desde 2017', en: 'since 2017' },
    description: {
      pt: '{anosBombeiro} anos de operação em emergências, ainda em atividade. Como operador aerotático e piloto de aeronave remotamente pilotada, atuei em buscas, incêndios e apoio aéreo, pilotando e, ao mesmo tempo, fazendo a varredura visual da imagem ao vivo. Foi exatamente essa carga de trabalho que se tornou o meu problema de pesquisa.',
      en: '{anosBombeiro} years of emergency operations, still serving. As an aerotactical operator and remotely piloted aircraft pilot, I worked on searches, fires and aerial support, flying the aircraft while visually sweeping the live feed at the same time. That workload is exactly what became my research problem.',
    },
    bullets: {
      pt: [
        'Auxiliar de planejamento (desde 2023)',
        'Auxiliar de secretaria (2022–2023)',
        'Operador aerotático e piloto de aeronave remotamente pilotada (2020–2022)',
        'Combatente (2017–2022)',
      ],
      en: [
        'Planning assistant (since 2023)',
        'Administrative assistant (2022–2023)',
        'Aerotactical operator and remotely piloted aircraft pilot (2020–2022)',
        'Firefighter (2017–2022)',
      ],
    },
  },
]

export const educationEntries: TimelineEntry[] = [
  {
    title: {
      pt: 'Bacharelado em Sistemas de Informação',
      en: 'B.Sc. in Information Systems',
    },
    org: {
      pt: 'Universidade Federal de Minas Gerais (UFMG)',
      en: 'Universidade Federal de Minas Gerais (UFMG)',
    },
    period: { pt: '2024 a 2027/2 (previsto)', en: '2024 to 2027/2 (expected)' },
  },
  {
    title: { pt: 'Técnico em Mecatrônica', en: 'Technical degree in Mechatronics' },
    org: { pt: 'CEFET-MG', en: 'CEFET-MG' },
    period: { pt: '2011–2014', en: '2011–2014' },
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: { pt: 'Linguagens', en: 'Languages' },
    items: ['Python', 'C++', 'TypeScript', 'JavaScript', 'SQL', 'C'],
  },
  {
    title: { pt: 'Visão computacional e aprendizado de máquina', en: 'Computer vision and machine learning' },
    items: [
      'PyTorch',
      'Ultralytics YOLO (v11 / v12)',
      'SAHI',
      'OpenCV',
      'U²-Net',
      'Sim-to-real',
      'Curadoria e anotação de datasets',
    ],
  },
  {
    title: { pt: 'Robótica e sistemas embarcados', en: 'Robotics and embedded systems' },
    items: [
      'ROS 2',
      'MAVLink',
      'Pixhawk / ArduPilot',
      'Mission Planner',
      'Raspberry Pi',
      'Câmeras térmicas radiométricas',
      'IEEE 802.11ah (Wi-Fi HaLow)',
      'Fotogrametria',
    ],
  },
  {
    title: { pt: 'IA aplicada', en: 'Applied AI' },
    items: ['LangGraph', 'Google Gemini', 'RAG / embeddings', 'Tool-calling', 'Google GenAI SDK'],
  },
  {
    title: { pt: 'Web, dados e metadados', en: 'Web, data and metadata' },
    items: [
      'Flask',
      'FastAPI',
      'Streamlit',
      'React',
      'D3.js',
      'SQLite',
      'PostgreSQL',
      'REST',
      'JSON-LD / Schema.org',
      'Dublin Core (ISO 15836)',
    ],
  },
  {
    title: { pt: 'Ferramentas', en: 'Tooling' },
    items: ['Git', 'Linux', 'Docker', 'Unity', 'LaTeX', 'Vite'],
  },
]

export const extras: LocalizedList = {
  pt: [
    'Programação competitiva em C++ para o ICPC, com foco em estruturas de dados, grafos e programação dinâmica.',
    'Piloto de aeronave remotamente pilotada (RPA), com experiência operacional em busca e salvamento.',
    'Artigo científico redigido e publicado em inglês, revisado por pares.',
    'Técnico em mecatrônica: eletrônica, instrumentação e automação, a base que sustenta o trabalho com sensores embarcados.',
  ],
  en: [
    'Competitive programming in C++ for the ICPC, focused on data structures, graphs and dynamic programming.',
    'Remotely piloted aircraft (RPA) pilot, with operational search-and-rescue experience.',
    'Peer-reviewed scientific paper written and published in English.',
    'Mechatronics technician: electronics, instrumentation and automation, the foundation behind the work with embedded sensors.',
  ],
}
