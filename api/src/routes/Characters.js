const { Router } = require('express')
// importamos las funciones del controlador
const { getAll, postCharacter} = require('../controlador/Characters.controller')

const router = Router()


// ------ localhost:3001/character/        -------    get

// GET
router.get('/get', getAll)

// POST
router.post('/create', postCharacter)

// PUT


// DELETE



module.exports = router
