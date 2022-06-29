import IndexCSS from '../css/index.module.css';

function IndexP() {
  return (
    <div className={IndexCSS.index}>
      <section className={IndexCSS.welcome}>
        <div className={IndexCSS.welcomeText}>
          <h1 className={IndexCSS.welcomeTitle}>Tu Boleta a un solo click de distancia</h1>
          <p>Y más rápido que nunca gracias a Morix</p>
        </div>
        <div className={IndexCSS.welcomeImg}></div>
      </section>
      <section className={IndexCSS.aboutUs}>
        <div className={IndexCSS.aboutUsImg}></div>
        <div className={IndexCSS.aboutUsText}>
          <h2 className={IndexCSS.aboutUsTitle}>Sobre nosotros</h2>
          <p>Somos un grupo de estudiantes de educación secundaria con el propósito de hacer un sistema basado en ventas y publicaciones de taquillas y boletas para eventos y ocaciones especiales.</p>
        </div>
      </section>
      <section className={IndexCSS.contactUs}>
          <div className={IndexCSS.contactUsText}>
            <h2 className={IndexCSS.contactUsTitle}>Contactanos</h2>
            <a>Contacto</a>
          </div>
          <div className={IndexCSS.contactUsImg}></div>
      </section>
    </div>
    )
}

export default IndexP