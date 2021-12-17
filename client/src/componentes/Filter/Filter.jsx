import React from 'react'
import {useDispatch} from 'react-redux'
import {filtrarSpecie, obtener} from '../../redux/action'

export default function Filter({personajes}) {
    const dispatch = useDispatch()

    function handleChange(e){
        
        dispatch(obtener())
       if(e.target.value!== "reset"){
        console.log(e.target.value)
          dispatch( filtrarSpecie(personajes, e.target.value))
        }
    }


    return (
        <div>
           
            <span>filter by Specie</span>
           <select name="filter" onChange={handleChange} >
          <option value="reset"> reset </option>        
          <option value="Human"> human </option> 
          <option value="Alien"> alien </option>      
          </select>
          
        </div>
    )
}