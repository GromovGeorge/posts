import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './providers/AppRouter/AppRouter'

// styles
import './styles/globals.scss'

createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <RouterProvider router={AppRouter} />
  </>
)
