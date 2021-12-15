const { Router } = require('express')
const { getEpisodes} = require('../controlador/Episodes.js')

const router = Router()

// todas las request que lleguen a este archivo, es porque antes dicen:
// "http://localhost:3001/episodes/"
router.get('/getEpisodes', getEpisodes)



module.exports = router
