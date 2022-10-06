// Async / await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout( () => {
            resolve('Los Clientes fueron Descargados');
        }, 5000 );
    });
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout( () => {
            resolve('Los Pedidos fueron Descargados');
        }, 3000 );
    });
}



/*Como optimizar un llamado async await
-se debe separar la otra funcion para que estas mismas puedan descargarse al mismo momento en el que se 
descargan las otras, es decir que esta no se encuentre en el try catch
-Deben de estar las funciones en un arreglo.
-Se lo denomina como arreglo de promises
 */

async function app() { //cuando depende una descarga de otra, si hacerlo con await, para que se bloquee una y luego al terminar de descargarse la primera, continue descargandose la segunda
   try {               //en otro caso, no es conveniente hacerlo de esta forma
    //    const clientes = await descargarNuevosClientes();
    //    const pedidos = await descargarUltimosPedidos();
    //    console.log(clientes);
    //    console.log(pedidos);

    const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]);
    console.log(resultado[0]); //este codigo solamente se va a ejecutar luego de que Await haya sido completado
    console.log(resultado[1]);
   } catch (error) {
       console.log(error);
   }

  
}

app();

