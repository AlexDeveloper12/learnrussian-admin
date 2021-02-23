import React from 'react';
import Grid from '@material-ui/core/Grid';
import PhrasesLeftGrid from './PhrasesLeftGrid';
import PhrasesRightGrid from './PhrasesRightGrid';

function PhrasesGridContainer({ phrasesData,toggleModal,changeHandler,addPhrase,searchHandler,checkBoxHandler,checkBoxValues }) {

    return (
        <Grid container spacing={10} key={phrasesData.BasicPhrasesID} direction="row">
            <Grid item xs={5} sm={5}>
                <PhrasesLeftGrid 
                    changeHandler={changeHandler} 
                    addPhrase={addPhrase}
                    checkBoxHandler={checkBoxHandler}
                    checkBoxObject={checkBoxValues}
                />
            </Grid>
            <Grid item xs={9} sm={7}>
                <PhrasesRightGrid
                    data={phrasesData}
                    toggleModal={toggleModal}
                    changeHandler={changeHandler}
                    searchHandler={searchHandler}
                />
            </Grid>




        </Grid>
    )


}

export default PhrasesGridContainer;