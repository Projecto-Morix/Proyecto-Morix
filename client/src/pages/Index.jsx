import IndexCSS from '../css/index.module.css';

function IndexP() {
  return (
    <div className={IndexCSS.index}>
      <section className={IndexCSS.welcome}>
        <div className={IndexCSS.welcomeText}>
        <h1 className={IndexCSS.welcomeTitle}>Tu Boleta a un solo click</h1>
        <p>Y más rápido que nunca gracias a Morix</p>
        </div>
        <div className={IndexCSS.welcomeImg}></div>
      </section>
      <section className={IndexCSS.aboutUs}>

      </section>
      <section className={IndexCSS.contactUs}>

      </section>
    </div>
    )
}

export default IndexP