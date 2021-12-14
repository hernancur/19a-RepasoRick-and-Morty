const { Router } = require('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Characters = require('./Characters.js')
const Episodes = require('./Episodes.js')

const router = Router()

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);)
router.use('/character', Characters)
router.use('/episodes', Episodes)



module.exports = router
