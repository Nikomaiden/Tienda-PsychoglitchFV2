import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { HomePage } from './pages/Home.jsx'
import Login from './components/Login.jsx'
import { NotFoundPage } from './pages/404.jsx'
import Catalogo from './pages/Catalogo.jsx'

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalogo" element={<Catalogo />} />
        {/* Agrega más rutas aquí */}
        <Route path="/juegos" element={<div>Página de Juegos</div>} />
        <Route path="/consolas" element={<div>Página de Consolas</div>} />
        <Route path="/tecnologia" element={<div>Página de Tecnología</div>} />
        <Route path="/ofertas" element={<div>Página de Ofertas</div>} />
        <Route path="/carrito" element={<div>Carrito</div>} />
        <Route path="/favoritos" element={<div>Favoritos</div>} />
        {/* Ruta 404 - debe ir al final */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App