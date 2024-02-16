//Es importante poner el ./ del archivo donde proviene
//Lo que hace esto es extraer el archivo indicado y guardarlo en saludo
//Lo que hace es guardar un objeto que tiene la función saludar de saludar.js y no la función en sí
const saludo = require("./saludos.js")
//En vez de traer todas las funciones, extraemos solo uno
const {saludarHolaMundo, saludar} = require('./saludos.js')

console.log(saludo.saludar("pepe"))
console.log(saludo.saludarHolaMundo())
console.log(saludarHolaMundo())
console.log(saludar('pepe'))


