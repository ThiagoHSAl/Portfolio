# Portfólio — Thiago Henrique Silva de Almeida

Portfólio pessoal bilíngue (PT/EN), com tema claro/escuro. Reúne a iniciação científica no
[VerLab](https://verlab.dcc.ufmg.br/) (DCC/UFMG), o artigo publicado no IEEE Xplore e os projetos
autorais.

**No ar:** https://thiagohsal.github.io/Portfolio/

## Stack

| Camada | Escolha |
| --- | --- |
| UI | React 19 + TypeScript (modo estrito) |
| Build | Vite 7 |
| Estilo | Tailwind CSS 4 (tokens de tema em `src/index.css`) |
| Rotas | Roteador por hash próprio (`src/router.ts`), ~40 linhas, sem dependência |
| Deploy | GitHub Actions → GitHub Pages |

Sem dependências de runtime além de `react` e `react-dom`: os ícones são SVG inline e a
animação de entrada é CSS com `IntersectionObserver`.

## Rodando localmente

Requer **Node 20.19+ ou 22+** (exigência do Vite 7).

```bash
npm install
npm run dev        # servidor de desenvolvimento em http://localhost:5173
```

Outros comandos:

```bash
npm run typecheck  # tsc --noEmit
npm run build      # typecheck + build de produção em dist/
npm run preview    # serve o dist/ já construído
```

## Estrutura

```
src/
├── main.tsx          entrypoint
├── App.tsx           casca: nav, rota ativa, título do documento, footer
├── router.ts         roteador por hash
├── index.css         tokens de cor, tema claro/escuro e classes de componente
├── i18n/             provedor de idioma + dicionários pt.ts / en.ts
├── data/             conteúdo tipado (perfil, projetos, publicações, currículo)
├── components/       Nav, Footer, ProjectCard, Reveal, ícones, primitivas de UI
└── pages/            Home, About, Projects, Research, Resume
```

### Onde editar o conteúdo

Todo o conteúdo é dado tipado — não há texto solto em JSX:

- **Textos de interface** (menus, rótulos, botões): `src/i18n/pt.ts` e `src/i18n/en.ts`.
  O dicionário português é o contrato; o inglês precisa ter exatamente a mesma forma, e o
  `tsc` reclama se faltar uma chave.
- **Projetos:** `src/data/projects.ts`. Campos bilíngues usam a forma `{ pt: '…', en: '…' }`.
- **Publicações:** `src/data/publications.ts` (inclui a tabela de resultados dos modelos).
- **Currículo:** `src/data/resume.ts`.
- **Perfil e contatos:** `src/data/profile.ts`.

Os textos aceitam `**negrito**` e `` `código` `` (ver `src/components/RichText.tsx`).

### Imagens

Arquivos em `public/img/` são referenciados por `asset('img/arquivo.jpg')`, que resolve o
prefixo de deploy. Para trocar uma capa de projeto, basta apontar o campo `cover.src`.

As capas do EloRise, BookAdvisor e Datapólis são capturas de tela dos apps no ar, recortadas em
16:10. Quando a interface de algum deles mudar, vale recapturar para o portfólio não mostrar uma
versão antiga.

A foto de perfil (`public/img/thiago.jpg`) é um recorte quadrado de `tools/foto-original.jpg`, que
fica versionada justamente para permitir reenquadrar depois sem precisar da foto de novo.

Para reenquadrar, abra **`tools/recortar.html`** no navegador: arraste a foto dentro do quadrado,
ajuste o tamanho pelas barras, confira nas miniaturas como fica em cada lugar do site e baixe. O
arquivo baixado substitui `public/img/thiago.jpg`. A ferramenta é uma página só, sem dependência —
se o navegador bloquear a leitura do arquivo local (`file://`), use o botão "Usar outra foto…" para
escolher a imagem à mão, ou sirva a pasta com `python3 -m http.server`.

### Tempo de serviço

O tempo no Corpo de Bombeiros aparece no texto como o marcador `{anosBombeiro}` e é calculado a
partir de `INICIO_BOMBEIROS` em `src/lib/tempo.ts` — não precisa ser editado a cada ano. Qualquer
string do dicionário ou do conteúdo aceita marcadores `{nome}`; a substituição acontece no
provedor de idioma (`src/i18n/index.tsx`).

### Cartão de compartilhamento (og:image)

A imagem que aparece na prévia de WhatsApp, LinkedIn e afins é `public/img/og.jpg`,
1200×630. Ela é gerada a partir de `tools/og-card.html` — o mesmo layout e as mesmas fontes
do site — renderizando a página num navegador em 1200×630 e salvando como JPEG. Para
regerar depois de trocar a foto ou o texto, abra `tools/og-card.html` no navegador com a
janela nessa medida e capture, ou renderize por linha de comando.

As prévias ficam em cache nas plataformas: o WhatsApp costuma segurar a imagem antiga por
horas. Para forçar, compartilhe a URL com um parâmetro qualquer no fim (`?v=2`).

## Deploy

O push na `main` dispara `.github/workflows/deploy.yml`, que roda o typecheck, o build e publica
o `dist/`. No repositório, é preciso deixar **Settings → Pages → Source** em **GitHub Actions**.

O `base` do Vite é `/Portfolio/` (subcaminho do GitHub Pages). Em domínio próprio, rode o build
com `VITE_BASE=/`.

## Licença

Código sob licença MIT. Textos, imagens e resultados de pesquisa são de autoria própria — o
artigo citado tem os direitos de publicação do IEEE.
