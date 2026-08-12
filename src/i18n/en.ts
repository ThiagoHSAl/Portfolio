import type { Dict } from './pt'

export const en: Dict = {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    research: 'Research',
    resume: 'Résumé',
  },

  ui: {
    skipToContent: 'Skip to content',
    openMenu: 'Menu',
    closeMenu: 'Close',
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
    languageLabel: 'Language',
    switchToEnglish: 'Mudar para português',
    stack: 'Stack',
    highlights: 'What it does',
    results: 'Measured results',
    live: 'Open the live app',
    repository: 'Repository',
    paper: 'Paper',
    pdf: 'PDF',
    backend: 'Backend',
    privateRepo: 'Source code not public',
    featured: 'Featured',
    readMore: 'Read the research details',
    allProjects: 'See all projects',
    externalLink: 'opens in a new tab',
  },

  home: {
    eyebrow: 'Perception and robotics · AI agents · Data and applications',
    titleLead: 'Systems that',
    titleAccent: 'see',
    titleTail: ', decide and explain.',
    lead: "I'm Thiago Almeida, a developer and Information Systems undergraduate at UFMG. I build end-to-end systems: computer-vision models that run embedded, AI agents with tools and memory, and web applications that turn raw data into decisions.",
    ctaPrimary: 'See projects',
    ctaSecondary: 'Read the published paper',
    photoAlt: 'Portrait of Thiago Henrique Silva de Almeida',
    facts: [
      { value: '3 live apps', label: 'Original projects you can open right now', href: '#/projetos' },
      { value: 'IEEE CROS 2026', label: 'Peer-reviewed paper, indexed', href: '#/pesquisa' },
      { value: 'VerLab · UFMG', label: 'Undergraduate research in robotics', href: 'https://verlab.dcc.ufmg.br/' },
      { value: '{anosBombeiro} years', label: 'In the Minas Gerais Fire Department', href: '#/curriculo' },
    ],
    focusEyebrow: 'What I work on',
    focusTitle: 'Three tracks, the same way of attacking a problem',
    focus: [
      {
        title: 'Perception and robotics',
        text: 'Computer vision on hardware that does not forgive: detectors for the aerial viewpoint, sliced high-resolution inference, and the integration of autopilot, companion computer, camera and radio. It is the track of my undergraduate research at VerLab, measured in the field and not only on a test set.',
        items: ['PyTorch', 'YOLOv11 / v12', 'SAHI', 'OpenCV', 'Unity', 'ROS 2', 'MAVLink', 'Pixhawk'],
      },
      {
        title: 'AI agents',
        text: 'The LLM as a system component, not a chat box: state graphs with tools, long-term per-user memory, semantic retrieval over a curated base, and self-critique of the answer format. It is what powers EloRise and BookAdvisor.',
        items: ['LangGraph', 'Gemini', 'RAG / embeddings', 'Tool-calling', 'Streamlit', 'Google GenAI SDK'],
      },
      {
        title: 'Data and applications',
        text: 'The delivery end: purpose-built APIs, data modeling, standardized metadata and visualization that makes a number comparable. It runs from the FastAPI benchmarks backend to the Datapólis choropleth map, and includes this portfolio.',
        items: ['FastAPI', 'Flask', 'PostgreSQL', 'SQLite', 'D3.js', 'React', 'TypeScript', 'JSON-LD'],
      },
    ],
    projectsEyebrow: 'Projects',
    projectsTitle: 'Four projects, four different problems',
    projectsLead: 'Three of them are live right now and you can open them without installing anything. The fourth is the research, with its field results in the open.',
    contactEyebrow: 'Contact',
    contactTitle: 'Open to job opportunities, research and collaboration',
    contactText:
      'My interest is software development broadly: back-end and APIs, computer vision and machine learning, AI agents, data and visualization, front-end, robotics and embedded systems. If any of this overlaps with what you do, get in touch.',
  },

  about: {
    eyebrow: 'About me',
    title: 'Developer and researcher who came to code through mechatronics',
    photoAlt: 'Portrait of Thiago Henrique Silva de Almeida',
    factsTitle: 'At a glance',
    facts: [
      { label: 'Based in', value: 'Belo Horizonte, MG · Brazil' },
      { label: 'Education', value: 'Information Systems, UFMG' },
      { label: 'Research', value: 'VerLab (Computer Vision and Robotics), DCC/UFMG' },
      { label: 'Focus', value: 'Visual perception, AI agents, data and applications' },
      { label: 'Also', value: 'Military firefighter (CBMMG) since 2017' },
      { label: 'Languages', value: 'Portuguese (native) · English (technical)' },
    ],
    sections: [
      {
        title: 'Who I am',
        paragraphs: [
          'My name is Thiago Henrique Silva de Almeida. I hold a technical degree in Mechatronics from CEFET-MG and I am an Information Systems undergraduate at UFMG, where I do research at **VerLab**, the computer vision and robotics laboratory of the Computer Science Department.',
          'Electronics, instrumentation and automation came before any line of code. That left a mark on how I program. I think first about the real constraint and about what will be measured, and only then about the abstraction.',
        ],
      },
      {
        title: 'What I build',
        paragraphs: [
          'I work on three tracks, and none of them is a hobby version of another. What repeats is not the technology, it is the method: understand the real constraint before picking the tool.',
          'In **research**, at VerLab, I develop UAV-based person detection and geolocation for search and rescue. A low-cost quadrotor cannot carry a GPU, so inference leaves the aircraft and moves to a ground station over Wi-Fi HaLow. The work produced a paper published on IEEE Xplore, with validation in autonomous flight.',
          'In **AI agents**, EloRise is the most complete project I have written: a Socratic tutor for League of Legends with a LangGraph agent, long-term per-player memory, RAG over a curated tactical base, multi-user login, and a purpose-built FastAPI benchmarks backend fed by the Riot API. BookAdvisor attacks a different problem, discoverability, using the LLM as a translator between the reader’s language and the technical vocabulary of catalogs, with Schema.org and JSON-LD output.',
          'In **data and web**, Datapólis brings public indicators for every Brazilian municipality into a comparable score, with a D3.js map, side-by-side comparison and a Dublin Core metadata API. This portfolio is mine too: React, TypeScript and Tailwind, with a hand-rolled router.',
        ],
      },
      {
        title: 'How I work',
        paragraphs: [
          '**Measure before claiming.** Every number in this portfolio came out of an experiment with a described methodology, including the ones that do not flatter my thesis.',
          '**Constraints are information.** Having no GPU on board is not an obstacle to brute-force around; it is what defines the architecture. The best decisions in my projects came from taking the limitations seriously.',
          '**The field is the judge.** A test-set metric is a hypothesis. Only real flight, uneven terrain and a degrading radio link tell you whether it works.',
        ],
      },
      {
        title: 'Outside the code',
        paragraphs: [
          'I train **competitive programming in C++** with the ICPC in mind. It is my exercise in algorithms and data structures under time pressure, and a healthy counterweight to the pace of research.',
          'I remain interested in everything that flies and everything that measures: photogrammetry, radiometric thermography, sensor calibration. A good part of that ended up becoming research.',
        ],
      },
    ],
  },

  projects: {
    eyebrow: 'Projects',
    title: 'What I built, and why',
    lead: 'Four original projects, from the robotics lab to a public-data application. Each one solves a concrete problem and reports what was actually measured.',
    othersTitle: 'Other work',
    othersLead: 'Study, coursework and training repositories. Not products, but a fair picture of what I have been working on.',
  },

  research: {
    eyebrow: 'Research',
    title: 'Publications',
    lead: 'Undergraduate research at VerLab (DCC/UFMG), supported by CAPES, CNPq and FAPEMIG.',
    authorsLabel: 'Authors',
    venueLabel: 'Published in',
    doiLabel: 'DOI',
    abstractLabel: 'Abstract',
    abstractOriginal: 'Original abstract (English)',
    keywordsLabel: 'Keywords',
    contributionsLabel: 'Contributions',
    architectureLabel: 'How the system works',
    resultsLabel: 'Results',
    modelTableTitle: 'YOLO architectures evaluated on the real-world test set',
    modelTableNote:
      'All variants went through the same two-stage sim-to-real protocol. YOLOv12s was selected as the deployment model for its attention-centric architecture, which generalizes better in cluttered and occluded scenes.',
    fieldLabel: 'Field validation',
    fieldNote:
      'Three autonomous grid-search flights at 10 m AGL and 1 m/s over a human target whose position was known to the ground team but never given to the perception pipeline. Error is the Haversine distance to the reference coordinate.',
    linkLabel: 'Wi-Fi HaLow link characterization',
    linkNote:
      'Trial in a semi-urban environment with vegetation and buildings. Throughput drops below 1 Mbps past ~270 m, but latency stays under 130 ms out to 743 m. So video has a limited range; command and telemetry do not.',
    linkImageAlt: 'Chart of bandwidth in Mbps and average latency in ms against distance in meters',
    ackLabel: 'Acknowledgments',
    table: {
      model: 'Model',
      precision: 'Precision',
      recall: 'Recall',
      map50: 'mAP@50',
      map5095: 'mAP@50-95',
    },
    fieldTable: {
      flight: 'Flight',
      error: 'Average geolocation error',
    },
  },

  resume: {
    eyebrow: 'Résumé',
    title: 'Trajectory',
    lead: 'From emergency response to aerial robotics research. A mechatronics technical degree, an information systems bachelor in progress, and peer-reviewed output.',
    researchTitle: 'Research',
    publicationsTitle: 'Publications',
    experienceTitle: 'Professional experience',
    educationTitle: 'Education',
    skillsTitle: 'Technical skills',
    extrasTitle: 'Additional activities',
    downloadPdf: 'Download résumé as PDF',
    presentLabel: 'present',
    fundingLabel: 'Funding',
  },

  footer: {
    builtWith: 'Built with React, TypeScript, Vite and Tailwind CSS.',
    sourceLink: "This site's source",
    rights: 'Thiago Henrique Silva de Almeida',
  },
}
