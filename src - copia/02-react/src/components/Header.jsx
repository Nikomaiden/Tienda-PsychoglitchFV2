import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "../css/header.css";
import { useAuthStore } from "../store/authStore";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useAuthStore();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/login");
  };

  // Bloquear scroll
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMenuOpen]);

  // Cerrar en resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) closeMenu();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Cerrar con Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMenuOpen) closeMenu();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    document.title = "PSYCHOGLITCH - Tu tienda de videojuegos y tecnología";
  }, []);

  return (
    <header className="header">

      {/* Botón Hamburguesa */}
      <button 
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Menú de navegación"
        aria-expanded={isMenuOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

      {/* Logo */}
      <Link to="/" className="logo" onClick={closeMenu}>
        <span className="logo-text">PSYCHOGLITCH</span>
      </Link>

      {/* Menú lateral */}
      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
        <div className="nav-header">
          <button className="close-btn" onClick={closeMenu}>✕</button>
        </div>

        <div className="nav-content">
          <Link to="/" className="nav-link" onClick={closeMenu}>Inicio</Link>
          <Link to="/catalogo" className="nav-link" onClick={closeMenu}>Catálogo</Link>
          <Link to="/juegos" className="nav-link" onClick={closeMenu}>Juegos</Link>
          <Link to="/consolas" className="nav-link" onClick={closeMenu}>Consolas</Link>
          <Link to="/tecnologia" className="nav-link" onClick={closeMenu}>Tecnología</Link>
          <Link to="/ofertas" className="nav-link ofertas" onClick={closeMenu}>Ofertas 🔥</Link>
        </div>

        {/* 🔥 LOGIN DINÁMICO MOBILE */}
        <div className="nav-footer">
          {!isLoggedIn ? (
            <Link to="/login" className="mobile-login-btn" onClick={closeMenu}>
              Iniciar sesión
            </Link>
          ) : (
            <button onClick={handleLogout} className="mobile-login-btn logout">
              Cerrar sesión
            </button>
          )}
        </div>
      </nav>

      {/* Acciones desktop */}
      <nav>
        <div className="header-actions">

          {/* 🔥 LOGIN DINÁMICO DESKTOP */}
          {!isLoggedIn ? (
            <Link to="/login" className="login-btn">
              Iniciar sesión
            </Link>
          ) : (
            <button onClick={handleLogout} className="login-btn logout">
              Cerrar sesión
            </button>
          )}

          <div className="search-form">
            <input type="search" className="search-input" placeholder="Buscar productos..." />
          </div>
        </div>
      </nav>

      <div className="header-icons">
        <Link to="/favoritos" className="icon-link desktop-only">❤</Link>
      </div>

    </header>
  );
}

export default Header;
