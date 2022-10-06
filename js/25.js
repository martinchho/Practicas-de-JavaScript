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

// ForEach //no necesita que se establezca una condicion
carrito.forEach( producto => console.log(producto.nombre));

// map
const arreglo2 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo2);

/*
-Cuando quieras iterar sobre un arreglo,y mostrar los elementos en pantalla o simplemente mostrarlos en consola, utiliza el forEach.
-Si quieres crear un nuevo arreglo, entonces utiliza el Map.
-El map funciona de la misma manera que el forEach, solo que el map crea un nuevo array, con la indicacion que les demos para que retorne, pero el forEach no crea ningun nuevo array.

MAP crea un nuevo arreglo con lo que le indiquemos que queremos que retorne, en cambio ForEach NO.
*/

    