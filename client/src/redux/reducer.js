import {OBTENER_TODOS} from './action'

const initialState = {
    personajes: [], // este estado es el que me traigo en Cardss.jsx -- arreglo de obj personajes
    detalle: {}
}

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case OBTENER_TODOS:
            return {
                ...state,
                personajes: action.payload
            }
        default: 
            return state
    }
}