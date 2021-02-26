import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper, Typography } from '@material-ui/core';
import { FaPen, FaTimesCircle } from 'react-icons/fa';
import SearchPhrases from './SearchPhrases';

function PhrasesGridContainer({ phrasesData, toggleModal, changeHandler, addPhrase, searchHandler, checkBoxHandler, checkBoxValues }) {
    const myData = phrasesData.filter(v => v.Pronunciation !== null).map((value, index) => {
        const phraseType = {
            isGreeting: value.isGreetingPhrase.data[0],
            isGeneral: value.isGeneralPhrase.data[0],
            isLanguage: value.isLanguagePhrase.data[0]
        }
        return (
            <Grid item xs={4} md={4} lg={4} >

                <Paper style={styles.paperContainer} key={value.BasicPhrasesID}>
                    <Typography variant="subtitle1" style={{ textAlign: 'center' }} >
                        {value.Pronunciation} - {value.BasicPhrasesDescription}
                    </Typography>
                    <div style={{ textAlign: 'center' }}>
                        <FaPen

                            style={{ marginLeft: 10 }}
                        />
                        <FaTimesCircle
                            style={{ marginLeft: 10 }}
                        />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: 10 }}>{value.SortOrder}</span>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        Phrase type:{phraseType.isGreeting === 1 ? <span>Greeting</span> : ''} {phraseType.isGeneral === 1 ? <span>General</span> : ''} {phraseType.isLanguage === 1 ? <span>Language</span> : ''}
                    </div>

                </Paper>

            </Grid>

        )
    });

    return (

        <Grid container key={phrasesData.BasicPhrasesID} direction="row" justify="center" >

            {myData}

        </Grid>

    )


}

const styles = {
    paperContainer: {
        marginBottom: 10,
        padding: 10,
        maxHeight: '100%',
        overflow: 'auto',
        width: '80%'
    }
}

export default PhrasesGridContainer;