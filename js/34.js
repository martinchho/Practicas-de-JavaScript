//combinar la funcion Fetch con Async-Await

async function obtenerEmpleados() {
    
    
    const resultado = await fetch(archivo);
    const datos = await resultado.json(); //se utiliza doble await porque esta linea si depende de la anterior
    console.log(datos);
}

obtenerEmpleados();