// Navbar.jsx
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function Navbar(){
  const { store, dispatch } = useGlobalReducer();
  return (
    <nav className="navbar navbar-expand bg-body-tertiary border-bottom">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#"
           onClick={e=>{e.preventDefault(); window.scrollTo({top:0,behavior:"smooth"});}}>
          Patricia Álvarez
        </a>
        <div className="ms-auto">
          {store.user ? (
            <div className="dropdown">
              <button className="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown">
                Mi cuenta
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><span className="dropdown-item-text">{store.user.name}</span></li>
                <li><hr className="dropdown-divider"/></li>
                <li><button className="dropdown-item" onClick={()=>dispatch({type:"logout"})}>Cerrar sesión</button></li>
              </ul>
            </div>
          ) : (
            <button className="btn btn-dark" onClick={()=>dispatch({type:"openAuth", mode:"register"})}>
              Registro
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
