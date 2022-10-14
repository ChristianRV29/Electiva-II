import { useEffect, useState } from "react";
import pokemonAPI from "./../api";

export const usePokemon = ({ limit = 5 }) => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
    getPokemonData(limit);
    }, [limit])

  const getPokemonData = async (quantity) => {
    try {
      const { data } = await pokemonAPI.get(`/v2/pokemon?limit=${quantity}`);
      if (data) {
        
        const pokemonData = (data.results || []).map((pokemon) => {
          const { url } = pokemon;

          const newURL = url.split('/');
          const id = newURL[newURL.length - 2];

          return { ...pokemon, id };

        });

        if (pokemonData.length > 0) {
          setPokemons(pokemonData);
        }
      }
      
    } catch (err) {
      console.log('Ocurrio un error: ', err);
    }
  }

  return {
    pokemons,
  }
}
