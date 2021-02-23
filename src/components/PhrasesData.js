import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { FaPen, FaTimesCircle } from 'react-icons/fa';
import { Paper } from '@material-ui/core';
import {AppContext} from '../App';

const PhrasesData = ({ pronunciation, description, ID, toggleModal }) => {

    console.log(AppContext);

    const {deleteItem} = useContext(AppContext);

    const togglePhraseModal = () => {
        toggleModal();
    }

    return (
        <Paper style={{ marginBottom: 10, padding: 10,maxHeight:'100%',overflow:'auto' }} key={ID} >
            <Typography variant="subtitle1">
                {pronunciation} - {description}
                <FaPen
                    onClick={togglePhraseModal}
                    style={{ marginLeft: 10 }}
                />
                <FaTimesCircle
                    style={{ marginLeft: 10 }}
                    onClick={deleteItem}
                />
            </Typography>
        </Paper>

    )
}

export default PhrasesData;