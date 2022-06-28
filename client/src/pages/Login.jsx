<<<<<<< HEAD
import LoginC from './components/LoginC';
import './../css/login.css';
function Login() {
  return (
    <main className='login-main-container'>
        <div class="login-panel">
          <div class="login-header">
            <div class="header-title">Bienvenido</div>
            <div class="header-subtitle">Iniciar Sesión con tu Cuenta</div>
=======
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
>>>>>>> refs/remotes/origin/main
        </div>
      </main>
    </div>
  );
}
export default Login;
