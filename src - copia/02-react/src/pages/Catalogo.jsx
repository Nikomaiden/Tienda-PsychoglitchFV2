import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/catalogo.css';

// Datos de productos de ejemplo (después puedes traerlos de una API)
const productosData = [
  {
    id: 1,
    nombre: "PlayStation 5 Slim",
    categoria: "consolas",
    precio: 2499000,
    precioOriginal: 2799000,
    imagen: "/ps5-slim.webp",
    descuento: 10,
    nuevo: true,
    stock: true,
    rating: 5
  },
  {
    id: 2,
    nombre: "Xbox Series X",
    categoria: "consolas",
    precio: 2299000,
    imagen: "/xbox-series-x.webp",
    nuevo: false,
    stock: true,
    rating: 5
  },
  {
    id: 3,
    nombre: "Nintendo Switch OLED",
    categoria: "consolas",
    precio: 1599000,
    imagen: "/switch-oled.webp",
    nuevo: true,
    stock: true,
    rating: 4
  },
  {
    id: 4,
    nombre: "The Last of Us Part II",
    categoria: "juegos",
    precio: 179000,
    precioOriginal: 229000,
    imagen: "/tlou2.webp",
    descuento: 22,
    stock: true,
    rating: 5
  },
  {
    id: 5,
    nombre: "God of War Ragnarök",
    categoria: "juegos",
    precio: 259000,
    imagen: "/gow-ragnarok.webp",
    nuevo: true,
    stock: true,
    rating: 5
  },
  {
    id: 6,
    nombre: "Spider-Man 2",
    categoria: "juegos",
    precio: 289000,
    imagen: "/spiderman2.webp",
    nuevo: true,
    stock: false,
    rating: 5
  },
  {
    id: 7,
    nombre: "Mouse Logitech G Pro X",
    categoria: "tecnologia",
    precio: 329000,
    imagen: "/mouse-gpro.webp",
    stock: true,
    rating: 5
  },
  {
    id: 8,
    nombre: "Teclado Mecánico RGB",
    categoria: "tecnologia",
    precio: 459000,
    precioOriginal: 549000,
    imagen: "/teclado-rgb.webp",
    descuento: 16,
    stock: true,
    rating: 4
  },
  {
    id: 9,
    nombre: "Auriculares SteelSeries Arctis 7",
    categoria: "tecnologia",
    precio: 689000,
    imagen: "/arctis7.webp",
    nuevo: true,
    stock: true,
    rating: 5
  },
  {
    id: 10,
    nombre: "Monitor Gaming 27\" 144Hz",
    categoria: "tecnologia",
    precio: 1199000,
    imagen: "/monitor-gaming.webp",
    stock: true,
    rating: 4
  },
  {
    id: 11,
    nombre: "Silla Gaming RGB",
    categoria: "tecnologia",
    precio: 899000,
    precioOriginal: 1099000,
    imagen: "/silla-gaming.webp",
    descuento: 18,
    stock: true,
    rating: 4
  },
  {
    id: 12,
    nombre: "Webcam 4K HD",
    categoria: "tecnologia",
    precio: 349000,
    imagen: "/webcam-4k.webp",
    stock: true,
    rating: 4
  }
];

