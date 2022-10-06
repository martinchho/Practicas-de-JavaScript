const numero1 = 20;
const numero3 = 30;


console.log(numero1);


// Try and Catch
// Sirve para probar errores en el codigo. Es decir, esta instruccion ejecutará el código, sin obviando los errores. Luego al finalizar la ejecución del mismo, mostrará en la consola los errores que se producieron en el transcurso de la ejecución de la instrucción.
try {
    console.log(numero2); //indico la linea en donde quiero probar el error
} catch (error) {
    console.log(error); //muestro en la consola el error
}

console.log(numero3);