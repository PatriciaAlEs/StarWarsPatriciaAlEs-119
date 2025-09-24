export const initialStore=()=>{
  return{
    message: null,

    personajes: [],
    planetas: [],
    vehiculos: [],

    detalles: {},

    favoritos: [],
    
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    
    case 'GET_PEOPLE':    return { ...store, personajes: action.payload };
    case 'GET_PLANETS':   return { ...store, planetas: action.payload };
    case 'GET_VEHICLES':  return { ...store, vehiculos: action.payload };

    
    case 'GET_DETALLE':
      return {
        ...store,
        detalles: {
          ...store.detalles,
          [action.payload.tipo]: action.payload.data
        }
      };

    case 'SET_FAVORITO':
      return {  
        ...store,
        favoritos: store.favoritos.includes(action.payload) ? 
        store.favoritos.filter(item => item !== action.payload) : 
        [...store.favoritos, action.payload]
      };

    case 'DELETE_FAVORITO':
      return {
        ...store,
        favoritos: store.favoritos.filter(item => item !== action.payload)
      };
    default:
      throw Error('Unknown action.');
  }    
}
