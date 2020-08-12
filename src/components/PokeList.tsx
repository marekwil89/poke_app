import React from 'react';
import { PokeItem } from './PokeItem';
import { PokeTitle } from './PokeTitle';
import { Pokemon } from '../interfaces/Pokemon';

interface Props {
  pokemons: Pokemon[],
  setSelectedPokemon: any,
  setOpenModal: any
}

export const PokeList: React.FC<Props> = ({pokemons, setSelectedPokemon, setOpenModal}) => {
  const renderPokemons = pokemons.map((pokemon, key) => <PokeItem key={key} setOpenModal={setOpenModal} setSelectedPokemon={setSelectedPokemon} pokemon={pokemon} />);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <PokeTitle title="lista pokemonów" />
        </div>
      </div>
      <div className="row">
        {renderPokemons}
      </div>
    </div>
  ) 
};
