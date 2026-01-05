import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../css/carrito.css';

function Carrito() {
  const [abierto, setAbierto] = useState(false);

  const [carrito, setCarrito] = useState([
    {
      id: 1,
      nombre: 'Teclado Mecánico RGB',
      precio: 250000,
      cantidad: 1,
      icono: '⌨️'
    },
    {
      id: 2,
      nombre: 'Audífonos Gamer',
      precio: 180000,
      cantidad: 2,
      icono: '🎧'
    }
  ]);

  useEffect(() => {
  }, [abierto]);


  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && abierto) {
        setAbierto(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [abierto]);

  const aumentar = (id) => {
    setCarrito(carrito =>
      carrito.map(item =>
        item.id === id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  };

  const disminuir = (id) => {
    setCarrito(carrito =>
      carrito.map(item =>
        item.id === id && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  const eliminar = (id) => {
    setCarrito(carrito => carrito.filter(item => item.id !== id));
  };

  const subtotal = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const iva = subtotal * 0.19;
  const total = subtotal + iva;

  return (
    <>
      <button 
        className="carrito-flotante" 
        onClick={() => setAbierto(true)} 
        title="Abrir carrito"
        aria-label="Abrir carrito de compras"
      >
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
        {carrito.length > 0 && (
          <span className="carrito-badge">{carrito.length}</span>
        )}
      </button>

      {/* OVERLAY */}
      {abierto && (
        <div className="carrito-overlay" onClick={() => setAbierto(false)} />
      )}

      {/* SIDEBAR */}
      <aside className={`carrito-sidebar ${abierto ? 'abierto' : ''}`}>
        <header className="carrito-header">
          <h2>Mi Carrito</h2>
          <button 
            className="btn-cerrar" 
            onClick={() => setAbierto(false)} 
            aria-label="Cerrar carrito"
          >
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
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </header>

        {carrito.length === 0 ? (
          <div className="carrito-vacio">
            <div className="icono-vacio">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
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
            </div>
            <p>Tu carrito está vacío</p>
            <Link to="/catalogo" className="btn-explorar" onClick={() => setAbierto(false)}>
              Explorar productos
            </Link>
          </div>
        ) : (
          <>
            <div className="carrito-items">
              {carrito.map(item => (
                <div key={item.id} className="carrito-item">
                  <div className="item-icono">{item.icono}</div>

                  <div className="item-info">
                    <h4>{item.nombre}</h4>
                    <p className="precio">
                      ${item.precio.toLocaleString('es-CO')}
                    </p>

                    <div className="cantidad-control">
                      <button onClick={() => disminuir(item.id)} aria-label="Disminuir cantidad">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l14 0" />
                        </svg>
                      </button>
                      <span>{item.cantidad}</span>
                      <button onClick={() => aumentar(item.id)} aria-label="Aumentar cantidad">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 5l0 14" />
                          <path d="M5 12l14 0" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="item-acciones">
                    <button
                      className="btn-eliminar"
                      onClick={() => eliminar(item.id)}
                      aria-label="Eliminar del carrito"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 7l16 0" />
                        <path d="M10 11l0 6" />
                        <path d="M14 11l0 6" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v1" />
                      </svg>
                    </button>

                    <p className="subtotal">
                      ${(item.precio * item.cantidad).toLocaleString('es-CO')}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <footer className="carrito-resumen">
              <div className="fila">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString('es-CO')}</span>
              </div>

              <div className="fila">
                <span>IVA (19%)</span>
                <span>${iva.toLocaleString('es-CO')}</span>
              </div>

              <div className="fila total">
                <span>Total</span>
                <span>${total.toLocaleString('es-CO')}</span>
              </div>

              <button className="btn-pagar">Finalizar compra</button>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}

export default Carrito;