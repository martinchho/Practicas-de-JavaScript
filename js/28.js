// Classes
// las clases son objetos que nos sirven como molde para crear nuevos objetos
// entonces, a traves de las clases, podemos crear un nuevo objeto por completo
// en las clases es importante que el nombre de la misma empieze con mayúscula.

class Producto {
    constructor(nombre, precio) { // en este caso, los parametros se lo pasan al constructor en vez de a la clase
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() { //metodo
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }

    mostrarPrecio() {
        console.log(this.precio);
    }
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);

// Herencia
// en JavaScript la palabra reservada extends es la que indica a la herencia de una clase. Es decir, en este ejemplo, la clase libro, hereda de la clase producto, por consiguiente, hereda cada uno de los atributos de la clase producto, y además, puede añadir otros atributos a la misma. Pero siempre de una forma privada, es decir, solo en la clase libro.

class Libro extends Producto { // lo que indica extends es la herencia de la clase Producto
    constructor(nombre, precio, isbn) {
        super(nombre, precio); //a traves de super() hereda al constructor de la clase Producto 
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto() } y su ISBN es ${this.isbn}`;
    }

    mostrarPrecio() {
        super.mostrarPrecio();
        this.console.log('Y si hay en existencia');
    }
}

const libro = new Libro('JavaScript la Revolución', 120, '910313981389139');
console.log(libro.formatearProducto() );
console.log(producto2.formatearProducto());