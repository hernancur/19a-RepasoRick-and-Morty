const axios = require('axios')
const { Character, Episodes } = require('../db')


const getAll = async (req,res, next) => {
    // https://rickandmortyapi.com/api/character
    try {
        // pedido a la api
        const pedido = await axios.get('https://rickandmortyapi.com/api/character')
        // pedido a la base de datos
        const pedidoBaseDatos = await Character.findAll({include: Episodes})
        if(pedido || pedidoBaseDatos){
            // este signo de pregunta se llama "optional chaining", pregunta por la parte izquierda, Y SI EXISTE, continua la parte derecha.
            let aux = pedido.data.results?.map(pj => {
                return {
                    name: pj.name,
                    species: pj.species,
                    origen: pj.origin.name,
                    imagen: pj.image,
                    episodes: pj.episode
                }
            })
            // es6, spread operator, "...aux", significa "agarro todo lo que hay dentro de aux"
            let final = [ ...pedidoBaseDatos, ...aux]

            res.send(final)
        }else{
            res.json({message: "Error, algo salio mal"})
        }
    } catch (e) {
        next(e)
    }

}

const postCharacter = async (req,res) => {
    
    const {personaje} = req.body
    if(personaje){
        
        try {
            
            let nuevo = await Character.create(personaje)

            if(nuevo) res.json({message: "Creado correctamente", data: nuevo})
            else res.json({message: "Error, por alguna razon no se pudo crear, fijate mejor"})

            // falta hacer las relaciones con los episodios, ESTO SE HACE MIERCOLES 15/12/2021

        } catch (e) {
            res.send(e)
        }

    }else{
        res.json({message: "Error, no viene el personaje en el body, arreglalo ;)"})
    }

}

// body, query, params

module.exports = {
    getAll,
    postCharacter
}