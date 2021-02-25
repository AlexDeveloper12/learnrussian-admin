import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import 'fontsource-roboto';
import FilterRadioGroup from '../components/FilterRadioGroup';
import FilterDropdown from './FilterDropdown';
import { AppContext } from '../App';
import Paper from '@material-ui/core/Paper';

function SearchPhrases({ searchValue, changeHandler }) {

    const { phrasesCount, selectedFilter } = useContext(AppContext);

    const phraseChangeHandler = (e) => {
        changeHandler(e);
    }

    return (
        <div style={{ marginBottom: 10, float: 'left' }}>
            <Paper>
                <FilterRadioGroup
                    selectedValue={selectedFilter}
                />
            </Paper>


            {/* <FilterDropdown/> */}
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