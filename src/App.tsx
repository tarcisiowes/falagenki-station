import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { LevelPage } from './pages/LevelPage'
import { SectionPage } from './pages/SectionPage'
import { About } from './pages/About'
import { ReviewPage } from './pages/ReviewPage'
import { ExamSetupPage } from './pages/ExamSetupPage'
import { ExamRunnerPage } from './pages/ExamRunnerPage'
import { CreatePage } from './pages/CreatePage'
import { StatsPage } from './pages/StatsPage'
import { ComingSoon } from './pages/ComingSoon'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'nivel/:levelId', element: <LevelPage /> },
      { path: 'nivel/:levelId/:sectionId', element: <SectionPage /> },
      { path: 'revisar/:course', element: <ReviewPage /> },
      { path: 'analise/:course', element: <StatsPage /> },
      {
        path: 'revisao-geral',
        element: (
          <ComingSoon
            title="Revisão Geral"
            ja="総復習 — Revisão Geral"
            descriptionPt="Uma sessão única reunindo todas as revisões disponíveis (JLPT + Irodori) num só lugar."
            links={[
              { to: '/revisar/jlpt', label: 'Revisar JLPT' },
              { to: '/revisar/irodori', label: 'Revisar Irodori' },
            ]}
          />
        ),
      },
      {
        path: 'analise-geral',
        element: (
          <ComingSoon
            title="Análise Geral"
            ja="総合分析 — Análise Geral"
            descriptionPt="Visão unificada de todo o seu estudo no site (JLPT + Irodori): progresso, acertos, tempos e médias."
            links={[
              { to: '/analise/jlpt', label: 'Análise JLPT' },
              { to: '/analise/irodori', label: 'Análise Irodori' },
            ]}
          />
        ),
      },
      { path: 'simulado', element: <ExamSetupPage /> },
      { path: 'simulado/:levelId/:sectionId', element: <ExamRunnerPage /> },
      { path: 'criar', element: <CreatePage /> },
      { path: 'sobre', element: <About /> },
    ],
  },
])
