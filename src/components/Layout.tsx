import { useState } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import {
  BarChart3, ChevronDown, GraduationCap, Languages, Repeat, SquarePen, Timer,
} from 'lucide-react'
import { courses } from '../data'
import { SectionIcon } from './icons'

function Dropdown({
  label,
  icon,
  children,
}: {
  label: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="nav-dd"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="nav-dd-btn" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        {icon} {label} <ChevronDown size={14} />
      </button>
      {open && (
        <div className="nav-dd-menu" onClick={() => setOpen(false)}>
          {children}
        </div>
      )}
    </div>
  )
}

export function Layout() {
  const jlpt = courses.find((c) => c.id === 'jlpt')!
  const irodori = courses.find((c) => c.id === 'irodori')!

  return (
    <>
      <header className="app-header">
        <div className="bar">
          <Link to="/" className="brand">
            <span className="logo">あ</span>
            <span>
              Nihongo BR
              <small>Japonês para brasileiros</small>
            </span>
          </Link>
          <nav>
            <NavLink to="/" end>Início</NavLink>

            <Dropdown label="JLPT" icon={<GraduationCap size={15} />}>
              <span className="nav-dd-head">Níveis</span>
              {jlpt.levels.map((l) => (
                <NavLink key={l.id} to={`/nivel/${l.id}`} className="nav-dd-item">
                  {l.id} — {l.titlePt.replace(/^JLPT\s*/, '')}
                </NavLink>
              ))}
              <div className="nav-dd-sep" />
              <NavLink to="/simulado" className="nav-dd-item"><Timer size={15} /> Simulado</NavLink>
              <NavLink to="/criar" className="nav-dd-item"><SquarePen size={15} /> Criar exercício</NavLink>
              <div className="nav-dd-sep" />
              <NavLink to="/revisar/jlpt" className="nav-dd-item"><Repeat size={15} /> Revisão JLPT</NavLink>
              <NavLink to="/analise/jlpt" className="nav-dd-item"><BarChart3 size={15} /> Análise JLPT</NavLink>
            </Dropdown>

            <Dropdown label="Irodori" icon={<Languages size={15} />}>
              <span className="nav-dd-head">Níveis</span>
              {irodori.levels.map((l) => (
                <NavLink key={l.id} to={`/nivel/${l.id}`} className="nav-dd-item">
                  <SectionIcon id="reading" size={15} /> {l.titlePt.replace(/^Irodori — /, '')}
                </NavLink>
              ))}
              <div className="nav-dd-sep" />
              <NavLink to="/revisar/irodori" className="nav-dd-item"><Repeat size={15} /> Revisão Irodori</NavLink>
              <NavLink to="/analise/irodori" className="nav-dd-item"><BarChart3 size={15} /> Análise Irodori</NavLink>
            </Dropdown>

            <NavLink to="/revisao-geral"><Repeat size={15} /> Revisão Geral</NavLink>
            <NavLink to="/analise-geral"><BarChart3 size={15} /> Análise Geral</NavLink>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="app-footer">
        Nihongo BR · Material baseado nos exames de exemplo da JLPT (N5/N4) e no curso Irodori da
        Japan Foundation. Conteúdo para estudo, com explicações em português do Brasil. Suas
        respostas ficam salvas apenas no seu navegador.
      </footer>
    </>
  )
}
