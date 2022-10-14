import React, { useEffect, useState } from 'react';

import pokeAPI from './api/index';
import { PokemonCard } from './components/PokemonCard';

import './styles/index.css';

const App = () => {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemonData();
  }, [])

  const getPokemonData = async () => {
    try {
      const { data } = await pokeAPI.get('/v2/pokemon?limit=5');
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
  

  return (
   <div className='main-wrapper'>
    <h1 className='title'>List of pokemons</h1>
    <div className='pokemons-card-container'>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
    </div>
   </div>
  );
}

export default App;
