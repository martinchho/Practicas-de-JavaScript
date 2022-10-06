// POO 

/** Object Literal */
//todos los miembros de un object literal son publicos
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
// el objeto constructor sirve para decirle a las clases como queres que se construyan sus instancias
// el objeto constructor se realizar declarando la funcion, sus parametros, y luego en el desarrollo de la funcion, declararlos como this.(parametro)
function Cliente(nombre, apellido) { //parametros
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}


function Producto(nombre, precio, color) {
    this.nombre = nombre; //hace referencia a los valores del objeto
    this.precio = precio;
    this.color = color;
}
// Propotype: Crear funciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

//instancias, indica new
//a traves de las instancias, se crean nuevos objetos, o se instancian como bien dice el nombre. En el parentesis, se indican sus atributos
const producto2 = new Producto('Monitor Curvo de 49"', 800, 'negro'); //argumentos
const producto3 = new Producto('Laptop', 300, 'gris');
const producto4 = new Producto('Joystick', 50, 'azul');
const cliente = new Cliente('Juan', 'De la torre');


console.log(producto2);
console.log(producto2.formatearProducto() );
console.log(producto3.formatearProducto() );

