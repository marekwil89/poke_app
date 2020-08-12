import React from 'react';
import Modal from 'react-modal';
import { Pokemon } from '../interfaces/Pokemon';
import { translate } from '../helpers/Translate/Translate';

interface Props {
  selectedPokemon: Pokemon,
  openModal: boolean,
  setOpenModal: any,
}

export const PokeModal: React.FC<Props> = ({selectedPokemon, openModal, setOpenModal}) => {  
  const toggle = () => setOpenModal(!openModal);

  const renderDetails = () => {
    const { name, image, ...rest } = selectedPokemon;

    return Object.entries(rest).map((elem, key) => <li key={key}>{translate(elem[0])}: {elem[1]}</li>)
  }

  return (
    <Modal
      ariaHideApp={false}
      isOpen={openModal}
      onRequestClose={toggle}
      contentLabel="Detale"
    >
      <h2>{selectedPokemon.name}</h2>
      <img className="img-fluid" src={selectedPokemon.image} alt={selectedPokemon.name}/>
      <ul>
        {renderDetails()}
      </ul>
    </Modal>
  ) 
};
