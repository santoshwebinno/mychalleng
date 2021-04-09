var name = require('./package.json').name
require('productionize')(name)
<<<<<<< HEAD
/* revers Anil */
var server = require('./lib/server')
var port = process.env.PORT || 5000
server().listen(port)
console.log(name, 'listening on port reverse', port)
=======
/* echo Anil */
var server = require('./lib/server')
var port = process.env.PORT || 5000
server().listen(port)
console.log(name, 'listening on port echo', port)
>>>>>>> d141df52ad61eb3a75dc2cc684427f208d24e48c
