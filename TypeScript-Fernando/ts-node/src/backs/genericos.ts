import { Hero as Heroe } from '../classes/Hero'; // Forma tradicional de importar (1)
import { genericFunction, genericFunctionarrow, printObject } from '../generic/generic';
import { Hero, Villain } from '../interfaces';

// import { Villain } from './interfaces/villain';
// import { Hero as SuperHero } from './classes/Hero'; // (2) la palabra as es para crear un alias y el nombre despues de esta es el alias como tal
// import * as GeneralImport from './classes/Hero'; // (3) Aqui vemos una manera de importar de forma general con alias incluido
// import { Hero } from './interfaces/hero';

// const ironman = new Hero("Tony Stank",1,35); // (1)
// const ironman = new SuperHero("Tony Stank",1,35); // (2)
const ironman = new Heroe("Tony Stank",1,35); // (3) Para acceder a lo que se esta exportando se coloca el nombre del alias y punto para acceder al nombre de la exportacion

// console.log(ironman.power);

// printObject(123);
// printObject( new Date() );
// printObject( {a:1, b:2, c:3} );
// printObject( [1,2,3,4,5,6,7,8,9,10] );
// printObject("Hello World");

// console.log( genericFunction(3.141618).toFixed(2) );
// console.log( genericFunction( new Date() ).getDate() );
// console.log( genericFunction( "Hola Mundo" ).length );

const deadpool = {
    name: "Deadpool",
    realName: "Wade Wislon",
    dangerLevel: 130,
}

console.log( genericFunctionarrow<Hero>(deadpool).name );




