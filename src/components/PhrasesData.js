import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FaPen } from 'react-icons/fa';
import { Paper } from '@material-ui/core';

const PhrasesData = ({ pronunciation, description, ID, toggleModal }) => {

    const togglePhraseModal = () => {
        toggleModal();
    }

    return (
        <Paper style={{marginBottom:10,padding:10}}>
            <Typography variant="subtitle1">
                {pronunciation} - {description}
                <FaPen onClick={togglePhraseModal} />
            </Typography>
        </Paper>

    )


}

export default PhrasesData;