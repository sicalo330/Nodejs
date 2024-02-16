/*

for(let i = 0; i < process.argv.length;i++){
    console.log(process.argv[i])
}

console.log(process.memoryUsage())
*/

/*
const os = require('os');
//Muestra el directorio principal del sistema operativo
console.log(os.homedir())
//Número de segundos desde que se encendió el PC
console.log(os.uptime())
//Muestra la información del usuario
console.log(os.userInfo())
 */

function mostrarTema(tema){
    console.log(`Estoy aprendiendo, ${tema}`)
}

setTimeout(mostrarTema,1000,'Node js')