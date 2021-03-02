export const getAllCharacters = ( page:number ) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(response => {
      if ( response.ok ){
        return response.json()
      }else {
        throw Error( `Se ha producido un error en la llamada a la API` )
      }
    }
  );
};

export const getCharacter = (id: string) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(json => json);
};

export const filterByName = ( filter:string ) => {
  return fetch(`https://rickandmortyapi.com/api/character/?name=${filter}`)
  .then(response => {
    if ( response.ok ){
      return response.json()
    }else {
      throw Error( `Se ha producido un error en la llamada a la API, puede que el personaje no exista` )
    }
  });
};
