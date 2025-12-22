import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/juegos.css';

// Datos de juegos destacados
const juegosDestacados = [
  {
    id: 1,
    nombre: "God of War Ragnarök",
    categoria: "Acción/Aventura",
    plataforma: "PlayStation",
    precio: 259000,
    imagen: "/gow-ragnarok.webp",
    rating: 5,
    nuevo: true,
    descripcion: "Continúa la épica saga nórdica de Kratos y Atreus"
  },
  {
    id: 2,
    nombre: "Spider-Man 2",
    categoria: "Acción/Aventura",
    plataforma: "PlayStation",
    precio: 289000,
    imagen: "/spiderman2.webp",
    rating: 5,
    nuevo: true,
    descripcion: "Balancea por Nueva York con Peter Parker y Miles Morales"
  },
  {
    id: 3,
    nombre: "The Last of Us Part II",
    categoria: "Acción/Aventura",
    plataforma: "PlayStation",
    precio: 179000,
    precioOriginal: 229000,
    imagen: "/tlou2.webp",
    rating: 5,
    descuento: 22,
    descripcion: "Una historia intensa de supervivencia y venganza"
  },
  {
    id: 4,
    nombre: "Zelda: Tears of the Kingdom",
    categoria: "Aventura",
    plataforma: "Nintendo",
    precio: 259000,
    imagen: "/zelda-totk.webp",
    rating: 5,
    nuevo: true,
    descripcion: "Explora los cielos y profundidades de Hyrule"
  },
  {
    id: 5,
    nombre: "Starfield",
    categoria: "RPG",
    plataforma: "Xbox",
    precio: 299000,
    imagen: "/starfield.webp",
    rating: 4,
    nuevo: true,
    descripcion: "Explora el cosmos en la nueva IP de Bethesda"
  },
  {
    id: 6,
    nombre: "Hogwarts Legacy",
    categoria: "RPG",
    plataforma: "Multiplataforma",
    precio: 249000,
    imagen: "/hogwarts.webp",
    rating: 4,
    descripcion: "Vive tu aventura en el mundo mágico de Harry Potter"
  }
];

const generos = [
  { nombre: "Todos", icono: "🎮" },
  { nombre: "Acción", icono: "⚔️" },
  { nombre: "Aventura", icono: "🗺️" },
  { nombre: "RPG", icono: "🎭" },
  { nombre: "Deportes", icono: "⚽" },
  { nombre: "Carreras", icono: "🏎️" },
  { nombre: "Estrategia", icono: "🎯" },
  { nombre: "Terror", icono: "👻" }
];

