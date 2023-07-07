import { getPokemon } from '../generic/get-pokemon';


getPokemon(3)
    .then( pokemon => console.log( pokemon.sprites.front_default ) )
    .catch( error => console.error( error ) )
    .finally( () => console.log("Fin de getPokemon") )