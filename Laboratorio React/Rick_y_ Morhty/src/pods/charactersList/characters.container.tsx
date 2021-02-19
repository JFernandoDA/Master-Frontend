import React from "react";
import { useDebounce } from "use-debounce"
import { SearchCharcter } from "./filterCharacterList.component"
import { AllCharacterComponent } from "./characters.component";
import { Character } from "../../commons/CharacterModel";
import { getAllCharacters, filterByName } from "../../service/apiService";
import Pagination from '@material-ui/lab/Pagination';
import { CentredLayaout } from "../../layout/centeredLayaout/index";
import { paginationStyle } from "../../layout/pageStyles"


export const AllCharactersContainer: React.FC = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [filter, setFilter] = React.useState("");
  const [debounceFilter] = useDebounce(filter, 500);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    filterByName(filter)
      .then(data => setCharacters(data.results))
      .catch (error => {
        alert( error );
        window.location.reload(true);
      });
  }, [debounceFilter]);

  React.useEffect(() => {
    getAllCharacters(page)
      .then(data => setCharacters(data.results))
      .catch (error => alert( error ));
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  }

  return (
    <>
      <CentredLayaout>
        <SearchCharcter  filter={ filter } setFilter={ setFilter }/>
        <br />
        <AllCharacterComponent  characters={characters} />
        <div className={ paginationStyle }>
          <Pagination count={34} color="secondary" page={page} onChange={handleChange}/>
        </div>
      </CentredLayaout>
    </>
  );
};
