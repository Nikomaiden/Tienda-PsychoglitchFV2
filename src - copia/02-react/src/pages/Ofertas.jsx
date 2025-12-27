import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/ofertas.css';

export default function Ofertas() {
  useEffect(() => {
    document.title = "PSYCHOGLITCH - Ofertas Especiales";
    window.scrollTo(0, 0);
  }, []);

  const ofertasDestacadas = [
    {
      id: 1,
      nombre: 'Auriculares HyperX CloudⅡ',
      descripcion: 'Audio envolvente 7.1 con micrófono noise cancelling',
      imagen: '/auriculares-gaming.webp',
      precioOriginal: 499900,
      precioOferta: 349900,
      descuento: 30,
      badge: '🔥 Flash Sale',
      tags: ['Audio', 'Gaming', 'Wireless'],
      stock: 15,
      tiempoRestante: '2 días'
    },
    {
      id: 2,
      nombre: 'Teclado Mecánico RGB Cherry MX',
      descripcion: 'Switches Cherry MX mecánicos con iluminación RGB personalizable',
      imagen: '/teclado-mecanico.webp',
      precioOriginal: 749900,
      precioOferta: 549900,
      descuento: 27,
      badge: '⚡ Super Oferta',
      tags: ['Periféricos', 'Gaming', 'Mecánico'],
      stock: 8,
      tiempoRestante: '5 días'
    },
    {
      id: 3,
      nombre: 'Monitor Gaming 4K 144Hz LG OLED',
      descripcion: 'Resolución 4K, 144Hz de refresco y panel OLED',
      imagen: '/monitor-4k.webp',
      precioOriginal: 3899900,
      precioOferta: 2899900,
      descuento: 26,
      badge: '💎 Premium',
      tags: ['Pantallas', '4K', 'Gaming'],
      stock: 4,
      tiempoRestante: '8 días'
    },
    {
      id: 4,
      nombre: 'Mouse Gaming RAZER DeathAdder V3',
      descripcion: 'Sensor 30,000 DPI con respuesta de 1ms',
      imagen: '/mouse-gaming.webp',
      precioOriginal: 399900,
      precioOferta: 269900,
      descuento: 33,
      badge: '🔥 Flash Sale',
      tags: ['Periféricos', 'Gaming', 'Wireless'],
      stock: 22,
      tiempoRestante: '1 día'
    },
    {
      id: 5,
      nombre: 'SSD NVMe Samsung 970 EVO 1TB',
      descripcion: 'Almacenamiento ultra rápido con velocidades de 3,500 MB/s',
      imagen: '/ssd-samsung.webp',
      precioOriginal: 299900,
      precioOferta: 199900,
      descuento: 33,
      badge: '⭐ Bestseller',
      tags: ['Almacenamiento', 'SSD', 'Ultra-rápido'],
      stock: 35,
      tiempoRestante: '12 días'
    },
    {
      id: 6,
      nombre: 'Mousepad SteelSeries XL RGB',
      descripcion: 'Mousepad de tela con iluminación RGB sincronizable',
      imagen: '/mousepad-rgb.webp',
      precioOriginal: 179900,
      precioOferta: 89900,
      descuento: 50,
      badge: '🎉 Mega Descuento',
      tags: ['Accesorios', 'Gaming', 'RGB'],
      stock: 50,
      tiempoRestante: '3 días'
    }
  ];

  const categoriasOfertas = [
    {
      nombre: 'Audio en Oferta',
      icon: '🎧',
      cantidad: 12,
      descuentoPromedio: '25%'
    },
    {
      nombre: 'Periféricos Gamer',
      icon: '⌨️',
      cantidad: 18,
      descuentoPromedio: '30%'
    },
    {
      nombre: 'Pantallas 4K',
      icon: '📺',
      cantidad: 8,
      descuentoPromedio: '28%'
    },
    {
      nombre: 'Almacenamiento',
      icon: '💾',
      cantidad: 15,
      descuentoPromedio: '32%'
    },
    {
      nombre: 'Accesorios',
      icon: '⚙️',
      cantidad: 24,
      descuentoPromedio: '35%'
    },
    {
      nombre: 'Refrigeración',
      icon: '❄️',
      cantidad: 10,
      descuentoPromedio: '20%'
    }
  ];

  const calculoDia = Math.floor(Math.random() * 3) + 1;

  return (
    <div className="ofertas-page">
      {/* ================= HERO ================= */}
      <section className="ofertas-hero">
        <div className="hero-background">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>

        <div className="hero-content">
          <span className="hero-badge">⏰ Oferta Limitada</span>
          <h1 className="hero-title">
            <span className="gradient-text">¡Descuentos Increíbles!</span>
          </h1>
          <p className="hero-subtitle">
            Aprovecha nuestras ofertas especiales en los mejores accesorios tecnológicos del mercado
          </p>

          <div className="countdown-banner">
            <div className="countdown-item">
              <span className="countdown-number">23</span>
              <span className="countdown-label">Horas</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-number">45</span>
              <span className="countdown-label">Minutos</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-number">12</span>
              <span className="countdown-label">Segundos</span>
            </div>
          </div>

          <div className="hero-subtitle secondary">
            Válido solo por tiempo limitado. Stock limitado en algunos productos.
          </div>

          <div className="hero-actions">
            <Link to="/catalogo" className="btn-hero-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              Explorar Ofertas
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

      {/* ================= CATEGORÍAS DE OFERTAS ================= */}
      <section className="categorias-ofertas" id="categorias">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Categorías en Oferta</span>
          </h2>
          <p className="section-description">
            Descubre nuestras mejores ofertas por categoría
          </p>
        </div>

        <div className="categorias-grid">
          {categoriasOfertas.map((cat, idx) => (
            <Link to={`/catalogo?oferta=true`} key={idx} className="categoria-oferta-card">
              <div className="categoria-oferta-icon">{cat.icon}</div>
              <h3>{cat.nombre}</h3>
              <div className="categoria-oferta-stats">
                <span className="stat-items">{cat.cantidad} productos</span>
                <span className="stat-descuento">Hasta {cat.descuentoPromedio}</span>
              </div>
              <div className="categoria-oferta-arrow">→</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= OFERTAS DESTACADAS ================= */}
      <section className="ofertas-destacadas">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Ofertas Destacadas</span>
          </h2>
          <p className="section-description">
            Los mejores descuentos en productos premium
          </p>
        </div>

        <div className="ofertas-grid">
          {ofertasDestacadas.map((oferta) => {
            const ahorros = oferta.precioOriginal - oferta.precioOferta;
            return (
              <article key={oferta.id} className="oferta-card">
                <div className="oferta-badges">
                  <span className="badge badge-oferta">{oferta.badge}</span>
                  <span className="badge badge-descuento">-{oferta.descuento}%</span>
                </div>

                {oferta.stock <= 10 && (
                  <div className="stock-warning">
                    ⚠️ Solo {oferta.stock} disponibles
                  </div>
                )}

                <div className="oferta-image">
                  <img src={oferta.imagen} alt={oferta.nombre} />
                  <div className="oferta-timer">
                    ⏱️ Vence en {oferta.tiempoRestante}
                  </div>
                </div>

                <div className="oferta-content">
                  <h3>{oferta.nombre}</h3>
                  <p className="oferta-descripcion">{oferta.descripcion}</p>

                  <div className="oferta-tags">
                    {oferta.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>

                  <div className="oferta-precios">
                    <span className="precio-original">${oferta.precioOriginal.toLocaleString('es-CO')}</span>
                    <span className="precio-oferta">${oferta.precioOferta.toLocaleString('es-CO')}</span>
                    <span className="ahorro-label">Ahorras ${ahorros.toLocaleString('es-CO')}</span>
                  </div>

                  <div className="oferta-barra">
                    <div className="barra-progreso" style={{width: `${100 - (oferta.stock / 50) * 100}%`}}></div>
                  </div>

                  <Link to={`/producto/${oferta.id}`} className="btn-oferta">
                    Comprar Ahora
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ================= VENTAJAS ================= */}
      <section className="ofertas-ventajas">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">¿Por Qué Comprar Con Nosotros?</span>
          </h2>
        </div>

        <div className="ventajas-grid">
          <div className="ventaja-card">
            <div className="ventaja-icon">🚚</div>
            <h3>Envío Rápido</h3>
            <p>Entrega en 24-48 horas en Bogotá y principales ciudades</p>
          </div>

          <div className="ventaja-card">
            <div className="ventaja-icon">🛡️</div>
            <h3>Garantía Oficial</h3>
            <p>Todos nuestros productos tienen garantía del fabricante</p>
          </div>

          <div className="ventaja-card">
            <div className="ventaja-icon">💳</div>
            <h3>Múltiples Pagos</h3>
            <p>Paga con tarjeta, transferencia bancaria o efectivo</p>
          </div>

          <div className="ventaja-card">
            <div className="ventaja-icon">↩️</div>
            <h3>Devoluciones</h3>
            <p>30 días para cambios y devoluciones sin problema</p>
          </div>

          <div className="ventaja-card">
            <div className="ventaja-icon">💬</div>
            <h3>Soporte 24/7</h3>
            <p>Asistencia por chat, email y whatsapp siempre disponible</p>
          </div>

          <div className="ventaja-card">
            <div className="ventaja-icon">⭐</div>
            <h3>Mejor Precio</h3>
            <p>Si encuentras más barato, nosotros lo igualamos</p>
          </div>
        </div>
      </section>
      
      {/* ================= CTA FINAL ================= */}
      <section className="ofertas-cta">
        <div className="cta-content">
          <h2>¡No Te Pierdas Estas Ofertas!</h2>
          <p>
            Las mejores marcas y productos están en oferta. Compra ahora y ahorra en tu setup gaming.
          </p>
          <Link to="/catalogo" className="btn-cta">
            Ver Todas las Ofertas
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}