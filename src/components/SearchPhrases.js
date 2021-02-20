import React from 'react';
import TextField from '@material-ui/core/TextField';

function SearchPhrases({searchValue,changeHandler}){

    const phraseChangeHandler = (e) => {
        changeHandler(e);
    }

    return(
        <TextField placeholder="Search phrases..."
            value={searchValue}
            onChange={phraseChangeHandler}
            name="searchdata"
        
        />
    )

}

export default SearchPhrases;