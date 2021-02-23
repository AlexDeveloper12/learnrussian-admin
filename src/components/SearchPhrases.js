import React from 'react';
import TextField from '@material-ui/core/TextField';
import 'fontsource-roboto';

function SearchPhrases({ searchValue, changeHandler }) {

    const phraseChangeHandler = (e) => {
        changeHandler(e);
    }

    return (
        <div style={{marginBottom:10}}>
            <TextField placeholder="Search phrases..."
                value={searchValue}
                onChange={phraseChangeHandler}
                name="searchdata"
                style={{width:250,fontFamily:'Roboto'}}

            />
        </div>

    )

}

export default SearchPhrases;