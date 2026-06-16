# ProjectJLPT — Contexto do Projeto (para IA)

> Documento de referência para qualquer IA que for trabalhar neste repositório.
> Resume o que o projeto é, como roda, como o conteúdo é estruturado e as
> convenções/armadilhas não óbvias. Última revisão: 2026-06-16.

---

## 1. O que é

Plataforma web de **estudo de japonês para falantes de português do Brasil**,
focada nos exames **JLPT N5 e N4** e na série de livros **Irodori** (いろどり,
Japan Foundation). Reúne questões com gabarito, explicações em pt-BR, notas de
estudo, player de áudio com transcrição/furigana, revisão espaçada (estilo Anki),
simulados cronometrados e análise de desempenho. **Não tem login nem backend** —
todo o progresso vive no `localStorage` do navegador, com export/import `.json`.

Nome interno do pacote: `falagenki-station`.

---

## 2. Stack & como rodar

- **React 18 + Vite 5 + TypeScript 5**, roteamento com `react-router-dom` v6.
- Ícones: `lucide-react`. Sem lib de estado (stores próprias) e sem CSS framework
  (CSS puro em `src/index.css`).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build
npm run preview
```

> No ambiente do dev (Windows), o build via `npx tsc -b` roda no **Bash**; no
> PowerShell o `tsc -b` costuma falhar. Sempre rode `npm run build` após mexer em conteúdo.

---

## 3. Layout do repositório

```
src/
  main.tsx, App.tsx        # bootstrap + definição de rotas (createBrowserRouter)
  index.css                # todo o estilo
  data/                    # CONTEÚDO de estudo (o coração do projeto)
  lib/                     # stores, persistência, SRS, render de texto JA
  components/              # UI reutilizável
  pages/                   # uma por rota
