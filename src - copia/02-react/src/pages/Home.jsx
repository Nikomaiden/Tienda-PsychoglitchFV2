import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/index.css';

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

export function HomePage() {
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

      {/* Marcas Favoritas - MEJORADO */}
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

      {/* Newsletter - VERSIÓN CORREGIDA */}
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

      {/* WhatsApp Flotante - ✅ CORREGIDO */}
      <a
        href="https://wa.me/573184751835?text=¡Hola!%20Quisiera%20más%20información%20sobre%20sus%20productos."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </main>
  );
}