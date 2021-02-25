import React from 'react';
import Grid from '@material-ui/core/Grid';
import PhrasesLeftGrid from './PhrasesLeftGrid';
import PhrasesRightGrid from './PhrasesRightGrid';

function PhrasesGridContainer({ phrasesData,toggleModal,changeHandler,addPhrase,searchHandler,checkBoxHandler,checkBoxValues }) {

    return (
        
        <Grid container spacing={10} key={phrasesData.BasicPhrasesID} direction="row" justify="center" >
            <Grid item xs={4} sm={6}>
                <PhrasesLeftGrid 
                    changeHandler={changeHandler} 
                    addPhrase={addPhrase}
                    checkBoxHandler={checkBoxHandler}
                    checkBoxObject={checkBoxValues}
                />
            </Grid>
            <Grid item xs={4} sm={6}>
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