import axios from 'axios';
import { Pokemon } from '../interfaces';


export const getPokemon = async( pokemonId: number ): Promise<Pokemon> => { // Funcion generica que devuelve una promesa 

    const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`); // Desestructuracion de la respuesta (Generico <Pokemon>)

    return data;

}