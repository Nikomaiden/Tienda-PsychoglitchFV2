import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {lazy, Suspense} from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Whatsapp from './components/Whatsapp.jsx'
import Carrito from './components/Carrito.jsx'

const HomePage = lazy(() => import ('./pages/Home.jsx'))
const Login = lazy(() => import ('./components/Login.jsx'))
const Catalogo = lazy(() => import ('./pages/Catalogo.jsx'))
const NotFoundPage = lazy(() => import ('./pages/404.jsx'))
const Consolas = lazy(() => import ('./pages/Consolas.jsx'))
const Juegos = lazy(() => import ('./pages/juegos.jsx'))
const Tecnologia = lazy(() => import ('./pages/Tecnologia.jsx'))
const Ofertas = lazy(() => import ('./pages/Ofertas.jsx'))


function App() {
  return (
    <>
      <Header />
        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/juegos" element={<Juegos />} />
            <Route path="/consolas" element={<Consolas />} />
            <Route path="/tecnologia" element={<Tecnologia />} />
            <Route path="/ofertas" element={<Ofertas/>} />
            <Route path="/favoritos" element={<div>Favoritos</div>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          
      </Suspense>

      <Whatsapp /> 
      <Carrito/>
      <Footer />
  </>
  )
}

export default App