import type { Localized, LocalizedList } from '../i18n'

export type ProjectLinkKind = 'live' | 'repo' | 'paper' | 'route' | 'backend'

export type ProjectLink = {
  kind: ProjectLinkKind
  href: string
  label?: Localized
}

export type ProjectMetric = {
  value: Localized
  label: Localized
}

/** Define o par de cores usado no realce visual do cartão. */
export type Tone = 'cyan' | 'amber' | 'violet' | 'emerald'

export type Project = {
  id: string
  name: Localized
  period: Localized
  context: Localized
  tagline: Localized
  body: LocalizedList
  highlights: LocalizedList
  metrics?: ProjectMetric[]
  stack: string[]
  links: ProjectLink[]
  note?: Localized
  cover?: { src: string; alt: Localized }
  /** Recorte alternativo, para grades com proporção diferente da capa. */
  thumb?: string
  tone: Tone
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'sar-uav',
    featured: true,
    tone: 'cyan',
    name: {
      pt: 'Detecção aérea de pessoas para busca e salvamento',
      en: 'Aerial person detection for search and rescue',
    },
    period: { pt: 'desde 2025', en: 'since 2025' },
    context: {
      pt: 'Iniciação científica · VerLab · DCC/UFMG',
      en: 'Undergraduate research · VerLab · DCC/UFMG',
    },
    tagline: {
      pt: 'Um quadricóptero de baixo custo que encontra pessoas sozinho e devolve a coordenada geográfica, transferindo a inferência para uma estação em terra por Wi-Fi HaLow.',
      en: 'A low-cost quadrotor that finds people on its own and returns the geographic coordinate, offloading inference to a ground station over Wi-Fi HaLow.',
    },
    cover: {
      src: 'img/sar-deteccao.jpg',
      alt: {
        pt: 'Imagem aérea vertical de um terreno com vegetação, onde uma pessoa aparece marcada por uma caixa de detecção com o rótulo "person 0.68".',
        en: 'Top-down aerial image of vegetated terrain, with a person marked by a detection box labeled "person 0.68".',
      },
    },
    thumb: 'img/sar-deteccao-destaque.jpg',
    body: {
      pt: [
        'Detectores modernos precisam de GPU, e GPU a bordo custa peso, energia e autonomia, exatamente o que um quadricóptero pequeno não tem para dar. Em vez de encolher o modelo até caber, este sistema separa as duas coisas: a aeronave apenas captura e transmite; a inferência acontece em terra.',
        'A bordo, um Raspberry Pi Zero recebe o comando de disparo via MAVLink, fotografa em 2592×1944 e grava, junto da imagem, a posição GNSS e o yaw do instante da captura. A estação em terra puxa as imagens pelo enlace IEEE 802.11ah, roda o YOLOv12s com inferência fatiada e converte cada caixa detectada em latitude e longitude por fotogrametria: GSD calculado a partir da altitude, rotação pelo yaw, deslocamento somado à posição do drone.',
        'A escassez de dados rotulados foi resolvida com treino sim-to-real em dois estágios: pré-treino em 3.000 imagens geradas no Unity com altitude, iluminação e pose randomizadas, seguido de ajuste fino num corpus híbrido de imagens reais e sintéticas. Com apenas 193 imagens reais de treino, o modelo chegou a 0,963 de revocação no conjunto de teste real.',
      ],
      en: [
        'Modern detectors need a GPU, and a GPU on board costs weight, power and endurance, exactly what a small quadrotor cannot spare. Instead of shrinking the model until it fits, this system splits the two concerns: the aircraft only captures and transmits; inference happens on the ground.',
        'On board, a Raspberry Pi Zero receives the trigger command over MAVLink, shoots at 2592×1944, and stores the GNSS position and yaw of the capture instant alongside the image. The ground station pulls the images over the IEEE 802.11ah link, runs YOLOv12s with sliced inference, and turns every detected box into latitude and longitude through photogrammetry: GSD derived from altitude, rotation by yaw, offset added to the drone position.',
        'Labeled-data scarcity was handled with a two-stage sim-to-real strategy: pre-training on 3,000 Unity-generated images with randomized altitude, illumination and pose, followed by fine-tuning on a hybrid corpus of real and synthetic imagery. With only 193 real training images, the model reached 0.963 recall on the real test set.',
      ],
    },
    highlights: {
      pt: [
        'Inferência offboard: o modelo roda em terra e a aeronave carrega apenas um Raspberry Pi Zero',
        'Enlace sub-GHz IEEE 802.11ah (Wi-Fi HaLow) caracterizado em campo, no solo e em voo',
        'Geolocalização fotogramétrica com correção de atitude: caixa na imagem → latitude e longitude',
        'Treino sim-to-real em dois estágios, com dados do Unity e composição por sprites segmentados com U²-Net',
        'Inferência fatiada (SAHI) em blocos de 1024×1024 com 20% de sobreposição, para não perder alvos pequenos',
      ],
      en: [
        'Offboard inference: the model runs on the ground and the aircraft carries only a Raspberry Pi Zero',
        'Sub-GHz IEEE 802.11ah (Wi-Fi HaLow) link characterized in the field, both on the ground and in flight',
        'Photogrammetric geolocation with attitude correction: box in the image → latitude and longitude',
        'Two-stage sim-to-real training, with Unity data and sprite composition segmented by U²-Net',
        'Sliced inference (SAHI) over 1024×1024 tiles with 20% overlap, so small targets are not lost',
      ],
    },
    metrics: [
      {
        value: { pt: '0,963', en: '0.963' },
        label: { pt: 'Revocação no teste real (YOLOv12s)', en: 'Recall on the real test set (YOLOv12s)' },
      },
      {
        value: { pt: '0,975', en: '0.975' },
        label: { pt: 'mAP@50 no teste real', en: 'mAP@50 on the real test set' },
      },
      {
        value: { pt: '1,71–5,99 m', en: '1.71–5.99 m' },
        label: { pt: 'Erro de geolocalização em voo', en: 'In-flight geolocation error' },
      },
      {
        value: { pt: '743 m', en: '743 m' },
        label: { pt: 'Alcance validado de comando e telemetria', en: 'Validated command and telemetry range' },
      },
    ],
    stack: [
      'Python',
      'PyTorch',
      'Ultralytics YOLOv11/v12',
      'SAHI',
      'U²-Net',
      'OpenCV',
      'Unity 6',
      'ROS',
      'MAVLink',
      'Pixhawk 1',
      'Raspberry Pi Zero',
      'IEEE 802.11ah',
    ],
    links: [
      { kind: 'repo', href: 'https://github.com/ThiagoHSAl/Iniciacao_cientifica' },
      { kind: 'route', href: '#/pesquisa' },
    ],
  },

  {
    id: 'elorise',
    tone: 'amber',
    name: { pt: 'EloRise', en: 'EloRise' },
    period: { pt: '2026', en: '2026' },
    context: {
      pt: 'Projeto autoral · disciplina de Projeto de Agentes de IA (UFMG)',
      en: 'Original project · AI Agents Project course (UFMG)',
    },
    tagline: {
      pt: 'Um tutor socrático para League of Legends que diagnostica o jogador contra benchmarks reais de rota e elo, e devolve um plano de treino verificável.',
      en: 'A Socratic tutor for League of Legends that diagnoses the player against real role- and rank-segmented benchmarks, and returns a verifiable training plan.',
    },
    body: {
      pt: [
        'Coaching de jogo costuma ser opinião. Aqui o diagnóstico é estatístico: um backend próprio em FastAPI agrega partidas da Riot API e monta benchmarks segmentados por rota, elo e divisão. O percentil do jogador dentro do seu próprio elo é o que aponta qual métrica está de fato fraca, não a intuição de quem olha.',
        'Sobre esse diagnóstico roda um agente em LangGraph com Gemini, tool-calling e memória de longo prazo por jogador. Ele não entrega a resposta pronta: conduz a tutoria pelo método socrático, com autocrítica determinística do formato, e recupera contexto tático de uma base de conhecimento curada por embeddings.',
        'O aplicativo traz ainda análise de partidas no estilo op.gg, com mapa de mortes, heatmap de posição, timing de objetivos, séries temporais contra o oponente direto, build e ordem de habilidades. Vêm junto um plano de treino com monitor autônomo que reavalia o progresso quando detecta partidas novas, login multiusuário e conformidade com a LGPD.',
      ],
      en: [
        'Game coaching is usually opinion. Here the diagnosis is statistical: a purpose-built FastAPI backend aggregates matches from the Riot API and assembles benchmarks segmented by role, rank and division. The player’s percentile within their own rank is what identifies the genuinely weak metric, not the intuition of whoever is watching.',
        'On top of that diagnosis runs a LangGraph agent with Gemini, tool-calling and long-term per-player memory. It does not hand over the answer: it conducts the tutoring Socratically, with a deterministic self-critique of the format, and retrieves tactical context from a curated knowledge base through embeddings.',
        'The app also includes op.gg-style match analysis, with death map, position heatmap, objective timing, time series against the direct opponent, build and skill order. Alongside it come a training plan with an autonomous monitor that re-evaluates progress when new matches appear, multi-user login, and LGPD compliance.',
      ],
    },
    highlights: {
      pt: [
        'Agente LangGraph + Gemini com tool-calling e memória por jogador entre sessões',
        'Backend próprio de benchmarks em FastAPI, segmentado por rota, elo e divisão',
        'RAG sobre base tática curada, com embeddings e similaridade de cosseno',
        'Análise de partidas: mapa de mortes, heatmap de posição, timing de objetivos e séries vs. oponente',
        'Plano de treino com drills medidos e monitor autônomo de progresso',
        'Multiusuário (Google OIDC + conta local com scrypt), bilíngue PT/EN e aderente à LGPD',
      ],
      en: [
        'LangGraph + Gemini agent with tool-calling and per-player memory across sessions',
        'Purpose-built FastAPI benchmark backend, segmented by role, rank and division',
        'RAG over a curated tactical knowledge base, with embeddings and cosine similarity',
        'Match analysis: death map, position heatmap, objective timing and series vs. opponent',
        'Training plan with measured drills and an autonomous progress monitor',
        'Multi-user (Google OIDC + local account with scrypt), bilingual PT/EN and LGPD-compliant',
      ],
    },
    cover: {
      src: 'img/elorise.jpg',
      alt: {
        pt: 'Tela inicial do EloRise: identidade visual do app e entrada por conta Google ou local.',
        en: 'EloRise landing screen: the app’s visual identity and sign-in with a Google or local account.',
      },
    },
    stack: [
      'Python',
      'Streamlit',
      'LangGraph',
      'Google Gemini',
      'RAG / embeddings',
      'FastAPI',
      'Riot API',
      'Data Dragon',
      'PostgreSQL',
      'SQLite',
      'Plotly',
      'Altair',
      'OIDC / Authlib',
    ],
    links: [
      { kind: 'live', href: 'https://elorise.com.br' },
      {
        kind: 'backend',
        href: 'https://github.com/ThiagoHSAl/lol-api',
        label: { pt: 'Backend de benchmarks', en: 'Benchmarks backend' },
      },
    ],
    note: {
      pt: 'O aplicativo é de código fechado; o backend de benchmarks está aberto.',
      en: 'The app itself is closed-source; the benchmarks backend is open.',
    },
  },

  {
    id: 'bookadvisor',
    tone: 'emerald',
    name: { pt: 'BookAdvisor IA', en: 'BookAdvisor IA' },
    period: { pt: '2026', en: '2026' },
    context: {
      pt: 'Trabalho prático · Organização e Tratamento da Informação (UFMG)',
      en: 'Coursework · Information Organization and Processing (UFMG)',
    },
    tagline: {
      pt: 'Busca literária em linguagem natural que devolve não uma lista de links, mas um objeto informacional enriquecido, com a explicação de por que aquele livro serve.',
      en: 'Natural-language book search that returns not a list of links but an enriched information object, with an explanation of why that book fits.',
    },
    body: {
      pt: [
        'O problema é de encontrabilidade: catálogos digitais têm metadados incompletos ou mal categorizados, e o leitor precisa conhecer o vocabulário técnico do acervo para achar o que quer. O BookAdvisor tira esse peso do usuário.',
        'O Gemini age como tradutor invisível: converte o pedido em linguagem natural, em qualquer idioma, nos filtros que a Google Books API entende (`subject`, `inauthor`, `intitle`, `inpublisher`). Em seguida o sistema consulta em paralelo a Google Books e a Open Library com um ThreadPoolExecutor, e normaliza os metadados brutos para o vocabulário do Schema.org, serializando em JSON-LD.',
        'Os resultados são separados em três eixos (mais relevante, melhor avaliado e mais recente) para que a relevância textual não esconda obras de baixa qualidade informacional. No fim, o LLM lê os dados estruturados do livro escolhido e justifica a recomendação diante do pedido original.',
      ],
      en: [
        'The problem is discoverability: digital catalogs carry incomplete or badly categorized metadata, and the reader has to know the collection’s technical vocabulary to find anything. BookAdvisor takes that burden off the user.',
        'Gemini acts as an invisible translator: it converts the natural-language request, in any language, into the filters the Google Books API understands (`subject`, `inauthor`, `intitle`, `inpublisher`). The system then queries Google Books and Open Library in parallel with a ThreadPoolExecutor, and normalizes the raw metadata into Schema.org vocabulary, serialized as JSON-LD.',
        'Results are split along three axes (most relevant, best rated and most recent) so that textual relevance does not bury informationally weak entries. Finally, the LLM reads the structured data of the selected book and justifies the recommendation against the original request.',
      ],
    },
    highlights: {
      pt: [
        'NLU: pedido em linguagem natural convertido em filtros otimizados de API, em qualquer idioma',
        'Consulta paralela à Google Books e à Open Library com ThreadPoolExecutor',
        'Enriquecimento semântico para o vocabulário Schema.org, serializado em JSON-LD',
        'Ranqueamento híbrido em três eixos, protegendo o usuário de recomendações fracas',
        'Justificativa gerada pelo LLM a partir dos metadados já estruturados',
      ],
      en: [
        'NLU: natural-language request converted into optimized API filters, in any language',
        'Parallel queries to Google Books and Open Library with a ThreadPoolExecutor',
        'Semantic enrichment into Schema.org vocabulary, serialized as JSON-LD',
        'Hybrid ranking along three axes, shielding the user from weak recommendations',
        'LLM-generated justification built from the already-structured metadata',
      ],
    },
    cover: {
      src: 'img/bookadvisor.jpg',
      alt: {
        pt: 'BookAdvisor em uso: as abas de ranqueamento, a justificativa gerada pelo LLM e os metadados enriquecidos do livro recomendado.',
        en: 'BookAdvisor in use: the ranking tabs, the LLM-generated justification and the enriched metadata of the recommended book.',
      },
    },
    stack: [
      'Python',
      'Streamlit',
      'Google GenAI SDK',
      'Gemini',
      'Google Books API',
      'Open Library API',
      'ThreadPoolExecutor',
      'Schema.org',
      'JSON-LD',
    ],
    links: [
      { kind: 'live', href: 'https://bookadvisor-mytggby4hawufyodx8kd9r.streamlit.app/' },
      { kind: 'repo', href: 'https://github.com/ThiagoHSAl/BookAdvisor' },
    ],
    note: {
      pt: 'Hospedado no plano gratuito do Streamlit: se estiver hibernado, a primeira abertura leva alguns minutos.',
      en: 'Hosted on Streamlit’s free tier: if it is asleep, the first load takes a few minutes.',
    },
  },

  {
    id: 'datapolis',
    tone: 'violet',
    name: { pt: 'Datapólis', en: 'Datapólis' },
    period: { pt: '2026', en: '2026' },
    context: {
      pt: 'Projeto aplicado · Organização e Tratamento da Informação (OTI071, UFMG)',
      en: 'Applied project · Information Organization and Processing (OTI071, UFMG)',
    },
    tagline: {
      pt: 'Transparência pública municipal: uma nota comparável de 0 a 5 para cada município brasileiro, num mapa coroplético navegável.',
      en: 'Municipal public transparency: a comparable 0–5 score for every Brazilian municipality, on a navigable choropleth map.',
    },
    body: {
      pt: [
        'O dado público existe, mas espalhado por portais diferentes, em escalas diferentes, sem nada que permita comparar dois municípios de forma honesta. O Datapólis reúne indicadores de economia, educação, saúde e segurança numa nota única, com os pesos declarados abertamente.',
        'A nota combina PIB per capita (20%), IDEB dos anos iniciais (20%), cobertura de atenção primária (15%), mortalidade infantil (15%, invertida), ocorrências criminais por 100 mil habitantes (15%, invertida) e gasto municipal em saúde (15%). Indicador ausente não penaliza o município: os pesos são renormalizados sobre o que existe.',
        'A navegação é um mapa em D3.js com zoom de estados para municípios, busca com autocomplete e comparação lado a lado entre duas cidades. Cada município também expõe seus metadados em Dublin Core (ISO 15836) por uma rota de API, de modo que o próprio dado é catalogável.',
      ],
      en: [
        'Public data exists, but scattered across different portals, at different scales, with nothing that lets you honestly compare two municipalities. Datapólis brings together economic, education, health and public-safety indicators into a single score, with the weights stated openly.',
        'The score combines GDP per capita (20%), early-years IDEB education index (20%), primary-care coverage (15%), infant mortality (15%, inverted), criminal incidents per 100k inhabitants (15%, inverted) and municipal health spending (15%). A missing indicator does not penalize the municipality: the weights are renormalized over whatever is available.',
        'Navigation is a D3.js map with zoom from states down to municipalities, autocomplete search and side-by-side comparison of two cities. Each municipality also exposes its metadata in Dublin Core (ISO 15836) through an API route, so the data itself is catalogable.',
      ],
    },
    highlights: {
      pt: [
        'Nota de 0 a 5 com pesos explícitos e renormalização quando falta indicador',
        'Mapa coroplético em D3.js com zoom de estados para municípios',
        'Comparação lado a lado entre dois municípios',
        'Busca com autocomplete sobre a base de municípios',
        'API de metadados em Dublin Core (ISO 15836) por município',
      ],
      en: [
        '0–5 score with explicit weights and renormalization when an indicator is missing',
        'D3.js choropleth map with zoom from states down to municipalities',
        'Side-by-side comparison of two municipalities',
        'Autocomplete search across the municipality base',
        'Dublin Core (ISO 15836) metadata API per municipality',
      ],
    },
    cover: {
      src: 'img/datapolis.jpg',
      alt: {
        pt: 'Mapa coroplético do Brasil no Datapólis, com os estados coloridos pela nota agregada dos indicadores.',
        en: 'Datapólis choropleth map of Brazil, with states colored by the aggregate indicator score.',
      },
    },
    stack: ['Python', 'Flask', 'SQLite', 'D3.js', 'JavaScript', 'GeoJSON', 'Dublin Core', 'Gunicorn', 'CSS'],
    links: [
      { kind: 'live', href: 'https://datapolis.onrender.com/' },
      { kind: 'repo', href: 'https://github.com/ThiagoHSAl/Datapolis' },
    ],
    note: {
      pt: 'Hospedado no plano gratuito do Render: se estiver hibernado, a primeira abertura leva cerca de um minuto.',
      en: 'Hosted on Render’s free tier: if it is asleep, the first load takes about a minute.',
    },
  },
]

