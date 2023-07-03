import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../../../shared/layouts'

const HomePage = lazy(() => import('../../../pages/HomePage/ui/HomePage'))
const PostsPage = lazy(() => import('../../../pages/PostsPage/ui/PostsPage'))
const PostPage = lazy(() => import('../../../pages/PostPage/ui/PostPage'))

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/posts',
        element: <PostsPage />,
      },
      {
        path: '/posts/:id',
        element: <PostPage />,
      },
    ],
  },
])

export default AppRouter
