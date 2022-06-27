import LoginC from './../components/LoginC';
import './../css/login.css';

function Login() {
  return (
    <main>
        <div className="login-panel">
          <div className="login-header">
            <div className="header-title">Bienvenido</div>
            <div className="header-subtitle">Iniciar Sesión con tu Cuenta</div>
        </div>
        <LoginC/>
      </div>
    </main>
  );
}
export default Login;
