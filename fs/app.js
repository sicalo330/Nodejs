const fs = require('fs');
/*
//Muestra el código de un archivo
fs.readFile('index.html', 'utf-8', (err,contenido) => {
    if(err){
        console.log(err)
    }else{
        console.log(contenido)
    }
});
//Da un nuevo nombre a un archivo ya existente
fs.rename('index.html','main.html', (err) => {
    if(err){
        throw err;
    }
    console.log('Nombre cambiado')
})
//Escribe contenido nuevo en un archivo, en este caso en el index.html
fs.writeFile('index.html', 'Contenido nuevo',(err) => {
    if(err){
        throw err;
    }
    console.log('contenido reemplazado exitosamente')
})
*/

//Esto elimimina un archivo
fs.unlink('main.html',(err) => {
    if(err){
        throw err;
    }
    console.log('Archivo eliminado  ')
});