import { useRef, useState } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import {
  BarChart3, BookOpenText, ChevronDown, GraduationCap, Languages, Repeat, SquarePen, Timer,
} from 'lucide-react'
import { courses } from '../data'
import { SectionIcon } from './icons'

function levelTitleForMenu(title: string, levelId: string, courseId: string) {
  const withoutCourse = title.replace(/^(JLPT|Irodori)\s*[—-]\s*/, '').replace(/^JLPT\s*/, '')
  if (courseId === 'jlpt') {
    return `${levelId} — ${withoutCourse.replace(new RegExp(`^${levelId}\\s*[—-]\\s*`), '')}`
  }
  return withoutCourse
}

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
  const timer = useRef<number | undefined>(undefined)
  function enter() {
    if (timer.current) window.clearTimeout(timer.current)
    setOpen(true)
  }
  function leave() {
    // pequeno atraso: evita fechar ao cruzar o espaço entre o botão e o menu
    timer.current = window.setTimeout(() => setOpen(false), 180)
  }
  return (
    <div className="nav-dd" onMouseEnter={enter} onMouseLeave={leave}>
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
  const genki = courses.find((c) => c.id === 'genki')!

  return (
    <>
      <header className="app-header">
        <div className="bar">
          <Link to="/" className="brand">
            <span className="logo">あ</span>
            <span>
              falaGENKIの駅
              <small>Japonês para brasileiros</small>
            </span>
          </Link>
          <nav>
            <NavLink to="/" end>Início</NavLink>

            <Dropdown label="JLPT" icon={<GraduationCap size={15} />}>
              <span className="nav-dd-head">Níveis</span>
              {jlpt.levels.map((l) => (
                <NavLink key={l.id} to={`/nivel/${l.id}`} className="nav-dd-item">
                  {levelTitleForMenu(l.titlePt, l.id, l.courseId)}
                </NavLink>
              ))}
              <div className="nav-dd-sep" />
              <NavLink to="/simulado" className="nav-dd-item"><Timer size={15} /> Simulado</NavLink>
              <NavLink to="/criar" className="nav-dd-item"><SquarePen size={15} /> Criar exercício</NavLink>
              <div className="nav-dd-sep" />
              <NavLink to="/revisar/jlpt" className="nav-dd-item"><Repeat size={15} /> Revisão JLPT</NavLink>
              <NavLink to="/analise/jlpt" className="nav-dd-item"><BarChart3 size={15} /> Análise JLPT</NavLink>
            </Dropdown>

            <Dropdown label="Genki" icon={<BookOpenText size={15} />}>
              <span className="nav-dd-head">Livros</span>
              {genki.levels.map((l) => (
                <NavLink key={l.id} to={`/nivel/${l.id}`} className="nav-dd-item">
                  <BookOpenText size={15} /> {levelTitleForMenu(l.titlePt, l.id, l.courseId)}
                </NavLink>
              ))}
              <div className="nav-dd-sep" />
              <NavLink to="/revisar/genki" className="nav-dd-item"><Repeat size={15} /> Revisão Genki</NavLink>
              <NavLink to="/analise/genki" className="nav-dd-item"><BarChart3 size={15} /> Análise Genki</NavLink>
            </Dropdown>

            <Dropdown label="Irodori" icon={<Languages size={15} />}>
              <span className="nav-dd-head">Níveis</span>
              {irodori.levels.map((l) => (
                <NavLink key={l.id} to={`/nivel/${l.id}`} className="nav-dd-item">
                  <SectionIcon id="reading" size={15} /> {levelTitleForMenu(l.titlePt, l.id, l.courseId)}
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
        falaGENKIの駅 · Material de estudo baseado em JLPT (N5/N4), Irodori e Genki. Conteúdo com
        explicações em português do Brasil. Suas
        respostas ficam salvas apenas no seu navegador.
      </footer>
    </>
  )
}
