const http = require('http')

const servidor = http.createServer((req,res) => {
    console.log('===> req(respuesta))');
    console.log(res)
    res.setHeader('content-type','aplication/json')
    console.log(res.getHeaders())
    res.end('Hola mundo')
    /*
    console.log(res.statusCode)//200 ok
    res.statusCode = 404;
    console.log(res.statusCode)
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
    res.end('hola mundo')
    */
    //req.url muestra el lugar en el que está, si es el inicio sería /
    //si es http://localhost:3000/freecodeCamp en consola se muestra /freecodeCamp
    //req.method muestra el método que estamos generando, en este caso sería unicamente un get
});

const puerto = 3000

servidor.listen(puerto, () => {
    console.log(`El servidor está escuchando en el puerto ${puerto}`)
})