import axios from 'axios';

const pokemonAPI = axios.create({
    baseURL: 'https://pokeapi.co/api',
})

export default pokemonAPI;

/*
    POKEMON API (BASE URL)
    https://pokeapi.co/api

    FOR SHOWING THE POKEMON PICTURE
    https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png

    FOR GETTING POKEMONS DATA BY QUANTITY
    /v2/pokemon?limit=40

    FOR GETTING A POKEMON DATA BY ID
    https://pokeapi.co/api/v2/pokemon/${id}
*/