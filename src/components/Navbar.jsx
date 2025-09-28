import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function Navbar(){
  const { store, dispatch } = useGlobalReducer();

  return (
    <nav className="navbar navbar-portfolio">
      <div className="container-narrow d-flex align-items-center justify-content-between">
        
        {/* Brand */}
        <a className="navbar-brand"
           href="#"
           onClick={e=>{e.preventDefault(); window.scrollTo({top:0,behavior:"smooth"});}}>
          Patricia Álvarez
        </a>

        {/* Links / acciones */}
        <div className="d-flex align-items-center gap-3">
          {!store.user ? (
            <>
              <button className="btn btn-auth login"
                      onClick={()=>dispatch({type:"openAuth", mode:"login"})}>
                Iniciar sesión
              </button>
              <button className="btn btn-auth register"
                      onClick={()=>dispatch({type:"openAuth", mode:"register"})}>
                Registro
              </button>
            </>
          ) : (
            <div className="dropdown">
              <button className="btn btn-auth login dropdown-toggle" data-bs-toggle="dropdown">
                {store.user.name}
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><button className="dropdown-item" onClick={()=>dispatch({type:"logout"})}>Cerrar sesión</button></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
