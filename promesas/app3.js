const { error } = require("console");

function ordenarProducto(producto){
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto} de la casa`);
        setTimeout(() => {
            if(producto === 'taza'){
                resolve('Ordenando un producto de la casa')
            }
            else{
                reject('Este producto no está dispnible actualmente')
            }
        }, 1000)
    })
}

function procesarPedido(respuesta){
    return new Promise(resolve => {
        console.log('Procesando respuesta');
        console.log(`La respuesta fue ${respuesta}`);
        setTimeout(() => {
            resolve('Gracias por la compra')
        },1000)
    });
}
/*

ordenarProducto('taza')
    .then(respuesta => {
        console.log('Respuesta recibida');
        console.log(respuesta)

        return procesarPedido(respuesta)
    })
    .then(respuestaProcesada => {
        console.log(respuestaProcesada)
    })
    .catch(error => {
        console.log(error)
    })
*/

async function realizarPedido(producto){
    try{
        const respuesta =  await ordenarProducto(producto);
        console.log('Respuesta recibida')
        const respuestaProcesada = await procesarPedido(respuesta)
        console.log(respuestaProcesada)
    }catch(error){
        console.log(error)
    }
}

realizarPedido('taza')