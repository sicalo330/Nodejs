const http = require('http')

//Vamos a almacenar el servidor, req es la soolicitud y res es al respuesta
//.end() ponemos en el parentesis lo que queremos mandar
const servidor = http.createServer((req,res) => {
    res.end('hola mundo')
});

//3000 es el puerto en el que va a escuchar
const puerto = 3000

servidor.listen(puerto, () => {
    console.log('El servidor está escuchando')
})