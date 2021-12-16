//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js')
const { conn } = require('./src/db.js')
const { Episode } = require('./src/db')
const { getEpisodes } = require('./src/controlador/Episodes')
// con FORCE: TRUE se borran y se vuelven a crear todas las tablas al reiniciar el servidor
// con FORCE: FALSE no se borra nada si ya existe.

// si estoy desarrollando y tengo cosas creadas que necesito, lo dejo en false

conn.sync({ force: false }).then(async () => {

  // logica 
  let aux = await Episode.findAll() // buscamos si hay algo en la tabla
  if(!aux.length){ // si no hay hago la recarga a la base de datos
    getEpisodes()
  }

  server.listen(3001, () => {
    console.log('Listening at 3001') // eslint-disable-line no-console
  })
})
