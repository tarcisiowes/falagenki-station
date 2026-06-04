import { NavLink, Outlet, Link } from 'react-router-dom'

export function Layout() {
  return (
    <>
      <header className="app-header">
        <div className="bar">
          <Link to="/" className="brand">
            <span className="logo">あ</span>
            <span>
              Nihongo BR
              <small>Japonês para brasileiros · JLPT</small>
            </span>
          </Link>
          <nav>
            <NavLink to="/" end>Início</NavLink>
            <NavLink to="/nivel/N5">N5</NavLink>
            <NavLink to="/nivel/N4">N4</NavLink>
            <NavLink to="/revisar">🔁 Revisar</NavLink>
            <NavLink to="/simulado">⏱ Simulado</NavLink>
            <NavLink to="/analise">📊 Análise</NavLink>
            <NavLink to="/criar">✍️ Criar</NavLink>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="app-footer">
        Nihongo BR · Material baseado nos exames oficiais de exemplo da JLPT (N5/N4). Conteúdo
        para estudo. Explicações em português do Brasil. Suas respostas ficam salvas apenas no seu
        navegador.
      </footer>
    </>
  )
}
