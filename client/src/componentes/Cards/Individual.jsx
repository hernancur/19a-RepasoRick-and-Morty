import React from 'react'

export default function Individual({name, imagen, species}) {

    return (
        <div>
            <div>
                <h3> {name} </h3>
            </div>
            <div>
                <img src={imagen} alt="otro"/>
            </div>
            <div>
                <h6> {species} </h6>
            </div>
        </div>
    )
}