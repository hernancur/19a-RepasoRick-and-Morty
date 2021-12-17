import {OBTENER_TODOS, FILTER} from './action'

const initialState = {
    personajes: [], // este estado es el que me traigo en Cardss.jsx -- arreglo de obj personajes
    detalle: {},
    filtrados: []
}

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case OBTENER_TODOS:
            return {
                ...state,
                personajes: action.payload,
                filtrados: action.payload
            }
        case FILTER:
           
          const filtered = action.payload.personajes.filter(e=>e.species===action.payload.filtro)
           return {
                ...state,
                personajes: filtered
            }
        default: 
            return state
    }
}


              