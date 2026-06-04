import { CheckCircle2, Circle } from 'lucide-react'
import type { ExerciseGroup } from '../data/types'
import { JaText } from '../lib/JaText'
import { QuestionCard } from './QuestionCard'

export function ExerciseGroupView({ group, furigana }: { group: ExerciseGroup; furigana: boolean }) {
  return (
    <section>
      <div className="group-head">
        <h2 className="ja">{group.title}</h2>
        <span className="sub">{group.subtitlePt}</span>
      </div>

      <div className="instruction">
        <div className="ja"><JaText text={group.instructionJa} furigana={furigana} /></div>
        <div className="pt">{group.instructionPt}</div>
      </div>

      {group.example && (
        <div className="example">
          <span className="tag">EXEMPLO（れい）</span>
          <div className="ja" style={{ margin: '6px 0' }}>
            <JaText text={group.example.prompt} furigana={furigana} />
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            {group.example.choices.map((c) => (
              <span key={c.n} className="ja" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, opacity: c.n === group.example!.answer ? 1 : 0.6 }}>
                {c.n === group.example!.answer ? <CheckCircle2 size={14} color="var(--green)" /> : <Circle size={14} />} {c.n}. <JaText text={c.text} furigana={furigana} />
              </span>
            ))}
          </div>
          {group.example.note && <div className="muted" style={{ fontSize: 13, marginTop: 6 }}>{group.example.note}</div>}
        </div>
      )}

      {group.questions.map((q) => (
        <QuestionCard key={q.id} q={q} furigana={furigana} />
      ))}
    </section>
  )
}
