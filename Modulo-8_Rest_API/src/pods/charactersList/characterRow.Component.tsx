import React from "react";
import { Character } from "../../commons/CharacterModel";
import { characterTableStyles } from "../../layout/characterTableStyles/characterTableStyles";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import {ModalCharacter} from "../modalCharacter/modalCharacter.Component"

interface Props {
  character: Character;
}


export const CharacterRow: React.FC<Props> = ({ character }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const classes = characterTableStyles();
  return (
    <>
    <GridListTile key={character.id}>
      <img src={character.image} alt={character.name} />
      <GridListTileBar
        title={character.name}
        subtitle={<span>Species: {character.species}</span>}
        actionIcon={
          <IconButton
            aria-label={`info about ${character.name}`}
            className={classes.icon}
            onClick={handleOpen}
          >
          <InfoIcon />
          </IconButton>
        }
      />
    </GridListTile>
    <ModalCharacter character={character} open={open} handleOpen={handleOpen} handleClose={handleClose} />
    </>
  );
};
