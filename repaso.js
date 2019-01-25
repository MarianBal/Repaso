//1. Teniendo dos arrays de canciones, comparar sus longitudes y 
//mostrar en pantalla “La playlist de Nirvana tiene más canciones” 
//si el array playlistNirvana tiene más canciones, o “La playlist de 
//Foo Fighters tiene más canciones” si el array playlistFoo tiene más.

var playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly', 'Alandria', 'White limo']

if(playlistNirvana.length > playlistFoo.length ){
    console.log ('La playlist de Nirvana tiene más canciones');
    console.log(playlistNirvana);

} else if(playlistFoo.length > playlistNirvana.length){

    console.log('La playlist de Foo Fighters tiene más canciones');
    console.log(playlistFoo);

}

//2. Tenemos una array de palabras. Queremos mostrar por pantalla la 
//longitud que tiene cada palabra.

var playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];

var i = 0;


for (i; i <= playlist.length - 1; i++) {

    var tema = playlist[i];

    console.log(tema + ' tiene ' + tema.length + ' caracteres' );


}

// mostrar la longitud de cada palabra en el array


//3.Con el mismo array de canciones del anterior ejercicio, 
//queremos mostrar por pantalla la longitud de cada palabra 
//y un mensaje “tiene mas de 15 caracteres”, cuando su longitud
//sea mayor a 15.

var playlist2 = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];

var i = 0;

for (i; i <= playlist2.length - 1; i++) {

    
    var tema = playlist2[i];

    if (tema.length > 15){

        console.log(tema + ' tiene mas de 15 caracteres')
    } else if (tema.length <= 15){

    console.log(tema + ' tiene ' + tema.length + ' caracteres' );

    }


}

// mostrar la longitud de cada palabra en el array y el mensaje "tiene mas de 15 caracteres" cuando su longitud sea > 15



//4.Tenemos un array de peliculas y un array vacio. Queremos 
//guardar en el segundo array vacio aquellas peliculas cuya 
//longitud sea mayor a 10.

var peliculas = ["Batman Begins", "Superman", "The Dark Knight", "The Dark Knight Rises"];
var peliculasConLongitudMayorA10 = [];

var i = 0;

for (i; i <= peliculas.length - 1; i++) {

    
    var pelicula = peliculas [i];

    if (pelicula.length > 10){

        peliculasConLongitudMayorA10.push(pelicula);

        console.log(peliculasConLongitudMayorA10)

    } 

}


//5.Tenemos un array llamado womenInTech sobre el que tenés 
//que realizar las siguientes operaciones:

//eliminar a “Bill Gates”, que está en la última posición
//agregar “Parisa Tabriz” al final del array
//Luego de realizar las dos operaciones, vamos a mostrar 
//la siguiente información por consola:

//la longitud del array
//quien está en la posición 3
//mostrar todos los elementos del array, uno debajo del otro

var womenInTech = ["Ada Lovelace", "Hedy Lamarr", "Grace Hopper", "Radia Perlman", "Janie Tsao", "Sheryl Sandberg", "Susan Kare", "Bill Gates"];

womenInTech.pop();

womenInTech.push('Parisa Tabriz');

console.log('El array tiene ' + womenInTech.length + ' elementos.');

console.log('en tercer lugar está ' + womenInTech [2]);

for (var i = 0; i <=womenInTech.length -1; i++) {
    console.log(i+1 + ': '+ womenInTech [i]);
}