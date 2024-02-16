function saludar(nombre){
    return `hola, ${nombre}`;
}

function saludarHolaMundo(){
    return 'hola mundo';
}

//Estamos exportando las funciones

module.exports = {
    saludar:saludar,
    saludarHolaMundo:saludarHolaMundo
}