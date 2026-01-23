import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


// Componente de Card de Producto
function ProductCard({ image, title, description, badge, link }) {
  return (
    <article className="product-card">
      {badge && <span className="product-badge">{badge}</span>}
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-content">
        <h4>{title}</h4>
        <p>{description}</p>
        <Link to={link || '/catalogo'} className="product-btn">
          Ver detalles
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </article>
  );
}

// Componente de Sección
function Section({ title, subtitle, children, className, showButton, buttonText, buttonLink }) {
  return (
    <section className={`home-section ${className || ''}`}>
      <div className="section-header">
        <div className="section-text">
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        {showButton && (
          <Link to={buttonLink || '/catalogo'} className="section-btn">
            {buttonText || 'Ver más'}
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

export default function HomePage() {
  const proximosLanzamientos = [
    {
      image: '/switch.webp',
      title: 'Cyberpunk 2077: Phantom Liberty',
      description: 'Sumérgete en un mundo futurista lleno de acción y misterio',
      badge: '🔥 Nuevo',
      link: '/juegos'
    },
    {
      image: '/switch.webp',
      title: 'PlayStation 5 Slim',
      description: 'Experimenta la nueva generación con potencial sin igual',
      badge: '⭐ Popular',
      link: '/consolas'
    },
    {
      image: '/switch.webp',
      title: 'Mouse Gamer Pro X',
      description: 'Precisión y velocidad para los jugadores más exigentes',
      badge: '💎 Premium',
      link: '/tecnologia'
    },
    {
      image: '/switch.webp',
      title: 'Auriculares 7.1 Surround',
      description: 'Sonido inmersivo para una experiencia de juego superior',
      badge: '🎧 Audio',
      link: '/tecnologia'
    }
  ];

  const tecnologia = [
    {
      image: '/Ps5-Slim-Digital-Bundle-Ratchet-PLAYSTATION-SIN-REF-3525674_b.webp',
      title: 'Steam Deck OLED',
      description: 'Juega tus títulos favoritos en cualquier lugar'
    },
    {
      image: '/Ps5-Slim-Digital-Bundle-Ratchet-PLAYSTATION-SIN-REF-3525674_b.webp',
      title: 'Teclado Mecánico RGB',
      description: 'Switches cherry MX con iluminación personalizable'
    },
    {
      image: '/Ps5-Slim-Digital-Bundle-Ratchet-PLAYSTATION-SIN-REF-3525674_b.webp',
      title: 'Logitech G Pro X',
      description: 'El mouse preferido por los profesionales'
    },
    {
      image: '/Ps5-Slim-Digital-Bundle-Ratchet-PLAYSTATION-SIN-REF-3525674_b.webp',
      title: 'Kit Realidad Virtual',
      description: 'Experimenta el futuro del gaming inmersivo'
    }
  ];

  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="/2149829169.jpg" alt="Gaming background" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <span className="hero-badge">Bienvenido a</span>
          <h1 className="hero-title">
            <span className="gradient-text">PSYCHOGLITCH</span>
          </h1>
          <p className="hero-description">
            Tu universo de videojuegos, consolas de última generación y la mejor tecnología. 
            Explora un mundo de entretenimiento digital sin límites.
          </p>
          <div className="hero-buttons">
            <Link to="/catalogo" className="btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              Explorar Todo
            </Link>
            <Link to="/ofertas" className="btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
              Ver Ofertas
            </Link>
          </div>
          
          {/* Stats */}
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">0+</span>
              <span className="stat-label">Productos</span>
            </div>
            <div className="stat">
              <span className="stat-number">0+</span>
              <span className="stat-label">Marcas</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Soporte</span>
            </div>
          </div>
        </div>
      </section>

      {/* Próximos Lanzamientos */}
      <Section 
        title="Próximos Lanzamientos" 
        subtitle="No te pierdas lo mejor que viene para este año"
        showButton={true}
        buttonText="Ver todos"
        buttonLink="/catalogo"
      >
        <div className="products-grid">
          {proximosLanzamientos.map((producto, index) => (
            <ProductCard key={index} {...producto} />
          ))}
        </div>
      </Section>

      {/* Banner Promocional */}
      <section className="promo-banner">
        <div className="promo-content">
          <div className="promo-text">
            <span className="promo-badge">Oferta Especial</span>
            <h2>Hasta 10% OFF en Consolas</h2>
            <p>Aprovecha nuestros descuentos en PlayStation 5, Xbox Series X y Nintendo Switch</p>
            <Link to="/ofertas" className="promo-btn">
              Comprar ahora
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
          <div className="promo-image">
            <div className="promo-circle"></div>
            <img src="/switch.webp" alt="Promoción" />
          </div>
        </div>
      </section>

      {/* Tecnología */}
      <Section 
        title="Últimas Consolas y Tecnología" 
        subtitle="Descubre el hardware más potente y los accesorios más innovadores"
        showButton={true}
        buttonText="Ver tecnología"
        buttonLink="/tecnologia"
      >
        <div className="products-grid">
          {tecnologia.map((producto, index) => (
            <ProductCard key={index} {...producto} link="/tecnologia" />
          ))}
        </div>
      </Section>

      {/* Marcas Favoritas */}
      <section className="brands-section">
        <div className="brands-container">
          <div className="brands-header">
            <h2 className="brands-title">
              <span className="gradient-text">Marcas Favoritas</span>
            </h2>
            <p className="brands-subtitle">Las marcas más confiables del gaming</p>
          </div>
          
          {/* Slider con efecto infinito */}
          <div className="brands-slider-wrapper">
            <div className="brands-slider">
              <div className="brands-track">
                {/* Primera vuelta */}
                  <div className="brand-card">
                    <div className="brand-card-inner">
                        <img src="/Marca (1).png" alt="PlayStation" />
                    </div>
                  </div>
                <div className="brand-card">
                  <div className="brand-card-inner">
                    <img src="/Marca (2).png" alt="Xbox" />
                  </div>
                </div>
                <div className="brand-card">
                  <div className="brand-card-inner">
                    <img src="/Marca (3).png" alt="Nintendo" />
                  </div>
                </div>
                <div className="brand-card">
                  <div className="brand-card-inner">
                    <img src="/Marca (4).png" alt="Steam" />
                  </div>
                </div>
                
                {/* Segunda vuelta */}
                <div className="brand-card">
                  <div className="brand-card-inner">
                    <img src="/Marca (1).png" alt="PlayStation" />
                  </div>
                </div>
                <div className="brand-card">
                  <div className="brand-card-inner">
                    <img src="/Marca (2).png" alt="Xbox" />
                  </div>
                </div>
                <div className="brand-card">
                  <div className="brand-card-inner">
                    <img src="/Marca (3).png" alt="Nintendo" />
                  </div>
                </div>
                <div className="brand-card">
                  <div className="brand-card-inner">
                    <img src="/Marca (4).png" alt="Steam" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gradientes laterales */}
            <div className="slider-fade-left"></div>
            <div className="slider-fade-right"></div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <div className="newsletter-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </div>
          
          <div className="newsletter-text">
            <h3>Suscríbete a nuestro Newsletter</h3>
            <p>Recibe las últimas noticias, ofertas exclusivas y lanzamientos directamente en tu correo</p>
          </div>
          
          <div className="newsletter-form">
            <input type="email" placeholder="tu@email.com" />
            <button className="newsletter-btn">Suscribirse</button>
          </div>
        </div>
      </section>
    </main>
  );
}