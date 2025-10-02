// TechGrid.jsx
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const TechGrid = () => {
  const { store, actions } = useGlobalReducer();

  useEffect(() => { actions.loadTechs(); }, []);

  return (
    <section id="tecnologias" className="my-5">
      <div className="container-narrow">
        <h2 className="section-title">TECNOLOGÍAS</h2>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4">
          {store.techs.map(t => (
            <div className="col" key={t.id}>
              <div className="tech-card h-100">
                <img
                  className="tech-icon"
                  src={t.icon_url} // tu API ya devuelve la URL
                  alt={t.name}
                />
                <div className="fw-semibold small mt-2">{t.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechGrid;
