export const getAllCharacters = () => {
  return fetch("https://rickandmortyapi.com/api/character").then(response =>
    response.json()
  );
};

export const getCharacter = (id: string) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(json => json);
};