export default function Catalogo() {
  const [productos, setProductos] = useState(productosData);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');
  const [ordenamiento, setOrdenamiento] = useState('destacados');
  const [busqueda, setBusqueda] = useState('');
  const [vistaGrid, setVistaGrid] = useState(true);

  // Filtrar y ordenar productos
  useEffect(() => {
    let productosFiltrados = [...productosData];

    // Filtrar por categoría
    if (categoriaSeleccionada !== 'todos') {
      productosFiltrados = productosFiltrados.filter(
        p => p.categoria === categoriaSeleccionada
      );
    }

    // Filtrar por búsqueda
    if (busqueda) {
      productosFiltrados = productosFiltrados.filter(p =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    // Ordenar
    switch (ordenamiento) {
      case 'precio-asc':
        productosFiltrados.sort((a, b) => a.precio - b.precio);
        break;
      case 'precio-desc':
        productosFiltrados.sort((a, b) => b.precio - a.precio);
        break;
      case 'nombre':
        productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case 'nuevos':
        productosFiltrados.sort((a, b) => (b.nuevo ? 1 : 0) - (a.nuevo ? 1 : 0));
        break;
      default:
        // destacados (orden original)
        break;
    }

    setProductos(productosFiltrados);
  }, [categoriaSeleccionada, ordenamiento, busqueda]);

  return (
    <div className="catalogo-page">
      {/* Header del catálogo */}
      <div className="catalogo-header">
        <div className="catalogo-header-content">
          <div className="catalogo-title-section">
            <h1 className="catalogo-title">
              <span className="gradient-text">Catálogo</span>
            </h1>
            <p className="catalogo-subtitle">
              Encuentra los mejores productos gaming al mejor precio
            </p>
          </div>

          {/* Búsqueda */}
          <div className="catalogo-search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Buscar productos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="catalogo-container">
        {/* Sidebar - Filtros */}
        <aside className="catalogo-sidebar">
          <div className="filter-section">
            <h3 className="filter-title">Categorías</h3>
            <div className="filter-options">
              <button
                className={`filter-btn ${categoriaSeleccionada === 'todos' ? 'active' : ''}`}
                onClick={() => setCategoriaSeleccionada('todos')}
              >
                <span className="filter-icon">🎮</span>
                Todos los productos
                <span className="filter-count">{productosData.length}</span>
              </button>
              <button
                className={`filter-btn ${categoriaSeleccionada === 'consolas' ? 'active' : ''}`}
                onClick={() => setCategoriaSeleccionada('consolas')}
              >
                <span className="filter-icon">🎯</span>
                Consolas
                <span className="filter-count">
                  {productosData.filter(p => p.categoria === 'consolas').length}
                </span>
              </button>
              <button
                className={`filter-btn ${categoriaSeleccionada === 'juegos' ? 'active' : ''}`}
                onClick={() => setCategoriaSeleccionada('juegos')}
              >
                <span className="filter-icon">🕹️</span>
                Juegos
                <span className="filter-count">
                  {productosData.filter(p => p.categoria === 'juegos').length}
                </span>
              </button>
              <button
                className={`filter-btn ${categoriaSeleccionada === 'tecnologia' ? 'active' : ''}`}
                onClick={() => setCategoriaSeleccionada('tecnologia')}
              >
                <span className="filter-icon">⚡</span>
                Tecnología
                <span className="filter-count">
                  {productosData.filter(p => p.categoria === 'tecnologia').length}
                </span>
              </button>
            </div>
          </div>

          {/* Filtros adicionales */}
          <div className="filter-section">
            <h3 className="filter-title">Disponibilidad</h3>
            <div className="filter-checkbox">
              <label>
                <input type="checkbox" />
                <span>En stock</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>Con descuento</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>Nuevos</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Contenido principal */}
        <main className="catalogo-main">
          {/* Barra de herramientas */}
          <div className="catalogo-toolbar">
            <div className="toolbar-info">
              <p>
                Mostrando <strong>{productos.length}</strong> productos
                {categoriaSeleccionada !== 'todos' && (
                  <span> en <strong>{categoriaSeleccionada}</strong></span>
                )}
              </p>
            </div>

            <div className="toolbar-actions">
              {/* Ordenamiento */}
              <select
                className="sort-select"
                value={ordenamiento}
                onChange={(e) => setOrdenamiento(e.target.value)}
              >
                <option value="destacados">Destacados</option>
                <option value="precio-asc">Precio: Menor a Mayor</option>
                <option value="precio-desc">Precio: Mayor a Menor</option>
                <option value="nombre">Nombre: A-Z</option>
                <option value="nuevos">Más Nuevos</option>
              </select>

              {/* Vista grid/lista */}
              <div className="view-toggle">
                <button
                  className={`view-btn ${vistaGrid ? 'active' : ''}`}
                  onClick={() => setVistaGrid(true)}
                  aria-label="Vista en cuadrícula"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                  </svg>
                </button>
                <button
                  className={`view-btn ${!vistaGrid ? 'active' : ''}`}
                  onClick={() => setVistaGrid(false)}
                  aria-label="Vista en lista"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="8" y1="6" x2="21" y2="6"/>
                    <line x1="8" y1="12" x2="21" y2="12"/>
                    <line x1="8" y1="18" x2="21" y2="18"/>
                    <line x1="3" y1="6" x2="3.01" y2="6"/>
                    <line x1="3" y1="12" x2="3.01" y2="12"/>
                    <line x1="3" y1="18" x2="3.01" y2="18"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Grid de productos */}
          {productos.length > 0 ? (
            <div className={`productos-grid ${vistaGrid ? 'grid-view' : 'list-view'}`}>
              {productos.map((producto) => (
                <ProductCard key={producto.id} producto={producto} vistaGrid={vistaGrid} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <h3>No se encontraron productos</h3>
              <p>Intenta con otros términos de búsqueda o filtros</p>
              <button onClick={() => {
                setBusqueda('');
                setCategoriaSeleccionada('todos');
              }} className="btn-reset">
                Limpiar filtros
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// Componente de tarjeta de producto
function ProductCard({ producto, vistaGrid }) {
  const formatPrice = (precio) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(precio);
  };

  return (
    <article className="product-card-catalogo">
      {/* Badges */}
      <div className="product-badges">
        {producto.nuevo && <span className="badge badge-new">Nuevo</span>}
        {producto.descuento && (
          <span className="badge badge-discount">-{producto.descuento}%</span>
        )}
        {!producto.stock && <span className="badge badge-out">Agotado</span>}
      </div>

      {/* Imagen */}
      <Link to={`/producto/${producto.id}`} className="product-image-link">
        <div className="product-image">
          <img src={producto.imagen} alt={producto.nombre} />
          <div className="product-overlay">
            <button className="quick-view-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              Vista rápida
            </button>
          </div>
        </div>
      </Link>

      {/* Contenido */}
      <div className="product-content">
        <Link to={`/producto/${producto.id}`} className="product-name">
          {producto.nombre}
        </Link>

        {/* Rating */}
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill={i < producto.rating ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          ))}
          <span className="rating-count">({producto.rating}.0)</span>
        </div>

        {/* Precio */}
        <div className="product-pricing">
          {producto.precioOriginal && (
            <span className="price-original">{formatPrice(producto.precioOriginal)}</span>
          )}
          <span className="price-current">{formatPrice(producto.precio)}</span>
        </div>

        {/* Acciones */}
        <div className="product-actions">
          <button
            className="btn-add-cart"
            disabled={!producto.stock}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {producto.stock ? 'Agregar al carrito' : 'Agotado'}
          </button>
          <button className="btn-favorite" aria-label="Agregar a favoritos">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}