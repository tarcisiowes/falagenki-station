# falagenki-station — 駅のfalaGENKI

Plataforma de estudo de japonês para falantes de **português do Brasil**, construída a partir
dos materiais oficiais de exemplo do exame **JLPT** (níveis N5 e N4). Sem login: todo o progresso
fica salvo no navegador, com backup exportável.

## Funcionalidades

- **Fluxos de estudo por área** — Vocabulário, Gramática, Leitura e Audição, seguindo a estrutura
  de cada parte do exame, com explicações em **português**.
- **Exercícios interativos** — questões fiéis ao exame (gabarito oficial), com:
  - alternativa marcável e **correção** com explicação em pt-BR;
  - **campo de anotação** por questão (sua tradução/justificativa), salvo automaticamente.
- **Áudios com player próprio** — play/pause, busca, **velocidade** (0,5×–1,5×), avançar/voltar 5s e
  **repetição de trecho A–B**.
- **Transcrição** — usa o **roteiro oficial** de cada áudio, exibido com **furigana** (leitura dos
  kanji) e **tradução em pt-BR**. Gratuito, exato e offline (sem APIs externas).
- **Persistência local + backup** — respostas salvas em `localStorage`; botões para **baixar** um
  arquivo `.json` de backup e **recarregá-lo** depois, sem perder nada.

## Como rodar

```bash
npm install
npm run dev      # http://localhost:5173
```

Build de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
public/audio/{N5,N4}/      # áudios oficiais (mp3) servidos pela aplicação
src/
  data/
    types.ts               # modelo de dados do conteúdo
    n5.ts, n4.ts           # conteúdo (questões, gabarito, explicações, scripts)
    index.ts               # registro dos níveis
  lib/
    storage.ts             # persistência (localStorage) + export/import de backup
    progress.ts            # cálculo de progresso
    JaText.tsx             # renderização de japonês: furigana {漢字|かんじ} e destaque [[…]]
  components/              # AudioPlayer, ScriptViewer, QuestionCard, etc.
  pages/                   # Home, LevelPage, SectionPage, About
```

### Marcação do texto japonês

Nos dados, o texto japonês aceita:

- `{漢字|かんじ}` → furigana (ruby);
- `[[alvo]]` → trecho destacado (a palavra sublinhada do exame);
- `（　）` → lacuna a preencher.

## Fonte do conteúdo

Textos, questões e áudios provêm dos materiais de exemplo do JLPT (Japan Foundation / JEES),
usados aqui em contexto de estudo. As explicações em português são autorais desta plataforma.
