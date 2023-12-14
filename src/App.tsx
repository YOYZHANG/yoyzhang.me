import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import {Suspense} from 'react'

function App() {
  return (
    <Suspense fallback="loading...">
      <NavBar/>
      <main className='px-7 py-10 w-prose line-height-8 m-auto'>
        <Outlet />
        <Footer />
      </main>
    </Suspense>
  )
}

export default App
