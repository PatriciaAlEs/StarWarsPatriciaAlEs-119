import React from "react";

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="split my-4">
      <div className="row g-0">

        {/* Lado verde con título */}
        <div className="col-12 col-lg-5 left d-flex align-items-center">
          <div className="box w-100">
            <h2 className="section-title text-white m-0">SOBRE MÍ</h2>
          </div>
        </div>

        {/* Lado rosa con descripción */}
        <div className="col-12 col-lg-7 right">
          <div className="box">
            <p className="mb-2">
              <strong>Patricia Álvarez</strong> · Full-Stack Developer & Teaching Assistant en 4Geeks Academy.
            </p>
            <p className="mb-2">
              Me apasiona construir experiencias web claras, rápidas y mantenibles. 
              Disfruto trabajando con <strong>React, Flask, SQLAlchemy, JWT y WooCommerce</strong>.
            </p>
            <p className="mb-0">
              Mi enfoque está en la arquitectura limpia, el diseño accesible y la creación de proyectos reales que conecten con las personas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
