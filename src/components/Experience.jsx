import React from "react";

const Experience = () => {
    return (
        <section id="experiencia" className="my-12">
            <div className="container-narrow">
                <h2 className="section-title mb-8">EXPERIENCIA PROFESIONAL</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="ex-card group">
                        <div className="ex-head text-lg mb-2 group-hover:text-green-hero transition-colors duration-300">
                            Teaching Assistant · 4Geeks
                        </div>
                        <div className="text-sm text-gray-500 mb-4 font-medium">2024 — actual</div>
                        <p className="text-gray-700 leading-relaxed">
                            Acompaño a estudiantes en su camino como desarrolladores, resolviendo dudas en mentorías, guiando debugging en proyectos con React y Flask, y revisando código para asegurar buenas prácticas. También apoyo en despliegues y en la organización de las entregas.
                        </p>
                    </div>
                    <div className="ex-card group">
                        <div className="ex-head text-lg mb-2 group-hover:text-green-hero transition-colors duration-300">
                            Freelance · E-commerce
                        </div>
                        <div className="text-sm text-gray-500 mb-4 font-medium">2024 — actual</div>
                        <p className="text-gray-700 leading-relaxed">
                            Desarrollo tiendas online con WordPress, WooCommerce y Elementor, adaptando el diseño a la identidad de cada cliente. Me encargo de la integración de pagos y envíos, personalización de plantillas y optimización de rendimiento (Core Web Vitals) para mejorar la experiencia de compra
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
