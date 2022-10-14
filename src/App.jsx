import React from 'react';

import { PokemonCard } from './components/PokemonCard';
import { usePokemon } from './hooks/usePokemon';

import './styles/index.css';

const App = () => {

  const { pokemons } = usePokemon({ limit: 20 });

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
