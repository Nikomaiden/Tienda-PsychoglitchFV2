import { useState } from 'react'
import './css/index.css'
import './css/sliders.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

function Main(){
  return(
    <main>
    <section className="hero-section">
      <img src="/2149829169.jpg" alt="Banner principal" width="200px" />
      <h1>Bienvenido a PSYCHOGLITCH</h1>
        <p>
          Tu universo de videojuegos, consolas de ultima generación y la mejor
          tecnología. Explora un mundo de entretenimiento digital
        </p>
        <button className="Explorar-todo">Explorar Todo</button>
        <button className="Ver-ofertas">Ver ofertas</button>
    </section>
  <section>
    <h2>Lo mas destacado</h2>
    <p>No te pierdas lo mejor de nuestra tienda...</p>
    <button className="Explorar-todo"> Ver más </button>
  </section>
  <section>
    <article>
      <img src="/switch.webp" alt="" width="200px" />
      <h4>Videojuego mas comprado</h4>
      <p>Sumergete en un mundo futurista lleno de accion y misterio</p>
      <button>Ver</button>
    </article>
    <article>
      <img src="/switch.webp" alt="" width="200px" />
      <h4>Consola PS5 slim</h4>
      <p>
        Experimenta la nueva generacion de videojuegos con potencial sin igual
      </p>
    </article>
    <article>
      <img src="/switch.webp" alt="" width="200px" />
      <h4>Mouse gamer</h4>
      <p>
        Experimenta la nueva generación de mouse gamer con potencial sin igual
      </p>
    </article>
    <article>
      <img src="/switch.webp" alt="" width="200px" />
      <h4>Auriculares Gamers</h4>
      <p>Sonido inmersivo para experiencia de juego superior.</p>
    </article>
  </section>
  <section>
    <h2>Ultimas consolas y Tecnología</h2>
    <p>
      Descubre el hardware más potente y los accesorios más innovadores para
      llevar tu experiencia de juego y entretenimiento al siguiente nivel.
    </p>
    <button className="Ver-tecnologia">Ver tecnología</button>
  </section>
  <section>
    <article>
      <img
        src="/Ps5-Slim-Digital-Bundle-Ratchet-PLAYSTATION-SIN-REF-3525674_b.webp"
        alt=""
        width="200px"
      />
      <h4>Consola portatil</h4>
    </article>
    <article>
      <img
        src="/Ps5-Slim-Digital-Bundle-Ratchet-PLAYSTATION-SIN-REF-3525674_b.webp"
        alt=""
        width="200px"
      />
      <h4>Teclado Mecanico RGB</h4>
    </article>
    <article>
      <img
        src="/Ps5-Slim-Digital-Bundle-Ratchet-PLAYSTATION-SIN-REF-3525674_b.webp"
        alt=""
        width="200px"
      />
      <h4>Mouse Logitech G203</h4>
    </article>
    <article>
      <img
        src="/Ps5-Slim-Digital-Bundle-Ratchet-PLAYSTATION-SIN-REF-3525674_b.webp"
        alt=""
        width="200px"
      />
      <h4>Kit realidad Virtual</h4>
    </article>
  </section>
  <section className="slider-marcas">
    <h2>Marcas favoritas</h2>
    <p>Conoce las marcas más populares entre nuestros clientes</p>
    <div className="slider-track">
      <div className="slide">
        <img src="/Marca (1).png" alt="marca 1" width="200px" />
      </div>
      <div className="slide">
        <img src="/Marca (2).png" alt="marca 2" width="200px" />
      </div>
      <div className="slide">
        <img src="/Marca (3).png" alt="marca 3" width="200px" />
      </div>
      <div className="slide">
        <img src="/Marca (4).png" alt="marca 4" width="200px" />
      </div>
      <div className="slide">
        <img src="/Marca (1).png" alt="marca 5" width="200px" />
      </div>
      <div className="slide">
        <img src="/Marca (2).png" alt="marca 6" width="200px" />
      </div>
      <div className="slide">
        <img src="/Marca (3).png" alt="marca 7" width="200px" />
      </div>
      <div className="slide">
        <img src="/Marca (4).png" alt="marca 8" width="200px" />
      </div>
      <div className="slide">
        <img src="/Marca (1).png" alt="marca 5" width="200px" />
      </div>
      <div className="slide">
        <img src="/Marca (2).png" alt="marca 6" width="200px" />
      </div>
      <div className="slide">
        <img src="/Marca (3).png" alt="marca 7" width="200px" />
      </div>
      <div className="slide">
        <img src="/Marca (4).png" alt="marca 8" width="200px" />
      </div>
    </div>
  </section>
  <section className="boton-whatsapp">
    <a
      href="https://wa.me/573184751835?text=¡Hola!%20Quisiera%20más%20información%20sobre%20sus%20productos."
      rel="noopener noreferrer"
      target="_blank"
      className="boton-flotante"
    >
      <img src="/Whatsapp.png" alt="Whatsapp" />
    </a>
  </section>
</main>
  )
}

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
export default App