export type OtherWork = {
  name: string
  description: Localized
  stack: string[]
  href: string
}

export const otherWork: OtherWork[] = [
  {
    name: 'Programação Competitiva',
    description: {
      pt: 'Treinamento para o ICPC: estruturas de dados, grafos, programação dinâmica e geometria computacional em C++.',
      en: 'ICPC training: data structures, graphs, dynamic programming and computational geometry in C++.',
    },
    stack: ['C++'],
    href: 'https://github.com/ThiagoHSAl/Programacao-Competitiva',
  },
  {
    name: 'desafio_ros2_verlab',
    description: {
      pt: 'Desafio do processo seletivo do VerLab: controle e navegação de robô em ROS 2.',
      en: 'VerLab selection-process challenge: robot control and navigation in ROS 2.',
    },
    stack: ['Python', 'ROS 2'],
    href: 'https://github.com/ThiagoHSAl/desafio_ros2_verlab_2025.1',
  },
  {
    name: 'Jogos de tabuleiro',
    description: {
      pt: 'Reversi, Lig 4 e Jogo da Velha sobre uma única hierarquia de classes em C++, com cadastro de jogadores, estatísticas, testes e documentação.',
      en: 'Reversi, Connect 4 and Tic-tac-toe over a single C++ class hierarchy, with player registration, statistics, tests and documentation.',
    },
    stack: ['C++', 'POO', 'Testes'],
    href: 'https://github.com/ThiagoHSAl/Faculdade/tree/main/PDS2/Trabalho_Final',
  },
  {
    name: 'LeetCode',
    description: {
      pt: 'Resoluções comentadas, usadas como prática contínua de algoritmos.',
      en: 'Annotated solutions, used as continuous algorithm practice.',
    },
    stack: ['C++'],
    href: 'https://github.com/ThiagoHSAl/LeetCode',
  },
  {
    name: 'Faculdade',
    description: {
      pt: 'Repositório com os trabalhos e laboratórios da graduação em Sistemas de Informação.',
      en: 'Repository with coursework and labs from the Information Systems degree.',
    },
    stack: ['Python', 'C++', 'SQL'],
    href: 'https://github.com/ThiagoHSAl/Faculdade',
  },
]
