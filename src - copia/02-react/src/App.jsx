import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { HomePage } from './pages/Home.jsx'
import Login from './components/Login.jsx'
import { NotFoundPage } from './pages/404.jsx'
import Catalogo from './pages/Catalogo.jsx'
import Consolas from './pages/Consolas.jsx'
import Whatsapp from './components/Whatsapp.jsx'
import Juegos from './pages/juegos.jsx'

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalogo" element={<Catalogo />} />
        
        <Route path="/juegos" element={<Juegos />} />
        <Route path="/consolas" element={<Consolas />} />
        <Route path="/tecnologia" element={<div>Página de Tecnología</div>} />
        <Route path="/ofertas" element={<div>Página de Ofertas</div>} />
        <Route path="/carrito" element={<div>Carrito</div>} />
        <Route path="/favoritos" element={<div>Favoritos</div>} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Whatsapp />
      
      <Footer />
    </>
  )
}

export default App