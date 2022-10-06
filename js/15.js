// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

// forEach
meses.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

// Includes
let resultado = meses.includes('Diciembre'); // retorna true si un string contiene a un string especifico

// Some ideal para arreglo de objetos
resultado = carrito.some(function(producto) { // se fija si un array pasa una prueba (funcion tipo callback)
    return producto.nombre === 'Celular PRO'  // ejecuta la funcion callback por cada array
})                                            // retorna true (y para) si la funcion retorna true por uno de los arrays
                                              // retorna false si la funcion retorna false para todos los arrays
                                              // esta funcion no ejecuta nada para arrays vacios
                                              // esta funcion no cambia el array original

// Reduce
resultado = carrito.reduce ((total, producto) => total + producto.precio, 0); 
// resta todos los numeros de un array
// retorna un unico valor: el resultado acumulado de la funcion
// esta funcion no ejecuta nada para arrays vacios
// esta funcion no cambia el array original


// Filter
// crea un nuevo array lleno de elementos que pasan una prueba dispuesta por una funcion
// esta funcion no ejecuta nada para arrays vacios
// esta funcion no cambia el array original
resultado = carrito.filter((producto) => producto.precio > 400);

resultado = carrito.filter((producto) => producto.nombre !== 'Celular');



console.log(resultado);
