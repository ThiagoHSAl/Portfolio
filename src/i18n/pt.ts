export const pt = {
  nav: {
    home: 'Início',
    about: 'Sobre mim',
    projects: 'Projetos',
    research: 'Pesquisa',
    resume: 'Currículo',
  },

  ui: {
    skipToContent: 'Ir para o conteúdo',
    openMenu: 'Menu',
    closeMenu: 'Fechar',
    themeToDark: 'Ativar tema escuro',
    themeToLight: 'Ativar tema claro',
    languageLabel: 'Idioma',
    switchToEnglish: 'Switch to English',
    stack: 'Tecnologias',
    highlights: 'O que ele faz',
    results: 'Resultados medidos',
    live: 'Acessar o projeto',
    repository: 'Repositório',
    paper: 'Artigo',
    pdf: 'PDF',
    backend: 'Backend',
    privateRepo: 'Código-fonte fechado',
    featured: 'Destaque',
    readMore: 'Ver detalhes da pesquisa',
    allProjects: 'Ver todos os projetos',
    externalLink: 'abre em nova aba',
  },

  home: {
    eyebrow: 'Percepção e robótica · Agentes de IA · Dados e aplicações',
    titleLead: 'Sistemas que',
    titleAccent: 'enxergam',
    titleTail: ', decidem e explicam.',
    lead: 'Sou Thiago Almeida, desenvolvedor e graduando em Sistemas de Informação na UFMG. Construo sistemas de ponta a ponta: modelos de visão computacional que rodam embarcados, agentes de IA com ferramentas e memória, e aplicações web que transformam dado bruto em decisão.',
    ctaPrimary: 'Ver projetos',
    ctaSecondary: 'Ler o artigo publicado',
    photoAlt: 'Retrato de Thiago Henrique Silva de Almeida',
    facts: [
      { value: '3 apps no ar', label: 'Projetos próprios que você pode abrir agora', href: '#/projetos' },
      { value: 'IEEE CROS 2026', label: 'Artigo publicado e indexado', href: '#/pesquisa' },
      { value: 'VerLab · UFMG', label: 'Iniciação científica em robótica', href: 'https://verlab.dcc.ufmg.br/' },
      { value: '{anosBombeiro} anos', label: 'No Corpo de Bombeiros de Minas Gerais', href: '#/curriculo' },
    ],
    focusEyebrow: 'No que eu trabalho',
    focusTitle: 'Três frentes, o mesmo jeito de atacar o problema',
    focus: [
      {
        title: 'Percepção e robótica',
        text: 'Visão computacional em hardware que não perdoa: detectores para vista aérea, inferência fatiada em alta resolução e a integração do que voa — autopiloto, companion computer, câmera e rádio. É a frente da minha iniciação científica no VerLab, medida em campo e não só em conjunto de teste.',
        items: ['PyTorch', 'YOLOv11 / v12', 'SAHI', 'OpenCV', 'Unity', 'ROS 2', 'MAVLink', 'Pixhawk'],
      },
      {
        title: 'Agentes de IA',
        text: 'LLM como componente de sistema, não como caixa de chat: grafos de estado com ferramentas, memória de longo prazo por usuário, recuperação semântica sobre base curada e autocrítica do formato da resposta. É o que sustenta o EloRise e o BookAdvisor.',
        items: ['LangGraph', 'Gemini', 'RAG / embeddings', 'Tool-calling', 'Streamlit', 'Google GenAI SDK'],
      },
      {
        title: 'Dados e aplicações',
        text: 'A ponta que entrega: APIs próprias, modelagem de dados, metadados padronizados e visualização que deixa o número comparável. Do backend de benchmarks em FastAPI ao mapa coroplético do Datapólis — e a este portfólio.',
        items: ['FastAPI', 'Flask', 'PostgreSQL', 'SQLite', 'D3.js', 'React', 'TypeScript', 'JSON-LD'],
      },
    ],
    projectsEyebrow: 'Projetos',
    projectsTitle: 'Quatro projetos, quatro problemas diferentes',
    projectsLead: 'Três deles estão no ar agora e você pode abrir sem instalar nada. O quarto é a pesquisa, com os resultados de campo abertos.',
    contactEyebrow: 'Contato',
    contactTitle: 'Aberto a oportunidades de emprego, pesquisa e colaboração',
    contactText:
      'Meu interesse é desenvolvimento de software de forma ampla: back-end e APIs, visão computacional e aprendizado de máquina, agentes de IA, dados e visualização, front-end, robótica e sistemas embarcados. Se algo aqui conversa com o que você faz, me escreva.',
  },

  about: {
    eyebrow: 'Sobre mim',
    title: 'Desenvolvedor e pesquisador — cheguei ao código pela mecatrônica',
    photoAlt: 'Retrato de Thiago Henrique Silva de Almeida',
    factsTitle: 'Em resumo',
    facts: [
      { label: 'Onde', value: 'Belo Horizonte, MG · Brasil' },
      { label: 'Formação', value: 'Sistemas de Informação — UFMG' },
      { label: 'Pesquisa', value: 'VerLab — Visão Computacional e Robótica, DCC/UFMG' },
      { label: 'Foco', value: 'Percepção visual, agentes de IA, dados e aplicações' },
      { label: 'Também', value: 'Bombeiro militar (CBMMG) desde 2017' },
      { label: 'Idiomas', value: 'Português (nativo) · Inglês (técnico)' },
    ],
    sections: [
      {
        title: 'Quem eu sou',
        paragraphs: [
          'Meu nome é Thiago Henrique Silva de Almeida. Sou técnico em Mecatrônica pelo CEFET-MG e graduando em Sistemas de Informação na UFMG, onde faço iniciação científica no **VerLab**, o laboratório de visão computacional e robótica do Departamento de Ciência da Computação.',
          'Eletrônica, instrumentação e automação vieram antes de qualquer linha de código. Isso deixou marca no jeito que eu programo — penso primeiro na restrição real e no que vai ser medido, depois na abstração.',
        ],
      },
      {
        title: 'O que eu construo',
        paragraphs: [
          'Trabalho em três frentes, e nenhuma delas é hobby da outra. O que se repete não é a tecnologia: é o método — entender a restrição real antes de escolher a ferramenta.',
          'Na **pesquisa**, no VerLab, desenvolvo detecção e geolocalização de pessoas por VANT para busca e salvamento. Um quadricóptero de baixo custo não carrega GPU, então a inferência sai de bordo e vai para uma estação em terra por Wi-Fi HaLow. O trabalho rendeu um artigo publicado no IEEE Xplore, com validação em voo autônomo.',
          'Em **agentes de IA**, o EloRise é o projeto mais completo que já escrevi: um tutor socrático para League of Legends com agente em LangGraph, memória de longo prazo por jogador, RAG sobre base tática curada, login multiusuário e um backend próprio de benchmarks em FastAPI alimentado pela Riot API. O BookAdvisor ataca outro problema — encontrabilidade — usando o LLM como tradutor entre a linguagem do leitor e o vocabulário técnico dos catálogos, com saída em Schema.org e JSON-LD.',
          'Em **dados e web**, o Datapólis reúne indicadores públicos de todos os municípios brasileiros numa nota comparável, com mapa em D3.js, comparação lado a lado e uma API de metadados em Dublin Core. Este portfólio também é meu: React, TypeScript e Tailwind, com roteador próprio.',
        ],
      },
      {
        title: 'Como eu trabalho',
        paragraphs: [
          '**Medir antes de afirmar.** Todo número que aparece neste portfólio saiu de um experimento com metodologia descrita — inclusive os que não favorecem a minha tese.',
          '**Restrição é informação.** Não ter GPU a bordo não é obstáculo a contornar com força bruta; é o que define a arquitetura. As melhores decisões dos meus projetos vieram de levar as limitações a sério.',
          '**Campo é o juiz.** Métrica em conjunto de teste é hipótese. Só voo, terra irregular e enlace degradando dizem se aquilo funciona.',
        ],
      },
      {
        title: 'Fora do código',
        paragraphs: [
          'Treino **programação competitiva em C++** com foco no ICPC — é o meu exercício de algoritmos e estruturas de dados sob pressão de tempo, e um contrapeso saudável ao ritmo de pesquisa.',
          'Continuo interessado em tudo que voa e em tudo que mede: fotogrametria, termografia radiométrica, calibração de sensores. Boa parte disso acabou virando pesquisa.',
        ],
      },
    ],
  },

  projects: {
    eyebrow: 'Projetos',
    title: 'O que eu construí, e por quê',
    lead: 'Quatro projetos autorais, do laboratório de robótica à aplicação de dados públicos. Cada um resolve um problema concreto e traz o que foi realmente medido.',
    othersTitle: 'Outros trabalhos',
    othersLead: 'Repositórios de estudo, disciplinas e treinamento que não são produtos, mas mostram no que eu ando mexendo.',
  },

  research: {
    eyebrow: 'Pesquisa',
    title: 'Publicações',
    lead: 'Iniciação científica no VerLab (DCC/UFMG), com apoio de CAPES, CNPq e FAPEMIG.',
    authorsLabel: 'Autores',
    venueLabel: 'Publicado em',
    doiLabel: 'DOI',
    abstractLabel: 'Resumo',
    abstractOriginal: 'Resumo original (inglês)',
    keywordsLabel: 'Palavras-chave',
    contributionsLabel: 'Contribuições',
    architectureLabel: 'Como o sistema funciona',
    resultsLabel: 'Resultados',
    modelTableTitle: 'Arquiteturas YOLO avaliadas no conjunto de teste real',
    modelTableNote:
      'Todas as variantes passaram pelo mesmo protocolo sim-to-real de dois estágios. O YOLOv12s foi escolhido como modelo de produção pela arquitetura centrada em atenção, mais generalizável em cenas com oclusão e desordem.',
    fieldLabel: 'Validação em campo',
    fieldNote:
      'Três voos autônomos em padrão de varredura a 10 m de altitude e 1 m/s, sobre um alvo humano cuja posição era conhecida pela equipe de terra, mas não pelo sistema de percepção. O erro é a distância de Haversine até a coordenada de referência.',
    linkLabel: 'Caracterização do enlace Wi-Fi HaLow',
    linkNote:
      'Ensaio em ambiente semiurbano com vegetação e edificações. A banda cai abaixo de 1 Mbps depois de ~270 m, mas a latência se mantém sob 130 ms até 743 m — ou seja, o vídeo tem alcance limitado, o comando e a telemetria não.',
    linkImageAlt: 'Gráfico de banda em Mbps e latência média em ms em função da distância em metros',
    ackLabel: 'Agradecimentos',
    table: {
      model: 'Modelo',
      precision: 'Precisão',
      recall: 'Revocação',
      map50: 'mAP@50',
      map5095: 'mAP@50-95',
    },
    fieldTable: {
      flight: 'Voo',
      error: 'Erro médio de geolocalização',
    },
  },

  resume: {
    eyebrow: 'Currículo',
    title: 'Trajetória',
    lead: 'Da resposta a emergências à pesquisa em robótica aérea. Formação em mecatrônica, graduação em sistemas de informação e produção científica revisada por pares.',
    researchTitle: 'Pesquisa',
    publicationsTitle: 'Publicações',
    experienceTitle: 'Experiência profissional',
    educationTitle: 'Formação',
    skillsTitle: 'Competências técnicas',
    extrasTitle: 'Atividades complementares',
    downloadPdf: 'Baixar currículo em PDF',
    presentLabel: 'atual',
    fundingLabel: 'Fomento',
  },

  footer: {
    builtWith: 'Feito com React, TypeScript, Vite e Tailwind CSS.',
    sourceLink: 'Código deste site',
    rights: 'Thiago Henrique Silva de Almeida',
  },
}

/** O dicionário português é o contrato: qualquer outro idioma precisa ter a mesma forma. */
export type Dict = typeof pt
