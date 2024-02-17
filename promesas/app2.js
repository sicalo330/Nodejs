const estatusPedido = () => {
    //Tendrá el 50% de probabilidad de sacar true o false
    return Math.random() < 0.5;
};

const miPedidoPizza = new Promise((resolve,reject) => {
    setTimeout(() => {
        if(estatusPedido()){
            resolve('Pedido exitoso')
        }else{
            reject('Ocurrio un error')
        }
    },3000);
})

const manejarPedido = (mensajeConfirmacion) => {
    console.log(mensajeConfirmacion)
}

const rechazarPedido = (mensajeError) => {
    console.log(mensajeError)
}

miPedidoPizza.then(manejarPedido, rechazarPedido)

//Otra forma de hacer lo de arriba
miPedidoPizza
    .then((mensajeConfirmacion) => {
        console.log(mensajeConfirmacion)
    })
    .catch((mensajeError) => {
        console.log(mensajeError)
    })