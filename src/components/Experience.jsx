import React from "react";

const Experience = () => {
  return (
    <section id="experiencia" className="my-4">
      <div className="container-narrow">
        <h2 className="section-title">EXPERIENCIA PROFESIONAL</h2>
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <div className="ex-card">
              <div className="ex-head">Teaching Assistant · 4Geeks</div>
              <div className="small text-muted mb-2">2024 — actual</div>
              <p className="mb-0">
                Mentorías, revisión de proyectos React/Flask, debugging y despliegues.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="ex-card">
              <div className="ex-head">Freelance · E-commerce</div>
              <div className="small text-muted mb-2">2024 — actual</div>
              <p className="mb-0">
                WooCommerce + Elementor, pagos/envíos, optimización CWV.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
