/*
var nombre = 'Mariana';

console.log('Mi nombre es ' , nombre, ' y tiene ' , nombre.length, ' letras');

var saludo = 'Hola';

console.log(saludo.concat(' ','Marina', ', ', 'Sofía' ,' y ','Luciana'));

var nueve = 9;
var nueveEnTexto = '9';
var dos = 2;
var dosEnTexto = '2';

console.log(nueve + dos);
console.log(nueveEnTexto + dosEnTexto);
console.log(nueveEnTexto + (nueve + dos));

*/
/*
Declarar la variable numero y asignar el valor 10
Si la variable numero es par Entonces mostrar en consola el mensaje: El número es par
Probar cambiar el valor de la variable numero por un número impar y volver a ejecutar
*/
var numero = 5;

if(numero % 2 == 0){

    console.log('El número es par');

}else{
    console.log('El número es impar');
}

/*Crear un documento con el nombre ej51.js
Declarar la variable user y asignar el valor 'ada2019'
Declarar la variable password y asignar el valor '12345'
Si el nombre del usuario es igual a 'ada2019' Y el password es igual a '12345' entonces mostrar en consola el siguiente mensaje: El usuario está autenticado y puede ver el contenido del sitio
*/
var user = 'ada2019';

var password = '123';

if(user == 'ada2019' && password == '12345'){

    console.log('El usuario está autenticado y puede ver el contenido del sitio');

}else {

    console.log('Error, no se pudo autenticar al usuario, puede intentarlo más tarde');
}

/*Modificar el código para que cumpla con el nuevo requisito
Si el nombre del usuario es igual a 'ada2019' Y el password es igual a '12345' Entonces
Mostrar en consola el siguiente mensaje: El usuario está autenticado y puede ver el contenido del sitio
SI NO:
Mostrar en consola el siguiente mensaje: Error, no se pudo autenticar al usuario, puede intentarlo más tarde*/

var numero = 10;

numero == 10 ? console.log('Es diez') : console.log('no es diez');