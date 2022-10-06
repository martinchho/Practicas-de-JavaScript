//This (solo)
// se refiere a un objeto global. Por ejemplo: 

let x = this;

// This (en un metodo)
//es una forma de referirse a un objeto. Por ejemplo, en este caso, se utilizaria this en vez del objeto 'reservacion'

const reservacion = { //las llaves indican la creacion de un objeto
    nombre: 'Juan',
    apellido: 'De la torre',
    total: 5000,
    pagado: false,
    informacion: function() { //es importante utilizar function antes que arrow function porque el arrow function no hace referencia al objeto y dara error
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
        //en este caso, this hace referencia al objeto al que esta mandando a llamar, es decir this hace referencia al mismo objeto
    }
}

//console.log(reservacion.nombre); aqui indicamos que queremos acceder a la caracteristica nombre del objeto

const reservacion2 = {
    nombre: 'Pedro',
    apellido: 'De la torre',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();