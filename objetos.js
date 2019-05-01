console.log('Hola mundo');

//{objetos en javascript}
/*
var miObjeto ={};

var persona = {
    nombre: 'Ada',
    edad: 27,
};

console.log(persona);
console.log(persona.edad);
console.log(persona.nombre);

persona.nombre = 'Grace';
persona.edad = 30;

console.log(persona.edad);
console.log(persona.nombre);

persona.dni = 90909090;

console.log(persona);

var persona = {

    nombre: 'Ada',
    saludar: function(){
        console.log('Hola');
    }
}

persona.saludar();

var persona = {
    nombre: 'Ada',
    saludar: function(personaASaludar){
        console.log('Hola ' + personaASaludar);
    }
};
persona.saludar('Grace');
persona.saludar(123);
persona.saludar(true);


var persona = {
    nombre: 'Ada',
    edad: 27,
    saludar: function(){
        console.log('Hola, mi nombre es ' + this.nombre);
    },
    cumpleanios: function(){
        this.edad++;
    }
}

persona.saludar();

persona.cumpleanios();
console.log(persona.edad);

var persona ={
nombre: 'Ada',
edad: 27,
darPlata: function(lalala){
     lalala.billetera + 2
}
}

var terceraPersona = {
    nombre: 'Marie',
    billetera: 0
};


var otraPersona = {
    nombre: 'Grace',
    billetera: 0
}

persona.darPlata(terceraPersona);
persona.darPlata(otraPersona);

console.log(otraPersona.billetera);

console.log(terceraPersona.billetera);


var biblioteca = [
    {
        titulo: 'Cumbres Borrascosas',
        autor: 'Emily Brontë',
        leido: true
    },
    {
        titulo: 'Orlando',
        autor: 'Virginia Woolf',
        leido: false
    },
 
    {
        titulo: 'Arbol de Diana',
        autor: 'Alejandra Pizarnik',
        leido: false
    }
];

for(i=0; i<biblioteca.length; i++){


    if(biblioteca[i].leido == true){

        console.log(biblioteca[i].titulo + ' ha sido leído');

}else if(biblioteca[i].leido == false){

    console.log(biblioteca[i].titulo + ' no ha sido leído');

}
}

biblioteca.map(
    function(item){
        if(item).leido === true) {
            console.log(item.titulo + ' leído')
        }else if(item.leido=== false){
            console.log(item.leido + 'no leido')
        }

    }

)
*//*
var persona = {
    nombre: 'Ada',
    edad: 27,
    saludar: function(){
        console.log('Hola! Mi nombre es ' + this.nombre);
    }
}

console.log(persona['nombre'])
console.log(persona.nombre)

var propNombre = 'nombre';
var propEdad = 'edad';

console.log(persona[propNombre]);

persona.nombre === persona['nombre'] === persona[propNombre];

*/


//----------------------------------

//Ejercicio obj_19

//Declarar una variable con el nombre propiedadNombre y asignar el valor nombre
//Declarar una variable con el nombre propiedadEdad y asignar el valor edad
//Crear un objeto persona con las propiedades nombre y edad
//Asignar a las propiedades del objeto persona tu nombre y edad
//Mostrar en consola los valores de cada propiedad del objeto persona utilizando corchetes y los valores: 'nombre' y 'edad' en lugar de utilizar el punto
//Mostrar en consola los valores de cada propiedad del objeto persona utilizando las variables propiedadNombre y propiedadEdad


/*
var propiedadNombre = 'nombre';
var propiedadEdad = 'edad';

var persona = {
    nombre: 'Ada',
    edad: 27,
}

console.log(persona[propiedadNombre]);
console.log(persona[propiedadEdad]);

*/
/*

var persona = {
    nombre: 'Ada',
    edad: 27,
}

console.log(Object.keys(persona));

var propiedades = Object.keys(persona);

for(var i = 0; i<propiedades.length; i++){
    
    console.log('La propiedad '+ propiedades[i] + ' tiene valor ' + persona[propiedades[i]]);

}

for(var i = 0; i<propiedades.length; i++){

    if(persona[propiedades[i]] === 'Ada'){
        console.log('Hola ' + persona[propiedades[i]]);
    }
    
}
*/
/*
var persona = {
    nombre: 'Ada',
    edad: 27,
}

var propiedades = Object.keys(persona);

for(var i = 0; i< propiedades.length; i++){
    
        console.log('la propiedad ' + propiedades[i] + ' es ' + persona[propiedades[i]])
    
}
*/



//--------------------------------------

//Ejercicio obl_022


//Partiendo de un objeto guardado en la variable user
//Verificar si tiene la propiedad email
//Si no la tiene, mostrar en pantalla: 'El usuario no tiene la propiedad email'
//Si la tiene, mostrar en pantalla: 'El usuario tiene la propiedad email'
/*
var user = {
  username: 'ada_lovelace',
  password: '1234567890!',
  email: 'lalala@gmail.com'
};

var propiedades = Object.keys(user);

var mensaje= 'El usuario no tiene la propiedad email'

for(i=0; i<propiedades.length; i++){
    if(propiedades[i] === 'email'){
        mensaje ='El usuario tiene la propiedad email';
    }
    
}

console.log (mensaje);

*/



//--------------------------------------

//Ejercicio obl_0023


//Completa el código dentro de la función hasProperty
//Si el objeto de la variable object tiene la propiedad que recibe en la variable property, retorna true
//Sino retorna false
function hasProperty(object, property) {
  // return true si el objeto (object) tiene la propiedad (property) que llega por parametro
  // property es un string
  // sino return false
}

var user = {
  username: 'ada_lovelace',
  password: '1234567890!'
};

var user2 = {
  username: 'grace_hopper',
  password: '1234567890!',
  email: 'grace@hopper.com'
};

console.log( hasProperty(user, 'email') ); // false
console.log( hasProperty(user, 'password') ); // true
console.log( hasProperty(user, 'id') ); // false

console.log( hasProperty(user2, 'email') ); // true
console.log( hasProperty(user2, 'password') ); // true
console.log( hasProperty(user2, 'id') ); // false