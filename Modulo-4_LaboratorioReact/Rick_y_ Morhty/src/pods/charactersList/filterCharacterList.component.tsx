import React from "react";
import TextField from '@material-ui/core/TextField';

interface Props {
    filter: string;
    setFilter: any;
}

export const SearchCharcter: React.FC<Props> = ({ setFilter, filter }) => { 
    return (
      <>
        <TextField id="outlined-search" label="Search field" type="search" variant="outlined" value={filter} onChange={ (e) => {setFilter(e.target.value)}}/>
      </>
    )
}