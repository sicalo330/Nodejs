const EventEmitter = require('events')

//Creamos una instancia de la clase para crear eventos
const emisorProductos = new EventEmitter()

//Se llama on(), cuando ocurra el evento compra, se define una función flecha, es decir que hace algo
emisorProductos.on('compra', (total,numProductos) => {
    console.log(`Se realizó una compra por ${total} dolares`)
    console.log(`Se copró un total de ${numProductos} productos`)

});

//Se emitirá el evento compra
emisorProductos.emit('compra',50, 2)