export default function Juegos() {
  const [generoSeleccionado, setGeneroSeleccionado] = useState('Todos');

  useEffect(() => {
    document.title = "PSYCHOGLITCH - Juegos";
    window.scrollTo(0, 0);
  }, []);

  const formatPrice = (precio) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(precio);
  };

  return (
    <div className="juegos-page">
      {/* ================= HERO ================= */}
      <section className="juegos-hero">
        <div className="hero-background">
          <div className="hero-video-overlay"></div>
        </div>
        
        <div className="hero-content">
          <span className="hero-badge">Catálogo Gaming</span>
          <h1 className="hero-title">
            <span className="gradient-text">Los Mejores Juegos</span>
          </h1>
          <p className="hero-subtitle">
            Descubre los títulos más épicos, desde exclusivos legendarios hasta los últimos lanzamientos AAA
          </p>

          <div className="hero-features">
            <div className="feature-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>+500 Títulos</span>
            </div>
            <div className="feature-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>Exclusivos</span>
            </div>
            <div className="feature-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>Ofertas Diarias</span>
            </div>
          </div>

          <div className="hero-actions">
            <Link to="/catalogo?categoria=juegos" className="btn-hero-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              Ver Catálogo Completo
            </Link>
            <a href="#generos" className="btn-hero-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
              Explorar Géneros
            </a>
          </div>
        </div>
      </section>

      {/* ================= GÉNEROS ================= */}
      <section className="juegos-generos" id="generos">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Explora por Género</span>
          </h2>
          <p className="section-description">
            Encuentra tu próxima aventura según tu estilo de juego favorito
          </p>
        </div>

        <div className="generos-grid">
          {generos.map((genero, index) => (
            <button
              key={index}
              className={`genero-card ${generoSeleccionado === genero.nombre ? 'active' : ''}`}
              onClick={() => setGeneroSeleccionado(genero.nombre)}
            >
              <span className="genero-icon">{genero.icono}</span>
              <span className="genero-nombre">{genero.nombre}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ================= DESTACADOS ================= */}
      <section className="juegos-destacados">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Juegos Destacados</span>
          </h2>
          <p className="section-description">
            Los títulos más vendidos y mejor valorados del momento
          </p>
        </div>

        <div className="juegos-grid">
          {juegosDestacados.map((juego) => (
            <article key={juego.id} className="juego-card">
              {/* Badges */}
              <div className="juego-badges">
                {juego.nuevo && <span className="badge badge-new">Nuevo</span>}
                {juego.descuento && (
                  <span className="badge badge-discount">-{juego.descuento}%</span>
                )}
              </div>

              {/* Imagen */}
              <Link to={`/producto/${juego.id}`} className="juego-image-link">
                <div className="juego-image">
                  <img src={juego.imagen} alt={juego.nombre} />
                  <div className="juego-overlay">
                    <button className="play-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>

              {/* Contenido */}
              <div className="juego-content">
                <div className="juego-info">
                  <span className="juego-categoria">{juego.categoria}</span>
                  <span className="juego-plataforma">{juego.plataforma}</span>
                </div>

                <Link to={`/producto/${juego.id}`} className="juego-nombre">
                  {juego.nombre}
                </Link>

                <p className="juego-descripcion">{juego.descripcion}</p>

                {/* Rating */}
                <div className="juego-rating">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={i < juego.rating ? 'currentColor' : 'none'}
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                  <span className="rating-count">({juego.rating}.0)</span>
                </div>

                {/* Precio */}
                <div className="juego-pricing">
                  {juego.precioOriginal && (
                    <span className="precio-original">{formatPrice(juego.precioOriginal)}</span>
                  )}
                  <span className="precio-actual">{formatPrice(juego.precio)}</span>
                </div>

                {/* Acciones */}
                <div className="juego-actions">
                  <button className="btn-add-cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                    Agregar al Carrito
                  </button>
                  <button className="btn-wishlist" aria-label="Agregar a favoritos">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="ver-mas">
          <Link to="/catalogo?categoria=juegos" className="btn-ver-mas">
            Ver Todos los Juegos
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* ================= PLATAFORMAS ================= */}
      <section className="juegos-plataformas">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Explora por Plataforma</span>
          </h2>
          <p className="section-description">
            Encuentra juegos exclusivos para tu consola favorita
          </p>
        </div>

        <div className="plataformas-grid">
          <Link to="/catalogo?plataforma=playstation" className="plataforma-card playstation">
            <div className="plataforma-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.707 14.293l3 3a1 1 0 0 1 .293 .707v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a1 1 0 0 1 .293 -.707l3 -3a1 1 0 0 1 1.414 0"/>
              </svg>
            </div>
            <h3>PlayStation</h3>
            <p>God of War, Spider-Man, The Last of Us</p>
            <span className="plataforma-arrow">→</span>
          </Link>

          <Link to="/catalogo?plataforma=xbox" className="plataforma-card xbox">
            <div className="plataforma-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10"/>
              </svg>
            </div>
            <h3>Xbox</h3>
            <p>Halo, Forza, Starfield</p>
            <span className="plataforma-arrow">→</span>
          </Link>

          <Link to="/catalogo?plataforma=nintendo" className="plataforma-card nintendo">
            <div className="plataforma-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="7" width="20" height="10" rx="2"/>
              </svg>
            </div>
            <h3>Nintendo</h3>
            <p>Zelda, Mario, Pokémon</p>
            <span className="plataforma-arrow">→</span>
          </Link>

          <Link to="/catalogo?plataforma=pc" className="plataforma-card pc">
            <div className="plataforma-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <h3>PC Gaming</h3>
            <p>Cyberpunk, Baldur's Gate, Elden Ring</p>
            <span className="plataforma-arrow">→</span>
          </Link>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="juegos-cta">
        <div className="cta-content">
          <h2>¿Listo para tu próxima aventura?</h2>
          <p>
            Explora nuestro catálogo completo con más de 500 títulos disponibles. 
            Desde clásicos inmortales hasta los últimos lanzamientos AAA.
          </p>
          <Link to="/catalogo?categoria=juegos" className="btn-cta">
            Ver Catálogo Completo
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}