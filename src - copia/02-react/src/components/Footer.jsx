import React from "react";
import "../css/footer.css";

function Footer() {
    return (
<footer>
  <div className="footer-container">
    <div className="section-footer">
      <div className="brand">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={28}
          height={28}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12.707 14.293l3 3a1 1 0 0 1 .293 .707v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a1 1 0 0 1 .293 -.707l3 -3a1 1 0 0 1 1.414 0m-6.707 -6.293a1 1 0 0 1 .707 .293l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1 -.707 .293h-2a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2zm14 0a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-2a1 1 0 0 1 -.707 -.293l-3 -3a1 1 0 0 1 0 -1.414l3 -3a1 1 0 0 1 .707 -.293zm-6 -6a2 2 0 0 1 2 2v2a1 1 0 0 1 -.293 .707l-3 3a1 1 0 0 1 -1.414 0l-3 -3a1 1 0 0 1 -.293 -.707v-2a2 2 0 0 1 2 -2z" />
        </svg>
        <strong>PSYCHOGLITCH</strong>
      </div>
    </div>
    <div className="text">
      <h3>Sobre nosotros</h3>
      <p>
        <strong>Bienvenido a Psychoglitch</strong>, tu tienda virtual gamer.
        Encuentra lo mejor en tecnología, accesorios y productos diseñados para
        llevar tu experiencia de juego al siguiente nivel. Potencia tu mundo
        digital con estilo, rendimiento y actitud.
      </p>
    </div>
    <div className="section-enlaces">
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Juegos</a>
        </li>
        <li>
          <a href="#">Consolas</a>
        </li>
        <li>
          <a href="#">Tecnología</a>
        </li>
        <li>
          <a href="#">Ofertas</a>
        </li>
      </ul>
      <div className="section-redes">
        <h3>Síguenos en nuestras redes</h3>
        <div className="section-button">
          <a
            href="https://www.facebook.com/?locale=es_LA"
            target="_blank"
            rel="noopener norferr"
            className="social-btn fb"
          >
            Facebook
          </a>
          <a
            href="https://x.com/?lang=es"
            target="_blank"
            rel="noopener norferr"
            className="social-btn ins"
          >
            X (Twitter)
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="section-final">
    <p>© 2025 Psychoglitch. Todos los derechos reservados.</p>
  </div>
</footer>
      )
    }
export default Footer;