public/
  audio/{N5,N4,N5-2012,N4-2012,N5-mock,N4-mock,irodori/...}/*.mp3
  images/irodori/<level>/*.png
  favicon.svg
docs/
  jlpt-source/{N5,N4,N5-2012,N5-2018,N4-2012,N4-2018}/   # PDFs+MP3 oficiais (fonte)
  Irodori/                 # PDFs/áudio Irodori — GITIGNORED (arquivos grandes)
  PROJECT-CONTEXT.md       # este arquivo
```

`src/data/AGENTS.md` e `docs/Irodori/AGENTS.md` contêm regras específicas de edição
de conteúdo — **ler antes de mexer em dados**.

---

## 4. Modelo de dados (`src/data/types.ts`)

Hierarquia: **Course → Level → Section → (StudyNote[] | ExerciseGroup[] | AudioTrack[])**.

- `Course` — `jlpt` ou `irodori`; tem `titlePt`, `taglinePt`, `levels[]`.
- `Level` — `id`, `courseId`, `titlePt`, `descriptionPt`, `sections[]`.
- `Section` — `id` (`vocabulary`/`grammar`/`reading`/`listening` no JLPT, ou
  `lesson-N` no Irodori), `titleJa`, `titlePt`, `summaryPt`, `studyNotes[]`,
  `groups[]`, `audios?`.
- `ExerciseGroup` — bloco de questões (`もんだいN`), com `instructionJa/Pt`,
  `example?` e `questions[]`.
- `Question` — `id` (estável, prefixado por nível), `number`, `prompt` (japonês),
  `context?`, `image?`/`imageAlt?`, `choices[]` (`{n,text}`), `answer` (1..4),
  `translationPt?`, `explanationPt`.
- `AudioTrack` — `src` (mp3 em `/public`), `title`, `descriptionPt`, `script[]`.
- `ScriptItem`/`ScriptLine` — roteiro sincronizado do áudio (rótulo, `time?`,
  `setupJa/Pt`, falas `{speaker,ja,pt}`, `questionJa?`, `answer?`).

### Marcações no texto japonês (render em `src/lib/JaText.tsx`)
- `{漢字|かんじ}` → furigana (ruby).
- `[[alvo]]` → trecho destacado/sublinhado (como no exame).
- `（　）` → lacuna a preencher.

### Regra de idioma (ver `src/data/AGENTS.md`)
Tudo voltado ao aluno é **pt-BR**: `titlePt`, `summaryPt`, `instructionPt`,
`translationPt`, `explanationPt`, `descriptionPt`, `pt` dos scripts.
Metadados técnicos e identificadores ficam em inglês. O japonês oficial
(enunciados, diálogos) permanece fiel à fonte, só recebendo a marcação de furigana.

---

## 5. Inventário de conteúdo (`src/data/index.ts`)

Dois cursos. `levels[]` agrega tudo; `courses[]` agrupa por curso.

### Curso JLPT — 6 níveis, todos com 4 seções (vocabulary, grammar, reading, listening) + 4 faixas de áudio
| Level id    | arquivo        | tipo                         | nº questões (aprox.) |
|-------------|----------------|------------------------------|----------------------|
| `n5`        | `n5.ts`        | exame oficial (recente)      | ~67 |
| `n4`        | `n4.ts`        | exame oficial (recente)      | ~70 |
| `n5-2012`   | `n5-2012.ts`   | exame oficial 2012           | ~65 |
| `n4-2012`   | `n4-2012.ts`   | exame oficial 2012           | ~69 |
| `n5-mock`   | `n5-mock.ts`   | **simulado autoral**         | ~79 |
| `n4-mock`   | `n4-mock.ts`   | **simulado autoral**         | ~80 |

Áudio do 聴解: exames usam os MP3 oficiais; os **simulados autorais (mock) usam áudio TTS**
gerado (`public/audio/N5-mock`, `N4-mock`), com roteiro próprio.

### Curso Irodori — A1→B1
| Level id              | arquivo(s)                                          | estado                  | nº questões (aprox.) |
|-----------------------|-----------------------------------------------------|-------------------------|----------------------|
| `irodori-starter`     | `irodori-starter.ts` (+`-audio.ts`)                 | Starter/入門 A1, L0–L18 | ~365 |
| `irodori-elementary1` | `irodori-elementary1.ts` (+`-audio.ts`)             | Elementary 1/初級1 A2    | ~576 |
| `irodori-elementary2` | `irodori-elementary2.ts` (+`-audio.ts`)             | Elementary 2/初級2 A2    | ~507 |
| `irodori-pre-intermediate` | `irodori-pre-intermediate.ts` (+`-audio.ts`)   | Pré-intermediário/B1     | ~812 |
| `irodori-tips`        | `irodori-tips.ts`                                    | "Dicas para a Vida no Japão" | — |

Convenção de id Irodori: lição `lesson-N`; questões/áudios estáveis e prefixados
(`iro-e2-l1-1`, `iro-pi-01-01`). Imagens em `/images/irodori/<level>/...`,
áudio em `/audio/irodori/<level>/...`.

---

## 6. Persistência & stores (`src/lib/`)

- `createStore.ts` — fábrica `createPersistentStore` (estado + `localStorage` +
  `useSyncExternalStore`). Base das demais stores.
- `storage.ts` — respostas marcadas/anotações por questão (`AnswerMap`).
  Chave `nihongo-br:answers:v1`. **Backup `.json` versão 2** inclui `answers`,
  `srs`, `custom` e `exams`.
- `reviewStore.ts` + `srs.ts` — revisão espaçada (SM-2 simplificado, estilo Anki).
- `customStore.ts` — questões criadas pelo usuário (página `/criar`).
- `examStore.ts` — histórico de tentativas de simulado.
- `dataAccess.ts` — mescla conteúdo embutido + custom; lookup de level/section.
- `progress.ts` — cálculo de progresso a partir do `AnswerMap`.
- `JaText.tsx` — parser/render das marcações japonesas (furigana/destaque/lacuna).

---

## 7. Rotas (`src/App.tsx`) e páginas (`src/pages/`)

| Rota                              | Página            | Função |
|-----------------------------------|-------------------|--------|
| `/`                               | `Home`            | landing, lista de cursos/níveis |
| `/nivel/:levelId`                 | `LevelPage`       | seções de um nível |
| `/nivel/:levelId/:sectionId`      | `SectionPage`     | estudo: notas, grupos de questões, áudio |
| `/revisar/:course`                | `ReviewPage`      | sessão de revisão Anki (escopo por curso) |
| `/analise/:course`                | `StatsPage`       | desempenho/estatísticas (escopo por curso) |
| `/revisao-geral`, `/analise-geral`| `ComingSoon`      | placeholders (unificar JLPT+Irodori) |
| `/simulado`                       | `ExamSetupPage`   | escolher nível/seção do simulado |
| `/simulado/:levelId/:sectionId`   | `ExamRunnerPage`  | simulado cronometrado |
| `/criar`                          | `CreatePage`      | criar questões próprias |
| `/sobre`                          | `About`           | sobre o projeto |

Componentes principais: `Layout` (top bar com dropdowns JLPT/Irodori),
`QuestionCard`, `ExerciseGroupView`, `StudyNotes`, `AudioPlayer` (velocidade,
loop A–B), `ScriptViewer` (transcrição sincronizada), `BackupBar` (export/import).

---

## 8. Fonte do conteúdo & pipeline (não óbvio)

- **JLPT:** PDFs + MP3 oficiais em `docs/jlpt-source/{N5,N4,N5-2012,N4-2012,...}`.
  Por exame: `*V/G/R/L.pdf` (Vocabulary/Grammar/Reading/Listening), `*script.pdf`
  (roteiro do áudio), `*answer.pdf` (正答表/gabarito), `*sheet.pdf`, `*Q1–Q4.mp3`.
  **Conferir SEMPRE a resposta pelo `answer.pdf`.**
- **Transcrição de áudio:** decisão tomada = usar o **roteiro oficial sincronizado**
  (texto do `*script.pdf`) exibido junto ao player com furigana + tradução pt-BR.
  Gratuito, preciso, offline. Whisper (transformers.js) e Web Speech API foram
  descartados (reabrir Whisper só se um dia precisarem transcrever áudios novos).
- **Irodori:** `docs/Irodori` é **gitignored** (PDFs e áudio grandes). PDFs sem
  camada de texto japonês (CID sem ToUnicode) → fatiar com pdf-lib e **rasterizar
  PDF→PNG via `pdftoppm`** (poppler) para então ler a página. Localizar a página
  absoluta de cada lição pelo rodapé (ex.: `初級2 LX-N`).
- **Imagens das questões:** copiar para `public/images/irodori/<level>/` apenas as
  ilustrações efetivamente referenciadas por `Question.image`.

---

## 9. Armadilhas / regras de ouro

1. **Idioma:** texto do aluno em pt-BR; japonês oficial intacto; ids/código em inglês.
2. **Não editar `irodori-elementary2.ts`** a menos que a tarefa seja sobre Elementary 2 (ver `AGENTS.md`).
3. **Rodar `npm run build` após mexer em conteúdo** (TS valida os tipos do `types.ts`).
4. **Gabarito JLPT vem do `answer.pdf`** — nunca "adivinhar" resposta.
5. Ids de questão/áudio são **estáveis e prefixados por nível** — não renumerar à toa
   (quebra progresso salvo no `localStorage` do usuário).
6. Ao adicionar um nível novo: criar `src/data/<id>.ts`, importar e registrar em
   `src/data/index.ts` (`levels[]` **e** o `courses[]` certo).
```
