import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/consolas.css';

export default function Consolas() {
  useEffect(() => {
    document.title = "PSYCHOGLITCH - Consolas";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="consolas-page">
      {/* ================= HERO ================= */}
      <section className="consolas-hero">
        <div className="hero-background">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
        
        <div className="hero-content">
          <span className="hero-badge">Nueva Generación</span>
          <h1 className="hero-title">
            <span className="gradient-text">Consolas de Última Generación</span>
          </h1>
          <p className="hero-subtitle">
            Potencia extrema, exclusivos legendarios y experiencias que redefinen el gaming
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">4K</span>
              <span className="stat-label">Ultra HD</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">120fps</span>
              <span className="stat-label">Máxima Fluidez</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Ray Tracing</span>
              <span className="stat-label">Gráficos Realistas</span>
            </div>
          </div>

          <div className="hero-actions">
            <Link to="/catalogo" className="btn-hero-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              Explorar Consolas
            </Link>
            <a href="#marcas" className="btn-hero-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
              Ver Marcas
            </a>
          </div>
        </div>
      </section>

      {/* ================= MARCAS ================= */}
      <section className="consolas-marcas" id="marcas">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Elige Tu Ecosistema</span>
          </h2>
          <p className="section-description">
            Cada plataforma ofrece experiencias únicas y exclusivos imperdibles
          </p>
        </div>

        <div className="marcas-grid">
          {/* PlayStation */}
          <div className="marca-card playstation">
            <div className="marca-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.707 14.293l3 3a1 1 0 0 1 .293 .707v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a1 1 0 0 1 .293 -.707l3 -3a1 1 0 0 1 1.414 0"/>
              </svg>
            </div>
            <h3>PlayStation</h3>
            <p>Exclusivos épicos, narrativas inmersivas y la máxima potencia</p>
            <ul className="marca-features">
              <li>✓ PlayStation 5</li>
              <li>✓ PlayStation Plus</li>
              <li>✓ Exclusivos AAA</li>
            </ul>
            <Link to="/catalogo?categoria=consolas&marca=playstation" className="marca-btn">
              Explorar PlayStation
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Xbox */}
          <div className="marca-card xbox">
            <div className="marca-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10"/>
              </svg>
            </div>
            <h3>Xbox</h3>
            <p>Rendimiento extremo, Game Pass ilimitado y retrocompatibilidad</p>
            <ul className="marca-features">
              <li>✓ Xbox Series X|S</li>
              <li>✓ Game Pass Ultimate</li>
              <li>✓ Cloud Gaming</li>
            </ul>
            <Link to="/catalogo?categoria=consolas&marca=xbox" className="marca-btn">
              Explorar Xbox
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Nintendo */}
          <div className="marca-card nintendo">
            <div className="marca-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="7" width="20" height="10" rx="2"/>
              </svg>
            </div>
            <h3>Nintendo</h3>
            <p>Diversión para todos, portabilidad perfecta e innovación única</p>
            <ul className="marca-features">
              <li>✓ Nintendo Switch</li>
              <li>✓ Juega en cualquier lugar</li>
              <li>✓ Mario, Zelda, Pokémon</li>
            </ul>
            <Link to="/catalogo?categoria=consolas&marca=nintendo" className="marca-btn">
              Explorar Nintendo
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= DESTACADAS ================= */}
      <section className="consolas-destacadas">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Consolas Destacadas</span>
          </h2>
          <p className="section-description">
            Las mejores opciones del mercado para tu setup gaming
          </p>
        </div>

        <div className="destacadas-grid">
          {/* PS5 */}
          <article className="consola-destacada">
            <div className="destacada-badges">
              <span className="badge badge-hot">🔥 Top Ventas</span>
            </div>
            <div className="destacada-image">
              <img src="/ps5-slim.webp" alt="PlayStation 5 Slim" />
            </div>
            <div className="destacada-content">
              <h3>PlayStation 5 Slim</h3>
              <p>Gráficos 4K impresionantes, carga ultra rápida con SSD y exclusivos legendarios como Spider-Man 2 y God of War.</p>
              <div className="destacada-specs">
                <span className="spec">🎮 Hasta 120fps</span>
                <span className="spec">💾 825GB SSD</span>
                <span className="spec">🎯 Ray Tracing</span>
              </div>
              <div className="destacada-price">
                <span className="price">$2.499.000</span>
                <span className="price-label">COP</span>
              </div>
              <Link to="/producto/1" className="btn-destacada">
                Comprar Ahora
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </article>

          {/* Xbox Series X */}
          <article className="consola-destacada">
            <div className="destacada-badges">
              <span className="badge badge-power">⚡ Máximo Rendimiento</span>
            </div>
            <div className="destacada-image">
              <img src="/xbox-series-x.webp" alt="Xbox Series X" />
            </div>
            <div className="destacada-content">
              <h3>Xbox Series X</h3>
              <p>La consola más potente jamás creada. 12 TFLOPS de potencia gráfica y acceso a cientos de juegos con Game Pass.</p>
              <div className="destacada-specs">
                <span className="spec">🚀 12 TFLOPS</span>
                <span className="spec">💿 1TB SSD</span>
                <span className="spec">🎮 Game Pass</span>
              </div>
              <div className="destacada-price">
                <span className="price">$2.299.000</span>
                <span className="price-label">COP</span>
              </div>
              <Link to="/producto/2" className="btn-destacada">
                Comprar Ahora
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </article>

          {/* Nintendo Switch OLED */}
          <article className="consola-destacada">
            <div className="destacada-badges">
              <span className="badge badge-versatile">🎯 Versátil</span>
            </div>
            <div className="destacada-image">
              <img src="/switch-oled.webp" alt="Nintendo Switch OLED" />
            </div>
            <div className="destacada-content">
              <h3>Nintendo Switch OLED</h3>
              <p>Juega donde quieras con la pantalla OLED más vibrante. Perfecto para toda la familia con Mario, Zelda y Pokémon.</p>
              <div className="destacada-specs">
                <span className="spec">📺 OLED 7"</span>
                <span className="spec">🔋 Portátil</span>
                <span className="spec">👨‍👩‍👧 Multijugador</span>
              </div>
              <div className="destacada-price">
                <span className="price">$1.599.000</span>
                <span className="price-label">COP</span>
              </div>
              <Link to="/producto/3" className="btn-destacada">
                Comprar Ahora
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="consolas-cta">
        <div className="cta-content">
          <h2>Elige Tu Consola. Domina el Juego.</h2>
          <p>
            Descubre todo el catálogo y lleva tu experiencia gaming al siguiente nivel con las mejores consolas del mercado.
          </p>
          <Link to="/catalogo" className="btn-cta">
            Ver Todas las Consolas
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}