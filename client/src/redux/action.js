import axios from 'axios'

export const OBTENER_TODOS = "OBTENER TODOS"
export const RUTA_GET = "http://localhost:3001/character/get"

export function obtener(){
    return async function pedido(dispatch){
        let aux = await axios.get(RUTA_GET)
        return dispatch({
            type: OBTENER_TODOS,
            payload: aux.data
        })
    }
}

/*

fetch.get("http://localhost:3001/character/get").then(response => response.json()).then(respuestaFinal => dispatch())

*/