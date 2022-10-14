import React from 'react'

export const PokemonCard = (props) => {
  const { pokemon } = props; 
  const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

  return (
    <div className='pokemon-card-wrapper'>
        <div className='pokemon-img-container'>
            <img src={pokemonImage || ''} alt={pokemon.name} />
        </div>
        <h1>{pokemon.name}</h1>
    </div>
  )
}


