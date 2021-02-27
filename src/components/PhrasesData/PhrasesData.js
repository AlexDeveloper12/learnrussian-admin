import React from 'react';
import {Paper,Grid,Typography} from '@material-ui/core'
import {FaTimesCircle,FaPen} from 'react-icons/fa';

function PhrasesData({phraseType,toggleModal,deleteMethod,phraseObject}){

    const {BasicPhrasesID,BasicPhrasesDescription,SortOrder,Pronunciation} = phraseObject;

    return(
        <Grid item xs={4} md={4} lg={4} >

        <Paper style={styles.paperContainer} key={BasicPhrasesID}>
            <Typography variant="subtitle1" style={{ textAlign: 'center' }} >
                {Pronunciation} - {BasicPhrasesDescription}
            </Typography>
            <div style={{ textAlign: 'center' }}>
                <FaPen
                    onClick={()=>toggleModal(phraseObject)}
                    style={{ marginLeft: 10 }}
                />
                <FaTimesCircle
                    onClick={()=>deleteMethod(phraseObject)}
                    style={{ marginLeft: 10 }}
                />
            </div>
            <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: 10 }}>{SortOrder}</span>
            </div>

            <div style={{ textAlign: 'center' }}>
                Phrase type:{phraseType.isGreeting === 1 ? <span>Greeting</span> : ''} {phraseType.isGeneral === 1 ? <span>General</span> : ''} {phraseType.isLanguage === 1 ? <span>Language</span> : ''}
            </div>

        </Paper>

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

export default PhrasesData;