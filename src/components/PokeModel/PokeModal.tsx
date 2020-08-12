import React from 'react';
import Modal from 'react-modal';
import { Pokemon } from '../../interfaces/Pokemon';
import { translate } from '../../helpers/Translate/Translate';
import './PokeModel.scss'

interface Props {
  selectedPokemon: Pokemon,
  openModal: boolean,
  setOpenModal: any,
}

export const PokeModal: React.FC<Props> = ({selectedPokemon, openModal, setOpenModal}) => {  
  const toggle = () => setOpenModal(!openModal);

  const renderDetails = () => {
    const { name, image, ...rest } = selectedPokemon;

    return Object.entries(rest).map((elem, key) => <li className="list-group-item" key={key}>{translate(elem[0])}: {elem[1]}</li>)
  }

  return (
    <div className="poke-modal">
      <Modal
        ariaHideApp={false}
        isOpen={openModal}
        onRequestClose={toggle}
        contentLabel="Detale"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <img className="img-fluid" src={selectedPokemon.image} alt={selectedPokemon.name}/>
            </div>
            <div className="col-md-6 offset-md-1">
              <h2 className="mb-4 text-uppercase">{selectedPokemon.name}</h2>
              <ul className="list-group">
                {renderDetails()}
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    </div>

  ) 
};
