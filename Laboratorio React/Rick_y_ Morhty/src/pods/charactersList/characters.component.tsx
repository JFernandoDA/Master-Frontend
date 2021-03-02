import React from "react";
import { Character } from "../../commons/CharacterModel";
import { CharactersTable } from "./characterTable.component";

interface Props {
  characters: Character[];
}

export const AllCharacterComponent: React.FC<Props> = ({ characters }) => {
  return (
    <>
      <CharactersTable characters={characters} />
    </>
  );
};
