
// Importing module
const chalk = require('chalk');
 
const moduloMatematicas = require("./modulos/controller");

//console.log(moduloMatematicas)
const multiplica =moduloMatematicas.multiplica(5,5)
console.log(multiplica)

const sum = moduloMatematicas.suma(12,90)
console.log(sum)
//console.log(module)
console.log(chalk.green(multiplica))
console.log(chalk.green(sum))
