import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import 'fontsource-roboto';
import { AppContext } from '../App';
import FilterRadioGroup from '../components/FilterRadioGroup';

function SearchPhrases({ searchValue, changeHandler }) {

    const { phrasesCount } = useContext(AppContext);

    const phraseChangeHandler = (e) => {
        changeHandler(e);
    }

    return (
        <div style={{ marginBottom: 10, float: 'left' }}>
            <FilterRadioGroup />
            {/* <div style={{ textAlign: 'left', marginBottom: 20 }}>
                <span>Number of phrases: {phrasesCount}</span><br />
            </div> */}



            <TextField placeholder="Search phrases..."
                value={searchValue}
                onChange={phraseChangeHandler}
                name="searchdata"
                style={{ width: 250, fontFamily: 'Roboto' }}

            />
        </div>

    )

}

export default SearchPhrases;