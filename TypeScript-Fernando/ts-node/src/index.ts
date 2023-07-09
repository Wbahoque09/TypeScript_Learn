import { Pokemon } from './decorators/pokemon-class';



const charmander = new Pokemon('Charmander');

(Pokemon.prototype as any).customName = 'Pikachu'; // Prueba de que el decorador de bloqueo si esta funcionando

console.log( charmander );

