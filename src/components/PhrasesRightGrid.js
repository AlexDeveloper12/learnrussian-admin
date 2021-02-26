import React, { useContext } from 'react';
import SearchPhrases from './SearchPhrases';
import Grid from '@material-ui/core/Grid';

function PhrasesRightGrid({ data, toggleModal, changeHandler, searchHandler }) {



    return (
        
            <SearchPhrases
                changeHandler={searchHandler}
            />
            

    )

}

export default PhrasesRightGrid;