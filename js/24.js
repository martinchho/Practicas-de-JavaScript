// For Loop

// for( let i = 0; i < 10; i++ ) {
//     console.log(i);
// }

 for( let i = 1; i <= 100; i++ ) { // declaracion de la variable local, la condicion y la accion que realizara esa variable (incremento en este caso)
     if( i % 2 === 0 ) { //indica que el residuo o el resto es igual a 0, entonces eso significa que es par
         console.log(`El Número ${i} es PAR`);
    } else {
         console.log(`El Número ${i} es IMPAR`);
     }
 }

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

for(let i = 0; i < carrito.length; i++ ) { // carrito.lenght ayuda a saber la longitud del arreglo que queremos saber   
    console.log( carrito[i].nombre ); //carrito[i] la "i" indica el numero de posicion del arreglo, es decir el indice en el for
}



// While Loop

let g = 20; // primero se inicializa al Indice

// a diferencia del for, en el while solo se declara la condicion, y al desarrollar la funcion, recien se declara la accion

while(g < 10) { // luego la palabra reservada while y la condicion 

    console.log('Desde el while loop');

    g++;  // por ultimo, el incremento
}



// Do While Loop

// en el caso de do while, cuando abrimos las llaves de do, declaramos lo que la funcion va a hacer y luego la accion. Al cerrar la llave, recien se declara a la condición en while. Esto quiere decir que va a ejecutar x instruccion primero, y cuando termine de realizar la misma, recien se declarará la condición a través del while.

let f = 100;

do {
    console.log(f); //el do while ejecuta el codigo al menos UNA vez, y luego evalua si seguir ejecutandolo o no

    f++;
} while( f < 10);