const axios = require('axios')
const { Episode } = require('../db')

 function getEpisodes(req, res, next){
    //https://rickandmortyapi.com/api/episode
    axios.get("https://rickandmortyapi.com/api/episode")
    .then(episodes=>{
        let dbEpisodes= episodes.data.results.map(elem=> {return {id: elem.id, name: elem.episode}})
 
        dbEpisodes.forEach(e=>{
            Episode.findOrCreate({where:{ id: e.id, name: e.name }})
        })
        // res.send("se Cargó exitosamente la DB de Episodes")
    })
    .catch(e=> console.log(e)) 
       
}

module.exports={
    getEpisodes
}