# Deploy — acessar o app no iOS fora de casa

> Como publicar o **falaGENKIの駅** (SPA estático Vite/React) para abrir no iPhone
> a qualquer hora, com acesso **privado**. Última revisão: 2026-06-19.

---

## Diagnóstico

App = SPA estático, zero backend, progresso em `localStorage`. Deploy = arquivos
estáticos. O peso é o que dita o host:

| Item             | Tamanho                          |
|------------------|----------------------------------|
| `public/audio`   | **1.1 GB** (Irodori 1003 MB, 1410 mp3) |
| `public/images`  | 83 MB                            |
| `.git`           | 1.2 GB (áudio no histórico)      |
| Repo GitHub      | `tarcisiowes/falagenki-station` (em sync) |

Duas armadilhas:

1. **`createBrowserRouter`** → deep-link (ex. `/nivel/n4`) dá 404 no refresh sem
   fallback SPA. Resolvido por `public/_redirects` (`/* /index.html 200`).
2. **1.2 GB** → host precisa de banda sem taxa e tolerar arquivo grande.
   Cloudflare Pages atende: banda ilimitada; limite 25 MB/arquivo OK (max = 13.6 MB);
   limite 20k arquivos OK (~2k). GitHub Pages cai fora (>1 GB). Vercel/Netlify
   funcionam mas têm teto de 100 GB/mês de banda — áudio pesado consome rápido.

**Decisão:** Cloudflare Pages, deploy via Wrangler (upload direto do `dist`, evita
Cloudflare clonar o repo de 1.2 GB), acesso **privado** via Cloudflare Access.

---

## Passos

### Pré-requisito (1x)
Conta Cloudflare grátis + ativar **Zero Trust** (plano free, 50 usuários).

### Passo 0 — fallback SPA (já feito)
`public/_redirects`:
```
/*    /index.html   200
```
Vite copia pro `dist` no build.

### Passo 1 — login Wrangler
```
npx wrangler login
```
(abre o browser p/ oauth)

### Passo 2 — criar o projeto Pages (1x)
```
npx wrangler pages project create falagenki-station --production-branch master
```
Se o projeto já existir, pule este passo.

### Passo 3 — build + deploy
```
npm run build
npx wrangler pages deploy dist --project-name falagenki-station
```
Primeiro upload ~1.2 GB (demora — só áudio). Retorna URL
`falagenki-station.pages.dev`. Deploys futuros: só repetir este passo; áudio
inalterado sobe rápido (Cloudflare deduplica).

### Passo 4 — gate privado (Cloudflare Access)
Dashboard → **Workers & Pages → falagenki-station → Settings → enable Access policy**
(production). Ou Zero Trust → Access → Applications → Add → Self-hosted:
- Domain: `falagenki-station.pages.dev`
- Policy: Allow → e-mails = `tarcisiowesley@gmail.com`
- Auth: **One-time PIN** (código por e-mail, sem senha)

Login: abre site → digita e-mail → recebe código → entra. Cookie persiste no Safari.

### Passo 5 — iPhone
Safari → abre URL → faz login Access → **Compartilhar → Adicionar à Tela de Início**.
Vira ícone tipo app.

### Passo 6 — progresso desktop → iPhone
`localStorage` é por-aparelho. `BackupBar` exporta `.json` no desktop →
AirDrop/e-mail → importa no iPhone.

---

## Notas

- Áudio = streaming online. iOS não cacheia 1 GB offline — app-shell offline sim,
  áudio não.
- Deploys futuros: só repetir Passo 3.

## Melhorias opcionais

- **PWA**: `manifest.webmanifest` + `apple-touch-icon` → ícone/splash decente,
  app-shell offline.
- **Sync automático de progresso** (substitui Passo 5): backend leve (Supabase/
  similar) ou gist. Hoje é export/import manual `.json`.
- **Áudio em R2** (só se Pages ficar lento): mover mp3 p/ Cloudflare R2 + env
  `VITE_AUDIO_BASE`, reescrever `AudioTrack.src`. Deploy cai pra ~100 MB.

## Alternativa — Tunnel de casa

Cloudflare Tunnel / Tailscale Funnel expõe `npm run preview` local. Zero upload,
instantâneo. Mas o PC de casa precisa ficar **ligado e acordado**. Bom paliativo,
não "sempre disponível".
