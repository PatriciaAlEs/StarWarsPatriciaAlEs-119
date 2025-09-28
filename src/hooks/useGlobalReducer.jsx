import { createContext, useContext, useReducer, useMemo } from "react";
import { initialStore, storeReducer, actions } from "../store";

const Ctx = createContext();
export default function useGlobalReducer(){ return useContext(Ctx); }

export function Provider({children}){
  const [state, dispatch] = useReducer(storeReducer, initialStore);
  const get = () => state;
  const set = (action) => dispatch(action);
  const acts = useMemo(() => actions(get, set), [state]);
  return <Ctx.Provider value={{store:state, dispatch, actions:acts}}>{children}</Ctx.Provider>;
}
