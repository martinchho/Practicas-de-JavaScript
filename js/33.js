//Fetch API sirve para extraer datos de una base de datos 

function obtenerEmpleados() {

    const archivo = 'empleados.json';

    fetch(archivo)//toma una API        //primero accedemos a los resultados
        .then ( resultado => resultado.json()) //acordarse que en arrow functions el "return" se da por implicito, entonces no es necesario escribirlo
        .then (datos => { //y desp se retornan los datos
            
            //console.log(datos.empleados);

            //distructuring
            const { empleados } = datos;
            //console.log(empleados);

            empleados.forEach(empleado => {
                console.log(empleado.id);
                console.log(empleado.nombre);
                console.log(empleado.puesto);
            });
        })
}

obtenerEmpleados();