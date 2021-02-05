import React from "react";
import { Character } from "../../commons/CharacterModel";

import { useStyles } from "./characterTable.component";

import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

interface Props {
  character: Character;
}

export const CharacterRow: React.FC<Props> = ({ character }) => {
  const classes = useStyles();
  return (
    <GridListTile key={character.id}>
      <img src={character.image} alt={character.name} />
      <GridListTileBar
        title={character.name}
        subtitle={<span>Species: {character.species}</span>}
        actionIcon={
          <IconButton
            aria-label={`info about ${character.name}`}
            className={classes.icon}
            onClick={() => {
              alert("clicked");
            }}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </GridListTile>
  );
};
