import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import App from './App.tsx'
import ErrorPage from './components/ErrorPage.tsx'
import routes from '~react-pages'
import 'uno.css'
import './styles/main.css'
import '@unocss/reset/tailwind.css'
import './styles/markdown.css'

console.log(routes, 'routes');

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <ErrorPage />,
  children: routes,
}])

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
