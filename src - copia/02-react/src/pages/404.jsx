import React from 'react';
import { Link } from 'react-router-dom';
import '../css/404.css';

export function NotFoundPage() {
  return (
    <div className="not-found-page">
      {/* Fondo animado */}
      <div className="glitch-background">
        <div className="glitch-shape shape-1"></div>
        <div className="glitch-shape shape-2"></div>
        <div className="glitch-shape shape-3"></div>
      </div>

      {/* Contenido */}
      <div className="not-found-content">
        {/* Número 404 con efecto glitch */}
        <div className="error-code" data-text="404">
          404
        </div>

        {/* Título */}
        <h1 className="error-title">
          <span className="glitch-text" data-text="¡PÁGINA NO ENCONTRADA!">
            ¡PÁGINA NO ENCONTRADA!
          </span>
        </h1>

        {/* Descripción */}
        <p className="error-description">
          Lo sentimos, la página que buscas ha sido eliminada, movida o nunca existió. 
          Es posible que hayas encontrado un glitch en la matrix... 👾
        </p>

        {/* Ilustración/Icono */}
        <div className="error-illustration">
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        {/* Botones de acción */}
        <div className="error-actions">
          <Link to="/" className="btn-primary-404">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Volver al Inicio
          </Link>
          
          <Link to="/catalogo" className="btn-secondary-404">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            Ver Catálogo
          </Link>
        </div>

        {/* Enlaces útiles */}
        <div className="helpful-links">
          <p>Páginas que podrían interesarte:</p>
          <div className="quick-links">
            <Link to="/juegos">Juegos</Link>
            <Link to="/consolas">Consolas</Link>
            <Link to="/ofertas">Ofertas</Link>
            <Link to="/tecnologia">Tecnología</Link>
          </div>
        </div>
      </div>

      {/* Partículas decorativas */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    </div>
  );
}