let infoCurso = {
    "titulo":"Aprendienod node js",
    "numVistas":45642,
    "numLikes":2113,
    "temas":[
        "javaScript",
        "Node js"
    ],
    "esPublico":true
}

//objeto -> Cadena de caracteres
let infoCursoJson = JSON.stringify(infoCurso);

console.log(infoCursoJson);
console.log(typeof infoCursoJson)
//Cadena de caracteres -> objeto
let infoCursoObjeto = JSON.parse(infoCursoJson)

console.log(infoCursoObjeto)
console.log(typeof infoCursoObjeto)
