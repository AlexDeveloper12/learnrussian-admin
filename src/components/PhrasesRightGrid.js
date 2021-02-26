import React, { useContext } from 'react';
import PhrasesData from './PhrasesData';
import SearchPhrases from './SearchPhrases';
import Grid from '@material-ui/core/Grid';

function PhrasesRightGrid({ data, toggleModal, changeHandler, searchHandler }) {



    return (
        <div>



            <SearchPhrases
                changeHandler={searchHandler}
            />
            
        </div>

    )

}

export default PhrasesRightGrid;