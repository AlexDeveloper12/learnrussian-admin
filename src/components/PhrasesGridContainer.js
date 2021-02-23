import React from 'react';
import Grid from '@material-ui/core/Grid';
import PhrasesLeftGrid from './PhrasesLeftGrid';
import PhrasesRightGrid from './PhrasesRightGrid';

function PhrasesGridContainer({ phrasesData,toggleModal,changeHandler,addPhrase,searchHandler,checkBoxHandler,checkBoxValues }) {

    return (
        <Grid container spacing={10} justify="center" key={phrasesData.BasicPhrasesID}>
            <Grid item xs={5} sm={6}>
                <PhrasesLeftGrid 
                    changeHandler={changeHandler} 
                    addPhrase={addPhrase}
                    checkBoxHandler={checkBoxHandler}
                    checkBoxObject={checkBoxValues}
                />
            </Grid>
            <Grid item xs={6} sm={4}>
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