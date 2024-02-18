const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

//Este método extrae únicamente el nombre del host
console.log(miURL.hostname)//www.ejemplo.org

//pathname extrae los /... que siguen
console.log(miURL.pathname)

//Extrae los valores de la URL
console.log(miURL.searchParams)

console.log(typeof miURL.searchParams)

//Extrae el valor que se le indica en al URL
console.log(miURL.searchParams.get('ordenar'))



