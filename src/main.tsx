import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './router'
import './shared/styles/globals.scss'
import { PostContextProvider } from './context/post'
import { ThemeContextProvider } from './context/theme'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <PostContextProvider>
        <RouterProvider router={Router} />
      </PostContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
)
