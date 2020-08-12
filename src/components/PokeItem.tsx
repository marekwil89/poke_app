import React from 'react';
import { Pokemon } from '../interfaces/Pokemon';

interface Props {
  pokemon: Pokemon,
  setSelectedPokemon: any,
  setOpenModal: any
}

export const PokeItem: React.FC<Props> = ({pokemon, setSelectedPokemon, setOpenModal}) => {
  const handleClick = (pokemon:Pokemon) => {
    setSelectedPokemon(pokemon);
    setOpenModal(true);
  };

  return (
    <div className="col-lg-4 mb-4">
      <article className="border p-3">
        <img className="img-fluid" src={pokemon.image} alt={pokemon.name}/>
        <h3 className="my-3">{pokemon.name}</h3>

        <footer className="d-flex align-items-end flex-column">
          <button className="btn btn-primary" onClick={() => handleClick(pokemon)}>Szczegóły</button>
        </footer>
      </article>
    </div>
  ) 
};
