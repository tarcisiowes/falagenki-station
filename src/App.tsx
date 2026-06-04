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

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'nivel/:levelId', element: <LevelPage /> },
      { path: 'nivel/:levelId/:sectionId', element: <SectionPage /> },
      { path: 'revisar', element: <ReviewPage /> },
      { path: 'simulado', element: <ExamSetupPage /> },
      { path: 'simulado/:levelId/:sectionId', element: <ExamRunnerPage /> },
      { path: 'criar', element: <CreatePage /> },
      { path: 'analise', element: <StatsPage /> },
      { path: 'sobre', element: <About /> },
    ],
  },
])
