import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { FaPen, FaTimesCircle } from 'react-icons/fa';
import { Paper, Grid } from '@material-ui/core';
import { AppContext } from '../App';

const PhrasesData = ({ pronunciation, description, ID, toggleModal,value }) => {

    const { deleteItem } = useContext(AppContext);

    const togglePhraseModal = (item) => {
        toggleModal(item);
    }

    return (

        <Paper style={{ marginBottom: 10, padding: 10, maxHeight: '100%', overflow: 'auto', width: '80%' }} key={ID} >
            <Typography variant="subtitle1">
                {pronunciation} - {description}
            </Typography>
            <div>
                <FaPen
                    onClick={()=>togglePhraseModal(value)}
                    style={{ marginLeft: 10 }}
                />
                <FaTimesCircle
                    style={{ marginLeft: 10 }}
                    onClick={deleteItem}

                />
            </div>
        </Paper>

    )
}

export default PhrasesData;