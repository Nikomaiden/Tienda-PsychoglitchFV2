import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import {HomePage} from './pages/Home.jsx'
import Login from './components/Login.jsx'
import { NotFoundPage } from './pages/404.jsx'
import Catalogo from './pages/Catalogo.jsx'

function App() {
  const currentPath = window.location.pathname;

  let page = <NotFoundPage/>

  if (currentPath === '/') {
    page = <HomePage />
  }
  else if (currentPath === '/login.jsx') {
    page =<Login />
  }
  else if (currentPath === '/Catalogo.jsx') {
    page =<Catalogo />
  }
  return (
    <>
      <Header />

      {page}

      <Footer />
    </>
  )
}
export default App
