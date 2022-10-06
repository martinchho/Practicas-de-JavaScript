//PARA ACCEDER DESDE JAVASCRIPT A UN BOTON DE HTML
const boton = document.querySelector('#boton'); //  Siempre que querramos acceder a algo del HTML debemos utilizar la sentencia de Document
//Es mas facil mantener cuando creamos selectores de esta manera


                        //aqui se refiere al evento, que en este caso seria Click
boton.addEventListener('click', () => { // Es la funcion que nos va a permitir registrar un evento a la variable de boton
    Notification.requestPermission()    //que tiene agregado el HTML con el id (#) de boton
        .then(resultado => console.log(`El resultado es ${resultado}`) )
})



if(Notification.permission == 'granted') {
    new Notification('Esta es una notificación', {
        icon: 'img/ccj.png',
        body: 'Código con Juan, los mejores tutoriales'
    })
}