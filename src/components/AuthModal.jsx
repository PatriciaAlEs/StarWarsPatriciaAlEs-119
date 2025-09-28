import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function AuthModal(){
  const { store, dispatch, actions } = useGlobalReducer();
  const [form, setForm] = useState({name:"", email:"", password:"", kind:"particular"});
  const mode = store.ui.authMode;

  const submit = async (e)=>{
    e.preventDefault();
    try{
      if(mode==="register") await actions.register(form);
      else await actions.login(form);
    }catch(err){ alert(err.message); }
  };

  return (
    <>
      <div className={`modal fade ${store.ui.authOpen ? "show d-block" : ""}`} tabIndex="-1" onClick={()=>dispatch({type:"closeAuth"})}>
        <div className="modal-dialog" onClick={e=>e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{mode==="register"?"Crear cuenta":"Iniciar sesión"}</h5>
              <button className="btn-close" onClick={()=>dispatch({type:"closeAuth"})}/>
            </div>
            <form onSubmit={submit}>
              <div className="modal-body">
                {mode==="register" && (
                  <div className="mb-2">
                    <label className="form-label">Nombre</label>
                    <input className="form-control" required value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
                  </div>
                )}
                <div className="mb-2">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" required value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
                </div>
                <div className="mb-2">
                  <label className="form-label">Contraseña</label>
                  <input type="password" className="form-control" required value={form.password} onChange={e=>setForm({...form, password:e.target.value})}/>
                </div>
                {mode==="register" && (
                  <div className="mb-2">
                    <label className="form-label">Tipo</label>
                    <select className="form-select" value={form.kind} onChange={e=>setForm({...form, kind:e.target.value})}>
                      <option value="particular">Particular</option>
                      <option value="empresa">Empresa</option>
                    </select>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button className="btn btn-dark" type="submit">{mode==="register"?"Registrarme":"Entrar"}</button>
                <button className="btn btn-outline-secondary" type="button"
                  onClick={()=>dispatch({type:"openAuth", mode: mode==="register"?"login":"register"})}>
                  {mode==="register"?"Tengo cuenta":"Crear cuenta"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {store.ui.authOpen && <div className="modal-backdrop fade show"></div>}
    </>
  );
}
