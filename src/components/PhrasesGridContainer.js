import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper, Typography } from '@material-ui/core';
import { FaPen, FaTimesCircle } from 'react-icons/fa';
import PhrasesData from './PhrasesData';

function PhrasesGridContainer({ phrasesData, toggleModal, deleteMethod }) {
    const myData = phrasesData.filter(v => v.Pronunciation !== null).map((value, index) => {
        const phraseType = {
            isGreeting: value.isGreetingPhrase.data[0],
            isGeneral: value.isGeneralPhrase.data[0],
            isLanguage: value.isLanguagePhrase.data[0]
        }
        return (
            <PhrasesData
                phraseObject={value}
                phraseType={phraseType}
                toggleModal={toggleModal}
                deleteMethod={deleteMethod}
            />

        )
    });

    return (

        <Grid container key={phrasesData.BasicPhrasesID} direction="row" justify="center" >

            {myData}

        </Grid>

    )


}


export default PhrasesGridContainer;