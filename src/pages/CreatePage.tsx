import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { levels } from '../data'
import type { LevelId, SectionId } from '../data/types'
import { JaText } from '../lib/JaText'
import { addCustom, deleteCustom, updateCustom, useCustom } from '../lib/customStore'

const SECTIONS: { id: SectionId; label: string }[] = [
  { id: 'vocabulary', label: 'Vocabulário' },
  { id: 'grammar', label: 'Gramática' },
  { id: 'reading', label: 'Leitura' },
  { id: 'listening', label: 'Audição' },
]

const EMPTY = ['', '', '', '']

export function CreatePage() {
  const [params] = useSearchParams()
  const custom = useCustom()

  const [levelId, setLevelId] = useState<LevelId>((params.get('level') as LevelId) || 'N5')
  const [sectionId, setSectionId] = useState<SectionId>((params.get('section') as SectionId) || 'vocabulary')
  const [prompt, setPrompt] = useState('')
  const [context, setContext] = useState('')
  const [choices, setChoices] = useState<string[]>([...EMPTY])
  const [answer, setAnswer] = useState(1)
  const [translationPt, setTranslationPt] = useState('')
  const [explanationPt, setExplanationPt] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [error, setError] = useState('')

  function reset() {
    setPrompt(''); setContext(''); setChoices([...EMPTY]); setAnswer(1)
    setTranslationPt(''); setExplanationPt(''); setEditingId(null); setError('')
  }

  function submit() {
    const kept = choices.map((t) => t.trim())
    const nonBlank = kept.filter((t) => t !== '')
    if (!prompt.trim()) return setError('Escreva o enunciado.')
    if (nonBlank.length < 2) return setError('Inclua pelo menos 2 alternativas.')
    if (!kept[answer - 1]) return setError('A alternativa correta está em branco.')
    if (!explanationPt.trim()) return setError('Escreva a explicação (pt-BR).')

    // renumera mantendo apenas as alternativas preenchidas
    const finalChoices = kept
      .map((text, i) => ({ text, origin: i + 1 }))
      .filter((c) => c.text !== '')
      .map((c, i) => ({ n: i + 1, text: c.text, origin: c.origin }))
    const finalAnswer = finalChoices.find((c) => c.origin === answer)!.n

    const payload = {
      levelId, sectionId,
      prompt: prompt.trim(),
      context: context.trim() || undefined,
      choices: finalChoices.map(({ n, text }) => ({ n, text })),
      answer: finalAnswer,
      translationPt: translationPt.trim() || undefined,
      explanationPt: explanationPt.trim(),
    }

    if (editingId) updateCustom(editingId, payload)
    else addCustom(payload)
    reset()
  }

  function edit(id: string) {
    const c = custom.find((x) => x.id === id)
    if (!c) return
    setEditingId(id)
    setLevelId(c.levelId); setSectionId(c.sectionId)
    setPrompt(c.prompt); setContext(c.context ?? '')
    const arr = [...EMPTY]
    c.choices.forEach((ch, i) => (arr[i] = ch.text))
    setChoices(arr); setAnswer(c.answer)
    setTranslationPt(c.translationPt ?? ''); setExplanationPt(c.explanationPt)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <div className="crumbs">
        <Link to="/">Início</Link> / <span>Criar exercícios</span>
      </div>

      <div className="hero" style={{ padding: '24px 28px' }}>
        <div className="ja-big ja">✍️ 問題を作る — Criar exercícios</div>
        <h1 style={{ margin: '4px 0' }}>Adicione seus próprios exercícios de N5 e N4</h1>
        <p>
          As questões que você criar entram nos <b>Exercícios</b> da seção, na <b>Revisão</b> (Anki)
          e nos <b>Simulados</b>, e são incluídas no <b>backup</b>. Tudo salvo no seu navegador.
        </p>
      </div>

      <div className="card study" style={{ padding: 22 }}>
        <h2>{editingId ? 'Editar exercício' : 'Novo exercício'}</h2>

        <div className="grid cols-2" style={{ gap: 12 }}>
          <label className="field">
            <span>Nível</span>
            <select value={levelId} onChange={(e) => setLevelId(e.target.value as LevelId)}>
              {levels.map((l) => <option key={l.id} value={l.id}>{l.id} — {l.titlePt}</option>)}
            </select>
          </label>
          <label className="field">
            <span>Área</span>
            <select value={sectionId} onChange={(e) => setSectionId(e.target.value as SectionId)}>
              {SECTIONS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
            </select>
          </label>
        </div>

        <label className="field">
          <span>Enunciado (japonês)</span>
          <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="ex.: あしたは [[雨]]ですか。  ou  {私|わたし}は…（　）…" />
        </label>
        <p className="muted" style={{ fontSize: 12, marginTop: -6 }}>
          Marcações: <code className="inline-code">{'{漢字|かんじ}'}</code> = furigana ·
          <code className="inline-code">[[alvo]]</code> = destaque · <code className="inline-code">（　）</code> = lacuna.
        </p>

        <label className="field">
          <span>Contexto / passagem (opcional)</span>
          <textarea value={context} onChange={(e) => setContext(e.target.value)} placeholder="diálogo, situação ou texto de apoio" />
        </label>

        <div className="field">
          <span>Alternativas (marque a correta; deixe em branco as não usadas)</span>
          {choices.map((c, i) => (
            <div key={i} className="choice-edit">
              <input type="radio" name="answer" checked={answer === i + 1} onChange={() => setAnswer(i + 1)} />
              <span className="num">{i + 1}</span>
              <input
                type="text"
                value={c}
                onChange={(e) => setChoices((arr) => arr.map((x, j) => (j === i ? e.target.value : x)))}
                placeholder={`alternativa ${i + 1}`}
              />
            </div>
          ))}
        </div>

        <label className="field">
          <span>Tradução do enunciado (pt-BR, opcional)</span>
          <input type="text" value={translationPt} onChange={(e) => setTranslationPt(e.target.value)} />
        </label>
        <label className="field">
          <span>Explicação da resposta (pt-BR)</span>
          <textarea value={explanationPt} onChange={(e) => setExplanationPt(e.target.value)} placeholder="por que a alternativa correta é a certa" />
        </label>

        {error && <div className="feedback no" style={{ marginBottom: 10 }}>{error}</div>}

        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn primary" onClick={submit}>{editingId ? 'Salvar alterações' : '＋ Adicionar exercício'}</button>
          {editingId && <button className="btn" onClick={reset}>Cancelar edição</button>}
        </div>
      </div>

      <h2 style={{ margin: '24px 0 12px' }}>Seus exercícios ({custom.length})</h2>
      {custom.length === 0 && <p className="muted">Você ainda não criou nenhum exercício.</p>}
      <div className="grid" style={{ gap: 12 }}>
        {custom.map((c) => (
          <div key={c.id} className="card" style={{ padding: '14px 18px' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
              <span className="badge">{c.levelId}</span>
              <span className="badge gray">{SECTIONS.find((s) => s.id === c.sectionId)?.label}</span>
              <div className="spacer" style={{ flex: 1 }} />
              <button className="btn small" onClick={() => edit(c.id)}>✎ Editar</button>
              <button className="btn small ghost" onClick={() => { if (confirm('Excluir este exercício?')) deleteCustom(c.id) }}>🗑 Excluir</button>
            </div>
            <div className="ja" style={{ marginTop: 8 }}><JaText text={c.prompt} /></div>
            <div className="muted" style={{ fontSize: 13, marginTop: 4 }}>
              Correta: {c.answer} — {c.choices.find((ch) => ch.n === c.answer)?.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
