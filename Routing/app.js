const http = require('http')
const cursos = require('./cursos')

// Lo que el servidor hará cuando reciba una solicitud
const servidor = http.createServer((req, res) => {
    const metodo = req.method;
    switch (metodo) {
        case 'GET':
            return manejarSolicitudGET(req, res)
        case 'POST':
            console.log('llego')
            return manejarSolicitudPOST(req, res);
        default:
            res.statusCode = 501
            res.end('El método no puede ser manejado por el servidor')
    }
});

function manejarSolicitudGET(req, res) {
    const path = req.url;

    if (path === '/') {
        res.writeHead(200, { 'Content-type': 'application/json' })
        res.statusCode = 200; //La solicitud se procesó bien
        return res.end('Bienvenidos a mi primer servidor')
    }
    else if (path === '/cursos') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos)); //Convertimos el objeto JavaScript a formato JSON
    }
    else if (path === '/cursos/programacion') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }

    res.statusCode = 404
    res.end('La solicitud no existe')
}

function manejarSolicitudPOST(req, res) {
    console.log('entro')
    const path = req.url;
    console.log('entro')

    if (path === '/cursos/programacion') {
        console.log('entro')

        let cuerpo = '';
        // Lo que hará el servidor cuando reciba unos datos
        req.on('data', contenido => {
            cuerpo += contenido.toString();
        })

        req.on('end', () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);
            res.end('Solicitud POST en el path /cursos/programacion');
        });
    }
}

const puerto = 3000

servidor.listen(puerto, () => {
    console.log(`El servidor está escuchando en el puerto ${puerto}`);
})
