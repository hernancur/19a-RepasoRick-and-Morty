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

// con FORCE: TRUE se borran y se vuelven a crear todas las tablas al reiniciar el servidor
// con FORCE: FALSE no se borra nada si ya existe.

// si estoy desarrollando y tengo cosas creadas que necesito, lo dejo en false

conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('Listening at 3001') // eslint-disable-line no-console
  })
})
