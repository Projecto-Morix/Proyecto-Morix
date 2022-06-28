import LoginC from './../components/LoginC';
import LoginCSS from './../css/login.module.css';

function Login() {
  return (
    <div className="main-container">
      <main>
        <div className={LoginCSS.login}>
          <div className={LoginCSS.loginPanel}>
            <div className={LoginCSS.loginHeader}>
              <div className={LoginCSS.headerTitle}>Bienvenido</div>
              <div className={LoginCSS.headerSubtitle}>Iniciar Sesión con tu Cuenta</div>
          </div>
          <LoginC/>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Login;
