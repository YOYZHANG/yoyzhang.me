import { Suspense } from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <NavBar/>
      <main className='px-7 py-10'>
        <Outlet />
        <Footer />
      </main>
    </Suspense>
  )
}

export default App
