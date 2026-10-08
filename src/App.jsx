import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Contato from './pages/Contato'
import Home from './pages/Home'
import Sobre from './pages/Sobre'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
