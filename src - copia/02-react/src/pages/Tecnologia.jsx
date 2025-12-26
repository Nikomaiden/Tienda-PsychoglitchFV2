import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/tecnologia.css';

export default function Tecnologia() {
  useEffect(() => {
    document.title = "PSYCHOGLITCH - Accesorios Tecnológicos";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tecnologia-page">
      {/* ================= HERO ================= */}
      <section className="tecnologia-hero">
        <div className="hero-background">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
        
        <div className="hero-content">
          <span className="hero-badge">Accesorios Premium</span>
          <h1 className="hero-title">
            <span className="gradient-text">Accesorios Tecnológicos de Última Generación</span>
          </h1>
          <p className="hero-subtitle">
            Potencia extrema, calidad legendaria y periféricos que transforman tu experiencia digital
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Productos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Marcas</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.9★</span>
              <span className="stat-label">Satisfacción</span>
            </div>
          </div>

          <div className="hero-actions">
            <Link to="/catalogo" className="btn-hero-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              Explorar Catálogo
            </Link>
            <a href="#categorias" className="btn-hero-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
              Ver Categorías
            </a>
          </div>
        </div>
      </section>

      {/* ================= CATEGORÍAS ================= */}
      <section className="tecnologia-categorias" id="categorias">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Categorías de Accesorios</span>
          </h2>
          <p className="section-description">
            Encuentra todo lo que necesitas para potenciar tu setup tecnológico
          </p>
        </div>

        <div className="categorias-grid">
          {/* Audio */}
          <div className="categoria-card audio">
            <div className="categoria-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 4v16M15 7v10M6 9v6M12 2v20"/>
              </svg>
            </div>
            <h3>Audio</h3>
            <p>Auriculares y parlantes de máxima calidad sonora</p>
            <ul className="categoria-features">
              <li>✓ Auriculares Gaming</li>
              <li>✓ Headphones Premium</li>
              <li>✓ Speakers 7.1</li>
            </ul>
            <Link to="/catalogo?categoria=audio" className="categoria-btn">
              Explorar Audio
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Periféricos */}
          <div className="categoria-card perifericos">
            <div className="categoria-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="7" width="20" height="13" rx="2"/>
                <path d="M8 20h8"/>
              </svg>
            </div>
            <h3>Periféricos</h3>
            <p>Teclados, mouses y almohadillas de rendimiento superior</p>
            <ul className="categoria-features">
              <li>✓ Teclados Mecánicos</li>
              <li>✓ Mouses Gamer</li>
              <li>✓ Mousepads XL</li>
            </ul>
            <Link to="/catalogo?categoria=perifericos" className="categoria-btn">
              Explorar Periféricos
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Pantallas */}
          <div className="categoria-card pantallas">
            <div className="categoria-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <path d="M8 17h8"/>
              </svg>
            </div>
            <h3>Pantallas</h3>
            <p>Monitores 4K, gaming y profesionales de última generación</p>
            <ul className="categoria-features">
              <li>✓ Monitores 4K</li>
              <li>✓ 144Hz+ Gaming</li>
              <li>✓ Curved Ultra-wide</li>
            </ul>
            <Link to="/catalogo?categoria=pantallas" className="categoria-btn">
              Explorar Pantallas
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Conectividad */}
          <div className="categoria-card conectividad">
            <div className="categoria-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m0 2c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z"/>
              </svg>
            </div>
            <h3>Conectividad</h3>
            <p>Cables, adaptadores y hubs para todas tus necesidades</p>
            <ul className="categoria-features">
              <li>✓ Cables HDMI 2.1</li>
              <li>✓ Hubs USB-C</li>
              <li>✓ Adaptadores Multi</li>
            </ul>
            <Link to="/catalogo?categoria=conectividad" className="categoria-btn">
              Explorar Conectividad
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Refrigeración */}
          <div className="categoria-card refrigeracion">
            <div className="categoria-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="9"/>
                <path d="M12 8v8M8 12h8"/>
              </svg>
            </div>
            <h3>Refrigeración</h3>
            <p>Coolers, ventiladores y sistemas de enfriamiento avanzados</p>
            <ul className="categoria-features">
              <li>✓ Coolers CPU/GPU</li>
              <li>✓ Líquida RGB</li>
              <li>✓ Pasta Térmica</li>
            </ul>
            <Link to="/catalogo?categoria=refrigeracion" className="categoria-btn">
              Explorar Refrigeración
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Almacenamiento */}
          <div className="categoria-card almacenamiento">
            <div className="categoria-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="4" width="20" height="5" rx="1"/>
                <rect x="2" y="11" width="20" height="5" rx="1"/>
                <rect x="2" y="18" width="20" height="2" rx="1"/>
              </svg>
            </div>
            <h3>Almacenamiento</h3>
            <p>SSD, discos duros y soluciones de respaldo portátil</p>
            <ul className="categoria-features">
              <li>✓ SSD NVMe Ultra-rápido</li>
              <li>✓ Discos 7200RPM</li>
              <li>✓ Externos Portátiles</li>
            </ul>
            <Link to="/catalogo?categoria=almacenamiento" className="categoria-btn">
              Explorar Almacenamiento
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ACCESORIOS DESTACADOS ================= */}
      <section className="tecnologias-destacadas">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Accesorios Destacados</span>
          </h2>
          <p className="section-description">
            Los mejores productos del mercado para tu setup gaming y productividad
          </p>
        </div>

        <div className="destacadas-grid">
          {/* Auriculares Premium */}
          <article className="tech-destacada">
            <div className="destacada-badges">
              <span className="badge badge-hot">🔥 Top Ventas</span>
            </div>
            <div className="destacada-image">
              <img src="/auriculares-gaming.webp" alt="Auriculares Gaming Premium" />
            </div>
            <div className="destacada-content">
              <h3>Auriculares Gaming HyperX CloudⅡ</h3>
              <p>Audio envolvente 7.1, micrófono con cancelación de ruido y comodidad extrema para sesiones largas de gaming.</p>
              <div className="destacada-specs">
                <span className="spec">🔊 Surround 7.1</span>
                <span className="spec">🎤 Noise Cancelling</span>
                <span className="spec">⏱️ 30h Batería</span>
              </div>
              <div className="destacada-tags">
                <span className="tag">Audio</span>
                <span className="tag">Gaming</span>
                <span className="tag">Wireless</span>
              </div>
              <div className="destacada-price">
                <span className="price">$349.900</span>
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

          {/* Teclado Mecánico */}
          <article className="tech-destacada">
            <div className="destacada-badges">
              <span className="badge badge-power">⚡ Máxima Precisión</span>
            </div>
            <div className="destacada-image">
              <img src="/teclado-mecanico.webp" alt="Teclado Mecánico RGB" />
            </div>
            <div className="destacada-content">
              <h3>Teclado Mecánico RGB Cherry MX</h3>
              <p>Switches Cherry MX mecánicos, iluminación RGB personalizable y respuesta ultra rápida para gaming competitivo.</p>
              <div className="destacada-specs">
                <span className="spec">⌨️ Cherry MX Switches</span>
                <span className="spec">🌈 RGB Customizable</span>
                <span className="spec">⚡ 1ms Response</span>
              </div>
              <div className="destacada-tags">
                <span className="tag">Periféricos</span>
                <span className="tag">Gaming</span>
                <span className="tag">Mecánico</span>
              </div>
              <div className="destacada-price">
                <span className="price">$549.900</span>
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

          {/* Monitor 4K */}
          <article className="tech-destacada">
            <div className="destacada-badges">
              <span className="badge badge-versatile">🎯 Ultra 4K</span>
            </div>
            <div className="destacada-image">
              <img src="/monitor-4k.webp" alt="Monitor 4K Gaming" />
            </div>
            <div className="destacada-content">
              <h3>Monitor Gaming 4K 144Hz LG OLED</h3>
              <p>Resolución 4K, 144Hz de refresco y panel OLED para negros infinitos y colores vibrantes en gaming y diseño.</p>
              <div className="destacada-specs">
                <span className="spec">📺 4K OLED</span>
                <span className="spec">⚡ 144Hz</span>
                <span className="spec">🎨 HDR10</span>
              </div>
              <div className="destacada-tags">
                <span className="tag">Pantallas</span>
                <span className="tag">4K</span>
                <span className="tag">Gaming</span>
              </div>
              <div className="destacada-price">
                <span className="price">$2.899.900</span>
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
      <section className="tecnologia-cta">
        <div className="cta-content">
          <h2>Completa Tu Setup. Domina Tu Juego.</h2>
          <p>
            Descubre todo nuestro catálogo de accesorios tecnológicos y lleva tu experiencia gaming y productividad al siguiente nivel.
          </p>
          <Link to="/catalogo" className="btn-cta">
            Ver Todos los Accesorios
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}