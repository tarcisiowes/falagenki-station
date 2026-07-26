import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './App'
import { ProgressSyncProvider } from './auth/ProgressSyncProvider'
import './index.css'
import './registerServiceWorker'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProgressSyncProvider>
      <RouterProvider router={router} />
    </ProgressSyncProvider>
  </React.StrictMode>,
)
