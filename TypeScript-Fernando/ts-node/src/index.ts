// import { Hero } from './classes/Hero'; // Forma tradicional de importar (1)
// import { Hero as SuperHero } from './classes/Hero'; // (2) la palabra as es para crear un alias y el nombre despues de esta es el alias como tal
import * as GeneralImport from './classes/Hero'; // (3) Aqui vemos una manera de importar de forma general con alias incluido

// const ironman = new Hero("Tony Stank",1,35); // (1)
// const ironman = new SuperHero("Tony Stank",1,35); // (2)
const ironman = new GeneralImport.Hero("Tony Stank",1,35); // (3) Para acceder a lo que se esta exportando se coloca el nombre del alias y punto para acceder al nombre de la exportacion

console.log(ironman);







