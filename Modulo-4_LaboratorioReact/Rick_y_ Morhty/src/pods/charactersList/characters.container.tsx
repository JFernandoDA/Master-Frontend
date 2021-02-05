import React from "react";
import { AllCharacterComponent } from "./characters.component";
import { Character } from "../../commons/CharacterModel";
import { getAllCharacters } from "../../service/apiService";

export const AllCharactersContainer: React.FC = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);

  React.useEffect(() => {
    getAllCharacters().then(data => setCharacters(data.results));
  }, []);

  return (
    <>
      <AllCharacterComponent characters={characters} />
    </>
  );
};
