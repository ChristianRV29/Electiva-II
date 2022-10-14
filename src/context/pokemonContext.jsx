import { createContext } from "react";
import { usePokemon } from "../hooks/usePokemon";

export const PokemonContext = createContext([])

export const PokemonProvider = ({ children }) => {

   const { pokemons } = usePokemon({ limit: 20 });

  <PokemonContext.Provider value={pokemons}>
    {children}
  </PokemonContext.Provider>  
}