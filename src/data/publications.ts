import type { Localized, LocalizedList } from '../i18n'

export type ModelResult = {
  model: string
  precision: number
  recall: number
  map50: number
  map5095: number
  /** Variante escolhida para produção. */
  deployed?: boolean
}

export type Publication = {
  id: string
  title: string
  authors: string[]
  /** Índice do autor a destacar na lista (o dono do portfólio). */
  selfIndex: number
  venue: string
  year: number
  doi: string
  ieeeUrl: string
  /** Caminho do PDF dentro de `public/`, resolvido com `asset()`. */
  pdfPath: string
  abstract: Localized
  abstractOriginal: string
  keywords: string[]
  contributions: LocalizedList
  pipeline: LocalizedList
  hardware: LocalizedList
  modelResults: ModelResult[]
  fieldResults: { flight: number; errorMeters: number }[]
  acknowledgment: Localized
}

export const publications: Publication[] = [
  {
    id: 'cros2026-halow',
    title: 'Wi-Fi HaLow–Enabled Offboard Person Detection for UAV Search and Rescue',
    authors: ['Thiago Almeida', 'Isaac Reyes', 'Paulo Rezeck', 'Hector Azpurua'],
    selfIndex: 0,
    venue: '2026 Brazilian Conference on Robotics (CROS)',
    year: 2026,
    doi: '10.1109/CROS69211.2026.11565682',
    ieeeUrl: 'https://ieeexplore.ieee.org/abstract/document/11565682',
    pdfPath: 'almeida-2026-cros-wifi-halow-uav-sar.pdf',

    abstract: {
      pt: 'A localização rápida de vítimas é crítica em operações de busca e salvamento, mas quadricópteros pequenos frequentemente não conseguem executar detectores de alta acurácia a bordo sem sacrificar tamanho, peso, consumo e autonomia de voo. Apresentamos um sistema de veículo aéreo não tripulado de baixo custo que realiza detecção e geolocalização de pessoas em tempo de operação, transferindo a inferência visual de um computador embarcado leve para uma estação em terra pelo padrão sem fio IEEE 802.11ah (Wi-Fi HaLow). Um Raspberry Pi Zero captura imagens aéreas de alta resolução e telemetria de voo, enquanto a estação em terra executa o modelo YOLOv12s e um pipeline fotogramétrico que estima as coordenadas geográficas do alvo a partir das detecções. Para mitigar a disponibilidade limitada de dados rotulados, empregamos uma estratégia de treino simulação-para-realidade em dois estágios, com imagens geradas por computador e ajuste fino híbrido sobre dados aéreos reais. Experimentos de campo caracterizam o desempenho do enlace e validam a operação de ponta a ponta: a conexão sustenta baixa latência para comando e controle a centenas de metros, suporta transmissão de vídeo até aproximadamente 270 metros em ambiente semiurbano e viabiliza missões autônomas de varredura que localizam um alvo humano com erro médio de 1,71 a 5,99 metros. Esses resultados mostram que o Wi-Fi HaLow habilita percepção offboard de longo alcance para busca e salvamento sem computação pesada embarcada.',
      en: 'Rapid victim localization is critical in search and rescue operations, yet small quadrotors often cannot run high-accuracy detectors onboard without sacrificing size, weight, power, and flight endurance. We present a low-cost unmanned aerial vehicle system that performs online people detection and geolocation by offloading vision inference from a lightweight onboard computer to a ground station over the IEEE 802.11ah wireless standard (Wi-Fi HaLow). A Raspberry Pi Zero captures high-resolution aerial images and flight telemetry, while the ground station runs the YOLOv12s model and a photogrammetric pipeline to estimate target geographical coordinates from detections. To mitigate the limited availability of labeled data, we use a two-stage simulation-to-reality training strategy with computer-generated imagery and hybrid fine-tuning on real aerial data. Field experiments characterize the wireless link performance and validate end-to-end operation: the connection sustains low latency for command and control at hundreds of meters, supports video transmission up to approximately 270 meters in a semi-urban setting, and enables autonomous grid-search missions that localize a human target with an average error of 1.71 to 5.99 meters. These results show that Wi-Fi HaLow enables practical long-range offboard perception for search and rescue without heavy onboard computation.',
    },
    abstractOriginal:
      'Rapid victim localization is critical in search and rescue operations, yet small quadrotors often cannot run high-accuracy detectors onboard without sacrificing size, weight, power, and flight endurance. We present a low-cost unmanned aerial vehicle system that performs online people detection and geolocation by offloading vision inference from a lightweight onboard computer to a ground station over the IEEE 802.11ah wireless standard (Wi-Fi HaLow). A Raspberry Pi Zero captures high-resolution aerial images and flight telemetry, while the ground station runs the YOLOv12s model and a photogrammetric pipeline to estimate target geographical coordinates from detections. To mitigate the limited availability of labeled data, we use a two-stage simulation-to-reality training strategy with computer-generated imagery and hybrid fine-tuning on real aerial data. Field experiments characterize the wireless link performance and validate end-to-end operation: the connection sustains low latency for command and control at hundreds of meters, supports video transmission up to approximately 270 meters in a semi-urban setting, and enables autonomous grid-search missions that localize a human target with an average error of 1.71 to 5.99 meters. These results show that Wi-Fi HaLow enables practical long-range offboard perception for search and rescue without heavy onboard computation.',

    keywords: ['Search-and-Rescue', 'UAV', 'Wi-Fi HaLow (IEEE 802.11ah)', 'YOLOv12', 'Sim-to-Real'],

    contributions: {
      pt: [
        'Plataforma distribuída de baixo custo para busca e salvamento: integração de um VANT com Raspberry Pi Zero a uma estação em terra com GPU, fazendo percepção offboard sobre um airframe leve por meio de um enlace IEEE 802.11ah (Wi-Fi HaLow).',
        'Adaptação aérea do YOLOv12: ajuste fino e avaliação do YOLOv12 para detecção de pessoas em vista aérea vertical.',
      ],
      en: [
        'Distributed low-cost SAR platform: integration of a Raspberry Pi Zero UAV with a GPU ground station for offboard perception on a lightweight airframe using an IEEE 802.11ah (Wi-Fi HaLow) link.',
        'Aerial YOLOv12 adaptation: fine-tuning and evaluation of YOLOv12 for top-down aerial person detection.',
      ],
    },

    pipeline: {
      pt: [
        'O Mission Planner executa a missão de waypoints, acompanha a telemetria MAVLink e emite os comandos de disparo de câmera.',
        'O Pixhawk repassa o disparo ao Raspberry Pi Zero, que fotografa e grava a posição GNSS e o yaw do instante da captura.',
        'A imagem é transferida à estação em terra pelo enlace IEEE 802.11ah, sobre TCP/IP.',
        'Em terra, o YOLOv12s roda com inferência fatiada (SAHI) e produz as caixas da classe person.',
        'A etapa fotogramétrica funde a detecção com a telemetria sincronizada e devolve a latitude e a longitude do alvo.',
      ],
      en: [
        'Mission Planner runs the waypoint mission, monitors the MAVLink telemetry and issues the camera-trigger commands.',
        'The Pixhawk forwards the trigger to the Raspberry Pi Zero, which shoots and records the GNSS position and yaw of the capture instant.',
        'The image is transferred to the ground station over the IEEE 802.11ah link, on top of TCP/IP.',
        'On the ground, YOLOv12s runs with sliced inference (SAHI) and produces the person-class boxes.',
        'The photogrammetric stage fuses the detection with the synchronized telemetry and returns the target latitude and longitude.',
      ],
    },

    hardware: {
      pt: [
        'Quadricóptero 3DR Iris+ com autopiloto Pixhawk 1',
        'Raspberry Pi Zero como companion computer',
        'Raspberry Pi Camera Rev 1.3 (f = 3,6 mm, sensor 3,67 × 2,74 mm, 2592 × 1944 px)',
        'Dongle Heltec Wi-Fi HaLow (IEEE 802.11ah, faixa de 902–928 MHz)',
        'Estação em terra com GPU rodando Mission Planner e o detector',
      ],
      en: [
        '3DR Iris+ quadrotor with a Pixhawk 1 autopilot',
        'Raspberry Pi Zero as the companion computer',
        'Raspberry Pi Camera Rev 1.3 (f = 3.6 mm, 3.67 × 2.74 mm sensor, 2592 × 1944 px)',
        'Heltec Wi-Fi HaLow dongle (IEEE 802.11ah in the 902–928 MHz band)',
        'GPU ground station running Mission Planner and the detector',
      ],
    },

    modelResults: [
      { model: 'YOLOv11n', precision: 1.0, recall: 0.926, map50: 0.963, map5095: 0.658 },
      { model: 'YOLOv11s', precision: 1.0, recall: 0.963, map50: 0.981, map5095: 0.634 },
      { model: 'YOLOv11m', precision: 0.96, recall: 0.889, map50: 0.94, map5095: 0.621 },
      { model: 'YOLOv11l', precision: 0.929, recall: 0.963, map50: 0.969, map5095: 0.649 },
      { model: 'YOLOv11x', precision: 0.915, recall: 0.796, map50: 0.872, map5095: 0.563 },
      { model: 'YOLOv12n', precision: 0.98, recall: 0.926, map50: 0.962, map5095: 0.639 },
      { model: 'YOLOv12s', precision: 0.963, recall: 0.963, map50: 0.975, map5095: 0.635, deployed: true },
      { model: 'YOLOv12m', precision: 0.981, recall: 0.944, map50: 0.971, map5095: 0.672 },
      { model: 'YOLOv12l', precision: 0.924, recall: 0.889, map50: 0.929, map5095: 0.652 },
      { model: 'YOLOv12x', precision: 0.883, recall: 0.84, map50: 0.885, map5095: 0.562 },
    ],

    fieldResults: [
      { flight: 1, errorMeters: 5.99 },
      { flight: 2, errorMeters: 2.53 },
      { flight: 3, errorMeters: 1.71 },
    ],

    acknowledgment: {
      pt: 'Trabalho apoiado pela Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES), pelo Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq) e pela Fundação de Amparo à Pesquisa de Minas Gerais (FAPEMIG).',
      en: 'This work was supported by CAPES (Coordenação de Aperfeiçoamento de Pessoal de Nível Superior), CNPq (Conselho Nacional de Desenvolvimento Científico e Tecnológico) and FAPEMIG (Fundação de Amparo à Pesquisa de Minas Gerais).',
    },
  },
]
