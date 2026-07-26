import { Check, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Circle } from 'lucide-react'
import type { ExerciseGroup } from '../data/types'
import type { AnswerMap } from '../lib/storage'
import { JaText } from '../lib/JaText'
import { countCompletedExercises, isExerciseCompleted } from '../lib/exerciseSession'
import { QuestionCard } from './QuestionCard'
import { StudyHelp } from './StudyHelp'

interface ExerciseGroupViewProps {
  group: ExerciseGroup
  furigana: boolean
  answers: AnswerMap
  expanded: boolean
  activeQuestionId?: string
  hasPrevious: boolean
  hasNext: boolean
  onToggle: () => void
  onQuestionChange: (questionId: string) => void
  onPrevious: () => void
  onNext: () => void
  onFinish: () => void
}

export function ExerciseGroupView({
  group,
  furigana,
  answers,
  expanded,
  activeQuestionId,
  hasPrevious,
  hasNext,
  onToggle,
  onQuestionChange,
  onPrevious,
  onNext,
  onFinish,
}: ExerciseGroupViewProps) {
  const completed = countCompletedExercises(group, answers)
  const activeIndex = group.questions.findIndex((question) => question.id === activeQuestionId)
  const activeQuestion = activeIndex >= 0 ? group.questions[activeIndex] : undefined
  const panelId = `${group.id}-exercise-panel`

  return (
    <section className={`exercise-group card${expanded ? ' is-expanded' : ''}`}>
      <button
        className="exercise-group-toggle"
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="exercise-group-title">
          <span className="ja">{group.title}</span>
          <span>{group.subtitlePt}</span>
        </span>
        <span className="exercise-group-progress">
          <span>{completed}/{group.questions.length} concluídos</span>
          <ChevronDown className="exercise-group-chevron" size={19} aria-hidden="true" />
        </span>
      </button>

      {expanded && (
        <div id={panelId} className="exercise-group-body">
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
                {group.example.choices.map((choice) => (
                  <span
                    key={choice.n}
                    className="ja"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                      opacity: choice.n === group.example!.answer ? 1 : 0.6,
                    }}
                  >
                    {choice.n === group.example!.answer
                      ? <CheckCircle2 size={14} color="var(--green)" />
                      : <Circle size={14} />}{' '}
                    {choice.n}. <JaText text={choice.text} furigana={furigana} />
                  </span>
                ))}
              </div>
              {group.example.note && (
                <div className="muted" style={{ fontSize: 13, marginTop: 6 }}>{group.example.note}</div>
              )}
              {group.example.helpPt && (
                <StudyHelp label="Outra forma de ver o exemplo">
                  <JaText text={group.example.helpPt} furigana={furigana} />
                </StudyHelp>
              )}
            </div>
          )}

          {activeQuestion ? (
            <>
              <div className="exercise-question-nav" aria-label="Navegação dos exercícios">
                <button
                  className="btn small exercise-nav-button"
                  type="button"
                  onClick={onPrevious}
                  disabled={!hasPrevious}
                  aria-label="Exercício anterior"
                >
                  <ChevronLeft size={17} /> <span>Anterior</span>
                </button>

                <label className="exercise-question-picker">
                  <span>Exercício</span>
                  <select
                    value={activeQuestion.id}
                    onChange={(event) => onQuestionChange(event.target.value)}
                    aria-label={`Exercício atual do grupo ${group.subtitlePt}`}
                  >
                    {group.questions.map((question, index) => (
                      <option key={question.id} value={question.id}>
                        {index + 1} de {group.questions.length}
                        {isExerciseCompleted(answers[question.id]) ? ' — concluído' : ''}
                      </option>
                    ))}
                  </select>
                </label>

                <button
                  className="btn small exercise-nav-button"
                  type="button"
                  onClick={onNext}
                  disabled={!hasNext}
                  aria-label="Próximo exercício"
                >
                  <span>Próximo</span> <ChevronRight size={17} />
                </button>
              </div>

              <div className="exercise-render-status" role="status">
                <Check size={14} /> Somente este exercício está carregado. Os demais permanecem recolhidos.
              </div>

              <QuestionCard
                key={activeQuestion.id}
                q={activeQuestion}
                furigana={furigana}
                onFinish={onFinish}
                finishLabel={hasNext ? 'Próxima' : 'Fechar'}
              />
            </>
          ) : (
            <div className="exercise-group-complete" role="status">
              <CheckCircle2 size={19} />
              <div>
                <b>Exercício recolhido.</b>
                <span> Use o seletor do grupo ou o botão Retomar para abrir uma questão.</span>
              </div>
              {group.questions[0] && (
                <button className="btn small" type="button" onClick={() => onQuestionChange(group.questions[0].id)}>
                  Abrir primeiro exercício
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
