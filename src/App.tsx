import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { LevelPage } from './pages/LevelPage'
import { SectionPage } from './pages/SectionPage'
import { About } from './pages/About'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'nivel/:levelId', element: <LevelPage /> },
      { path: 'nivel/:levelId/:sectionId', element: <SectionPage /> },
      { path: 'sobre', element: <About /> },
    ],
  },
])
