import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PokeList } from './PokeList';
import { PokeModal } from './PokeModal';
import { PokeError } from './PokeError/PokeError';
import { Pokemon } from '../interfaces/Pokemon';
import { PokemonFetch } from '../interfaces/PokemonFetch';
import { pokeApi, initialPokemonValues, pokemonLimit } from '../helpers/CONSTS';

export const PokeContainer = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>(initialPokemonValues);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchPokemon = async (pokemon:PokemonFetch) => {
    const { url } = pokemon;
    const response = await axios.get(url);

    const { sprites, name, base_experience, height, weight } = response.data;

    const image = sprites?.other['official-artwork'].front_default;
    const newPokemon = { name, image, weight, height, base_experience }

    setPokemons(pokemons => [...pokemons, newPokemon]);
  }

  const fetchPokemons = async () => {
    try {
      const response = await axios.get(`${pokeApi}?limit=${pokemonLimit}`);
  
      response.data.results.forEach((pokemon:PokemonFetch) => {
        fetchPokemon(pokemon);
      })
    } catch(err) {
      setError(true);
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <PokeError error={error} >
      <PokeList setSelectedPokemon={setSelectedPokemon} setOpenModal={setOpenModal} pokemons={pokemons} />
      <PokeModal openModal={openModal} setOpenModal={setOpenModal} selectedPokemon={selectedPokemon} />
    </PokeError>
  );
}
