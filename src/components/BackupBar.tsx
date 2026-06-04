import { useRef, useState } from 'react'
import { Download, Save, Trash2, Upload } from 'lucide-react'
import {
  clearAll,
  downloadBackup,
  importBackup,
  readBackupFile,
  useAnswers,
} from '../lib/storage'
import { useCustom } from '../lib/customStore'
import { useSrs } from '../lib/reviewStore'
import { useExams } from '../lib/examStore'

export function BackupBar() {
  const answers = useAnswers()
  const custom = useCustom()
  const srs = useSrs()
  const exams = useExams()
  const fileRef = useRef<HTMLInputElement>(null)
  const [toast, setToast] = useState<string | null>(null)

  const count = Object.keys(answers).length

  function flash(msg: string) {
    setToast(msg)
    window.setTimeout(() => setToast(null), 2800)
  }

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      const backup = await readBackupFile(file)
      importBackup(backup, 'merge')
      const n = Object.keys(backup.answers ?? {}).length
      flash(`Backup carregado: ${n} resposta(s), ${backup.custom?.length ?? 0} exercício(s) seu(s).`)
    } catch (err) {
      flash(`Erro ao ler o arquivo: ${(err as Error).message}`)
    } finally {
      e.target.value = ''
    }
  }

  const anything =
    count > 0 || custom.length > 0 || Object.keys(srs).length > 0 || exams.length > 0

  return (
    <div className="card backup-bar">
      <div className="info">
        <Save size={15} /> <b>{count}</b> resposta(s) · <b>{custom.length}</b> exercício(s) seu(s) ·{' '}
        <b>{Object.keys(srs).length}</b> carta(s) de revisão · <b>{exams.length}</b> simulado(s).
        <div className="muted" style={{ fontSize: 12 }}>
          Tudo fica salvo localmente (offline). O backup inclui respostas, revisão, exercícios
          criados e histórico de simulados.
        </div>
      </div>
      <div className="spacer" />
      <button className="btn primary small" onClick={downloadBackup} disabled={!anything}>
        <Download size={15} /> Baixar backup
      </button>
      <button className="btn small" onClick={() => fileRef.current?.click()}>
        <Upload size={15} /> Carregar backup
      </button>
      <input
        ref={fileRef}
        type="file"
        accept="application/json,.json"
        style={{ display: 'none' }}
        onChange={onFile}
      />
      <button
        className="btn small ghost"
        onClick={() => {
          if (confirm('Apagar todas as RESPOSTAS salvas? (revisão, exercícios e simulados são mantidos. Faça um backup antes.)')) {
            clearAll()
            flash('Respostas apagadas.')
          }
        }}
        disabled={count === 0}
      >
        <Trash2 size={15} /> Limpar respostas
      </button>

      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}
