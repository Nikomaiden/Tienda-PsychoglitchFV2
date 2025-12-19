import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ← Importar Link
import "../css/header.css";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }; 

    // useEffect para bloquear scroll
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    // useEffect para cerrar menú en resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                closeMenu();
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    // useEffect para tecla Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMenu();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
        }, [isMenuOpen]);
    useEffect(() => {
        document.title = "PSYCHOGLITCH - Tu tienda de videojuegos y tecnología";
      }, []);
  
    return (
    <header className="header">
          {/* Botón Hamburguesa */}
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Menú de navegación"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {/* Overlay */}
          {isMenuOpen && (
            <div className="menu-overlay" onClick={closeMenu}></div>
          )}

          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="logo-icon"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12.707 14.293l3 3a1 1 0 0 1 .293 .707v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a1 1 0 0 1 .293 -.707l3 -3a1 1 0 0 1 1.414 0m-6.707 -6.293a1 1 0 0 1 .707 .293l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1 -.707 .293h-2a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2zm14 0a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-2a1 1 0 0 1 -.707 -.293l-3 -3a1 1 0 0 1 0 -1.414l3 -3a1 1 0 0 1 .707 -.293zm-6 -6a2 2 0 0 1 2 2v2a1 1 0 0 1 -.293 .707l-3 3a1 1 0 0 1 -1.414 0l-3 -3a1 1 0 0 1 -.293 -.707v-2a2 2 0 0 1 2 -2z" />
            </svg>
            <span className="logo-text">PSYCHOGLITCH</span>
          </Link>

          {/* Navegación */}
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <div className="nav-header">
              <span className="nav-title"></span>
              <button 
                className="close-btn" 
                onClick={closeMenu}
                aria-label="Cerrar menú"
              >
                ✕
              </button>
            </div>

            <div className="nav-content">
              <span className="nav-label">Categorías</span>
              
              <Link to="/" className="nav-link" onClick={closeMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Inicio
              </Link>

              <Link to="/catalogo" className="nav-link" onClick={closeMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                Catálogo
              </Link>

              <Link to="/juegos" className="nav-link" onClick={closeMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.707 14.293l3 3a1 1 0 0 1 .293 .707v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a1 1 0 0 1 .293 -.707l3 -3a1 1 0 0 1 1.414 0" />
                </svg>
                Juegos
              </Link>

              <Link to="/consolas" className="nav-link" onClick={closeMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="15" rx="2" />
                  <polyline points="17 2 12 7 7 2" />
                </svg>
                Consolas
              </Link>

              <Link to="/tecnologia" className="nav-link" onClick={closeMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                Tecnología
              </Link>

              <Link to="/ofertas" className="nav-link ofertas" onClick={closeMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                Ofertas 🔥
              </Link>
            </div>

            <div className="nav-footer">
              <Link to="/login" className="mobile-login-btn" onClick={closeMenu}>
                Iniciar sesión
              </Link>
            </div>
          </nav>

          {/* Búsqueda y Login */}
          <div className="header-actions">
            <Link to="/login" className="login-btn">
              Iniciar sesión
            </Link>
            
            <div className="search-form">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="search-icon"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
              <input 
                type="search" 
                className="search-input" 
                placeholder="Buscar productos..." 
                aria-label="Buscar productos"
              />
            </div>
          </div>

          {/* Carrito y Favoritos */}
          <div className="header-icons">
            <Link to="/carrito" className="icon-link" aria-label="Carrito de compras">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
              </svg>
              <span className="cart-badge">0</span>
            </Link>

            <Link to="/favoritos" className="icon-link desktop-only" aria-label="Favoritos">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            </Link>
          </div>
    </header>
  );
}

export default Header;