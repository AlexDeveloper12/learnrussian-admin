import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { FaPen, FaTimesCircle } from 'react-icons/fa';
import { Paper, Grid } from '@material-ui/core';
import { AppContext } from '../App';

const PhrasesData = ({ pronunciation, description, ID, toggleModal, value, sortOrder,phraseType }) => {

    const { deleteItem } = useContext(AppContext);

    const togglePhraseModal = (item) => {
        toggleModal(item);
    }

    console.log(phraseType);

    return (

        <Paper style={{ marginBottom: 10, padding: 10, maxHeight: '100%', overflow: 'auto', width: '80%' }} key={ID} >
            <Typography variant="subtitle1">
                {pronunciation} - {description}
            </Typography>
            <div>
                <FaPen
                    onClick={() => togglePhraseModal(value)}
                    style={{ marginLeft: 10 }}
                />
                <FaTimesCircle
                    style={{ marginLeft: 10 }}
                    onClick={deleteItem}

                />
            </div>
            <div>
                <span style={{textAlign:'center',fontSize:10}}>{sortOrder}</span>
            </div>
            <div>
            Phrase type:{phraseType.isGreeting===1?<span>Greeting</span>:''} {phraseType.isGeneral===1?<span>General</span>:''} {phraseType.isLanguage===1?<span>Language</span>:''}
            </div>
        </Paper>

    )
}

export default PhrasesData;