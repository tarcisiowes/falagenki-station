import { useRef, useState } from 'react'
import {
  clearAll,
  downloadBackup,
  importAnswers,
  readBackupFile,
  useAnswers,
} from '../lib/storage'

export function BackupBar() {
  const answers = useAnswers()
  const fileRef = useRef<HTMLInputElement>(null)
  const [toast, setToast] = useState<string | null>(null)

  const count = Object.keys(answers).length

  function flash(msg: string) {
    setToast(msg)
    window.setTimeout(() => setToast(null), 2600)
  }

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      const backup = await readBackupFile(file)
      const n = Object.keys(backup.answers).length
      importAnswers(backup.answers, 'merge')
      flash(`Backup carregado: ${n} resposta(s) importada(s).`)
    } catch (err) {
      flash(`Erro ao ler o arquivo: ${(err as Error).message}`)
    } finally {
      e.target.value = ''
    }
  }

  return (
    <div className="card backup-bar">
      <div className="info">
        💾 <b>{count}</b> resposta(s) salva(s) neste navegador.
        <div className="muted" style={{ fontSize: 12 }}>
          Tudo fica salvo localmente (offline). Gere um backup para não perder ao trocar de dispositivo.
        </div>
      </div>
      <div className="spacer" />
      <button className="btn primary small" onClick={downloadBackup} disabled={count === 0}>
        ⬇ Baixar backup
      </button>
      <button className="btn small" onClick={() => fileRef.current?.click()}>
        ⬆ Carregar backup
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
          if (confirm('Apagar todas as respostas salvas neste navegador? (faça um backup antes)')) {
            clearAll()
            flash('Respostas apagadas.')
          }
        }}
        disabled={count === 0}
      >
        🗑 Limpar
      </button>

      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}
