import Axios from 'axios';
import { Character } from '../commons/CharacterModel'

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

export const getMockCharacter = async (id):Promise<Character> => {
  const mockcharacter = await Axios.get(`http://localhost:3000/results?id=${id}`);

  return mockcharacter.statusText==='OK'? mockcharacter.data[0] : {}
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
}

export const getEpicPhrase = async(character) => {
  const mockCharacter = await getMockCharacter(character.id)
                //.then(response => response)
                //.catch (error => alert( error ));
  console.log(mockCharacter)
  if (mockCharacter.bestSentences) {
    return mockCharacter.bestSentences
  } else {
    return "Introduce tu frase épica"
  }
}

export const putEpicPhrase = async (frase:string, character:Character):Promise<boolean> => {

  if (frase !=='') {
    character.bestSentences= frase;

    if ( character.id ) {
      await Axios.put<Character>(`http://localhost:3000/results/${character.id}`, character );
      console.log('frase épica guardada:' + frase);
      return true;
    } else{
      alert('Error al grabar la frase épica');
      return false;
    }
  }else {
    alert ('Debes introducir una frase épica válida')
    return false
  }
 }
