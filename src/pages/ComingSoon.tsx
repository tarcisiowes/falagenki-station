import { Link } from 'react-router-dom'
import { Construction } from 'lucide-react'

interface Props {
  title: string
  ja: string
  descriptionPt: string
  /** links para as versões por curso já disponíveis */
  links: { to: string; label: string }[]
}

export function ComingSoon({ title, ja, descriptionPt, links }: Props) {
  return (
    <div>
      <div className="crumbs">
        <Link to="/">Início</Link> / <span>{title}</span>
      </div>

      <div className="hero" style={{ padding: '28px 32px' }}>
        <div className="ja-big ja">{ja}</div>
        <h1 style={{ margin: '6px 0' }}>{title}</h1>
        <p>{descriptionPt}</p>
      </div>

      <div className="card" style={{ padding: 36, textAlign: 'center' }}>
        <Construction size={40} color="var(--amber)" />
        <h2 style={{ marginTop: 10 }}>Em construção</h2>
        <p className="muted" style={{ maxWidth: '60ch', margin: '0 auto 16px' }}>
          A versão unificada (todos os cursos juntos) ainda será desenvolvida. Por enquanto, use as
          versões individuais de cada curso:
        </p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="btn primary">{l.label}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
