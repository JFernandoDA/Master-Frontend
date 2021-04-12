import React from "react";
import { Character } from "../../commons/CharacterModel";
import { CharacterRow } from "./characterRow.Component";

import { characterTableStyles } from "../../layout/characterTableStyles/characterTableStyles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

interface Props {
  characters: Character[];
}

export const CharactersTable: React.FC<Props> = ({ characters }) => {
  const aux = characters[0];
  const classes = characterTableStyles();
  return (
    <>
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          </GridListTile>
          {characters.map(character => (
            <CharacterRow character={character} />
          ))}
        </GridList>
      </div>
    </>
  );
};
