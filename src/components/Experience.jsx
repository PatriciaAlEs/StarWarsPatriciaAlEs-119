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
                                Acompaño a estudiantes en su camino como desarrolladores, resolviendo dudas en mentorías, guiando debugging en proyectos con React y Flask, y revisando código para asegurar buenas prácticas. También apoyo en despliegues y en la organización de las entregas.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="ex-card">
                            <div className="ex-head">Freelance · E-commerce</div>
                            <div className="small text-muted mb-2">2024 — actual</div>
                            <p className="mb-0">
                                Desarrollo tiendas online con WordPress, WooCommerce y Elementor, adaptando el diseño a la identidad de cada cliente. Me encargo de la integración de pagos y envíos, personalización de plantillas y optimización de rendimiento (Core Web Vitals) para mejorar la experiencia de compra
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
