import React from "react";
import { Character } from "../../commons/CharacterModel";
import { CharacterRow } from "./characterRow.Component";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";

interface Props {
  characters: Character[];
}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: "teal",
      border: "2px, solid, black"
    },
    gridList: {
      width: "75%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around"
    },
    GridListTileBar: {
      padding: 10
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)"
    }
  })
);

export const CharactersTable: React.FC<Props> = ({ characters }) => {
  const aux = characters[0];
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div">Rick & Morty</ListSubheader>
          </GridListTile>
          {characters.map(character => (
            <CharacterRow character={character} />
          ))}
        </GridList>
      </div>
    </>
  );
};
