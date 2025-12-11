import React from "react";
import "../css/Login.css";

function Login() {
  return (
    <div className="login-page">
      <main>
        <section className="login-container">
          <h1>Iniciar sesión o Crear Cuenta</h1>
          <p>
            Bienvenido de nuevo a <strong>PSYCHOGLITCH</strong>. Ingresa tus datos para continuar.
          </p>

          <form>
            <input type="email" placeholder="Correo electrónico" required />
            <input type="password" placeholder="Contraseña" required />

            <a href="#" className="forgot">
              ¿Olvidaste tu Contraseña?
            </a>

            <button type="submit">Ingresar</button>
          </form>

          <div className="divider">
            <span>continúa con</span>
          </div>

          <div className="social-login">
            <button className="google">Google</button>
            <button className="facebook">Facebook</button>
            <button className="x">X</button>
          </div>

          <p className="create-account">
            ¿No tienes una cuenta? <a href="#">Crear cuenta</a>
          </p>
        </section>
      </main>
    </div>
   
  );
}

export default Login;
