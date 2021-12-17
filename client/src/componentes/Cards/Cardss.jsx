import React, { useEffect } from 'react'
import Individual from './Individual'
import Filter from '../Filter/Filter'
import {useSelector, useDispatch} from 'react-redux'
import {obtener} from '../../redux/action'


export default function Cards(){

    const dispatch = useDispatch()
    const estadoSoloPersonajes = useSelector(state => state.personajes) // personajes: [{}, {}]
   // const filtrados=useSelector(state => state.filtrados)
    useEffect(()=>{
        dispatch(obtener())

    }, [])
    console.log(estadoSoloPersonajes)
    return (
        <div>
            <h2> Personajes de la serie Rick & Morty </h2>
            <Filter personajes={estadoSoloPersonajes}/>
            {estadoSoloPersonajes.length && estadoSoloPersonajes.map((personaje, key) =>
            <Individual key={key} name={personaje.name} species={personaje.species} imagen={personaje.imagen} />    
            )}
        </div>
    )
}