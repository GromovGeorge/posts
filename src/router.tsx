import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout'
import { PostPage } from './pages/PostPage'
import { HomePage } from './pages/HomePage'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/posts/:id', element: <PostPage /> },
    ],
  },
])
