console.log('Hola Mundo');
/*
//Mostrar en consola los números del 0 al 10 utilizando la estructura while

var i = 0;

while (i <= 10){
    console.log(i);
    i=i+1;
}

//Mostrar en consola los números del 100 al 0 utilizando la estructura while

var i = 100;

while (i >= 0){

    console.log(i);

    i = i - 1;
}

//Mostrar en consola los números pares del 0 al 1000 utilizando la estructura while

var i = 0;

while(i <= 1000){

    console.log(i);

    i= i+2;
    
}*/
//ejercicio 69
//Mostrar en consola la suma parcial de todos los números que van desde 0 hasta 1000 utilizando la estructura while//
/*
var a = 0;

var b = 1;


while (b <= 1000){
    console.log('A: ', a, 'B: ', b, ' Resultado ', a + b);

    a = a + b;

    b++;
   

}*/

//ejercicio 70
//Mostrar en consola la suma parcial de todos los números impares que van desde 0 hasta 1000 utilizando la estructura while.
/*
var a = 1;

var b = 3;


while (b <= 1000){

    console.log('A: ', a, 'B: ', b, ' Resultado ', a + b);

    a = a + b;

    b = b+2;
   

}*/
/*
//Mostrar en consola la tabla de multiplicar del 9 (de 1 a 10) utilizando la estructura while

var nueve = 9;

var i = 1;

while (i <= 10){
    console.log(i, 'x', nueve, '=', i * nueve);

    i++;

}*/
/*

// Ejercicio 72
Mostrar en consola el siguiente dibujo utilizando la estructura while
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************

var uno = '*';

while (uno.length<15){

    console.log(uno);
    
    uno = uno + '*';
}*/
/*
//Ejercicio 73

Mostrar en consola el siguiente dibujo utilizando la estructura while
*************
************
***********
**********
*********
********
*******
******
*****
****
***
**
*
*/

/*
var acumulado = '';
var estrellita = '*************'
var contador = estrellita.length -1;


while(estrellita.length -1 > 0){

    acumulado = estrellita.slice(0,contador);

    console.log (acumulado);

    contador --;


}*/
/*
var numero = 5;

var numeroDos = 5;

var f = '*';

while (numeroDos > 0){
    
    
    while(numero > 0){

        f = f +'*';
        numero --;

    }


    console.log(f);
    
    numero = numeroDos -1;
    f ='*';
    numeroDos --;
    
}
*/
/*
Ejercicio 74
*
***
*****
*******
*********
***********
*************
*/
/*
var estrellita = '*'
var contador = estrellita.length -1;


while(estrellita.length < 12){

    console.log (estrellita);
    estrellita = estrellita + '**'

}
*/
//Ejercicio 75

/*
Crear un documento con el nombre ej75.js
Escribir un programa que muestre en consola la secuencia de Fibonacci para los primeros 10 números utilizando la estructura while
*/


