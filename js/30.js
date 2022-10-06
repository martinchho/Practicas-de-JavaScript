// Callback function
// Una función callback es una función que se pasa a otra función como argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

// Promises
//Promise es un objeto especial de JavaScript que vincula el "producing code" y el "consuming code".

                            //executor --> se ejecuta automaticamente
const usuarioAutenticado = new Promise( (resolve, reject) => {

    // producing code 
    const auth = true;

    if(auth) {
        resolve('Usuario Autenticado'); // EL PROMISE SE CUMPLE, se da el resultado
    } else {
        reject('No se pudo iniciar sesión'); // el promise no se cumple, se muestra el objeto error
    }
});


// consuming code
usuarioAutenticado
    .then( resultado => console.log(resultado)) // cuando la promise se cumplio
    .catch( error => console.log(error)) // se ejecuta cuando el promise dio error


// En los Promises existen 3 valores
// Pending : No se ha cumplido pero tampoco se ha rechazado
// Fulfilled : Ya se cumplio
// Rejected : Se ha rechazado o no se pudo cumplir