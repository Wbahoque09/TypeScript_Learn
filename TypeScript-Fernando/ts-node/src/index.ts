import { getPokemon } from './generic/get-pokemon';


getPokemon(3)
    .then( resp => console.log( resp ) )
    .catch( error => console.error( error ) )
    .finally( () => console.log("Fin de getPokemon") )




