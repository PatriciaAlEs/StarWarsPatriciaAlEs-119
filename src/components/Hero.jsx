import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function Hero(){
  const { dispatch } = useGlobalReducer();

  return (
    <section className="hero my-4">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <span className="tag">Portafolio · 2025</span>
            <h1 className="title mt-2">PORTAFOLIO</h1>
            <p className="subtitle">
              Full-Stack Developer — React · Flask · SQLAlchemy · JWT · WooCommerce
            </p>

            <p className="mt-3 mb-4">
              Construyo experiencias web claras, rápidas y mantenibles. Aquí verás
              proyectos reales, stack técnico y casos prácticos.
            </p>

            <div className="d-flex flex-wrap gap-2">
              <a className="btn btn-light" href="/Patricia_Alvarez_CV.pdf" download>Descargar CV</a>
              <button className="btn btn-ghost" onClick={()=>dispatch({type:"openCV"})}>
                Ver CV resumido
              </button>
            </div>
          </div>

          <div className="col-12 col-lg-6 text-center order-1 order-lg-2">
            <img
              className="photo"
              src="src/assets/img/Patricia Alvarez.jpg" 
              alt="Patricia Álvarez"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
