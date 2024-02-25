import './App.css'
import { Routes, Route } from 'react-router-dom'
import PokedexPage from './pages/PokedexPage'
import HomePage from './pages/HomePage'
import PokeIdPage from './pages/PokeIdPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<PokedexPage />} />
          <Route path='/pokedex/:id' element={<PokeIdPage />} />
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
