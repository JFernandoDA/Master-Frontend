import React from 'react';
import { Character } from "../../commons/CharacterModel";
import Modal from '@material-ui/core/Modal';
import { getModalStyle, useStyles } from "../../layout/ModalCharacterStyle/ModalCharacterStyle"


interface Props {
    character: Character;
    open: boolean;
    handleOpen:any;
    handleClose:any
  }

export const ModalCharacter: React.FC<Props> = ({ character, open, handleOpen, handleClose }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.ModalCharacter}>
      <h2 id="simple-modal-title">{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p id="simple-modal-description">
        Species: {character.species}
      </p>
      <p id="simple-modal-description">
        Status: {character.status}
      </p>
      <p id="simple-modal-description">
        Created: {character.created}
      </p>
      <p id="simple-modal-description">
        URL: {character.url}
      </p>
    </div>
  );

  return (
      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
