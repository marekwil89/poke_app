import React from 'react';
import { Pokemon } from '../../interfaces/Pokemon';
import './PokeItem.scss';

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
    <div className="poke-item col-lg-4 col-sm-6 mb-4">
      <article className="d-flex flex-column align-items-center p-3">
        <figure className="d-flex justify-content-center align-items-center">
          <img className="img-fluid" src={pokemon.image} alt={pokemon.name}/>
        </figure>
        <h3 className="mb-3 text-uppercase">{pokemon.name}</h3>

        <footer className="d-flex align-items-end flex-column">
          <button className="btn btn-primary text-uppercase" onClick={() => handleClick(pokemon)}>Szczegóły</button>
        </footer>
      </article>
    </div>
  ) 
};
