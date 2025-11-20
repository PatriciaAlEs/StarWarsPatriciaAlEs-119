export default function Hero() {

  return (
    <section id="top" className="hero my-6 section">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 space-y-4">
            <span className="tag">Portafolio · 2025</span>
            <h1 className="title mt-2">PORTAFOLIO</h1>
            <p className="text-lg md:text-xl font-semibold text-white/90">
              Full-Stack Developer — React · Flask · SQLAlchemy · JWT · WooCommerce
            </p>

            <p className="text-white/80 leading-relaxed">
              Construyo experiencias web claras, rápidas y mantenibles. Aquí verás
              proyectos reales, stack técnico y casos prácticos.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                className="inline-flex items-center px-6 py-3 bg-white text-green-hero font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                href="https://drive.google.com/uc?export=download&id=1thS8XpNQfm3dktvUke_8ccksko_lIFPt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar CV
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center">
            <img
              className="photo mx-auto"
              src="src/assets/img/Patricia Alvarez.jpg"
              alt="Patricia Álvarez"
            />
          </div>
        </div>
      </div>
    </section>

  );
}
