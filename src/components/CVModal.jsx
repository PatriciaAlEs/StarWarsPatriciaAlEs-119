import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function CVModal(){
  const { store, dispatch } = useGlobalReducer();
  return (
    <div className={`modal fade ${store.ui.cvOpen ? "show d-block" : ""}`} tabIndex="-1" onClick={()=>dispatch({type:"closeCV"})}>
      <div className="modal-dialog modal-lg modal-dialog-centered" onClick={e=>e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">CV (resumen)</h5>
            <button className="btn-close" onClick={()=>dispatch({type:"closeCV"})}/>
          </div>
          <div className="modal-body">
            <ul className="list-unstyled mb-0">
              <li><strong>Stack:</strong> React, Flask, SQLAlchemy, JWT, WordPress/WooCommerce</li>
              <li><strong>Experiencia:</strong> TA en 4Geeks, proyectos freelance e-commerce</li>
              <li><strong>Foco:</strong> buenas prácticas, DX, accesibilidad y rendimiento</li>
            </ul>
          </div>
        </div>
      </div>
      {store.ui.cvOpen && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}
