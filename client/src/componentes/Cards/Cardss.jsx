import React, { useEffect } from 'react'
import Individual from './Individual'
import {useSelector, useDispatch} from 'react-redux'
import {obtener} from '../../redux/action'


export default function Cards(){

    const dispatch = useDispatch()
    const estadoSoloPersonajes = useSelector(state => state.personajes) // personajes: [{}, {}]

    useEffect(()=>{
        dispatch(obtener())
    }, [dispatch])

    return (
        <div>
            <h2> Personajes de la serie Rick & Morty </h2>
            {estadoSoloPersonajes.length && estadoSoloPersonajes.map(personaje =>
                <Individual name={personaje.name} species={personaje.species} imagen={personaje.imagen} />    
            )}
        </div>
    )
}