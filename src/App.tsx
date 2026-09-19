import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { MapPage } from './pages/MapPage'

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen">
        <header className="border-b border-neutral-800">
          <div className="mx-auto flex max-w-5xl items-center px-4 py-4">
            <Link to="/" className="text-lg font-bold tracking-tight text-neutral-50">
              cs-cheat-shit
            </Link>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mapa/:mapId" element={<MapPage />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
