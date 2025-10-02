import React from "react";

const ContentsStrip = () => {
    return (
        <section className="section strip my-3">
            <div className="container-narrow">
                <div className="row g-2 text-center text-md-start">
                    <div className="col"><a href="#sobre-mi">SOBRE MÍ</a></div>
                    <div className="col"><a href="#experiencia">EXPERIENCIA</a></div>
                    <div className="col"><a href="#tecnologias">TECNOLOGÍAS</a></div>
                    <div className="col"><a href="#proyectos">PROYECTOS</a></div>
                    <div className="col d-none d-md-block"><a href="#contacto">CONTACTO</a></div>
                </div>
            </div>
        </section>
    );
};

export default ContentsStrip;
