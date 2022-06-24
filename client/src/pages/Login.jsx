import LoginC from './components/LoginC';
import './../css/login.css';
function Login() {
  return (
    <main className='login-main-container'>
        <div class="login-panel">
          <div class="login-header">
            <div class="header-title">Bienvenido</div>
            <div class="header-subtitle">Iniciar Sesión con tu Cuenta</div>
        </div>
        <LoginC/>
      </div>
    </main>
  );
}
export default Login;
