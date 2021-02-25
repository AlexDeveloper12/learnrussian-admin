import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CheckBox from '@material-ui/core/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function PhrasesLeftGrid({ pronunciation, russian,soundFileURL,sortOrder, changeHandler, addPhrase, checkBoxHandler, checkBoxObject }) {

    const phraseChangeHandler = (e) => {
        changeHandler(e);
    }
    const add = () => {
        addPhrase();
    }

    const cbHandler = (name) => {
        checkBoxHandler(name);
    }

    const styles = {
        width: '100%',
        marginBottom: 30,
        container: {
            height: '30%',
            width: '100%'
        },
        color:'white'
    }

    return (

        <Paper style={styles.container}>
            
            <TextField
                name="pronunciation"
                style={styles}
                onChange={phraseChangeHandler}
                multiline
                autoFocus
                variant="outlined"
                value={pronunciation}
                placeholder="Pronunciation..."
            />

            <TextField
                name="russian"
                style={styles}
                onChange={phraseChangeHandler}
                multiline
                variant="outlined"
                value={russian}
                placeholder="привет - hello (in this format)"
            />


            <TextField
                style={styles}
                onChange={phraseChangeHandler}
                multiline
                variant="outlined"
                placeholder="Soundfile URL..."
                name="soundfile"
                value={soundFileURL}

            />


            <TextField
                style={styles}
                onChange={phraseChangeHandler}
                variant="outlined"
                placeholder="Sort Order..."
                name="sortorder"
                value={sortOrder}

            />

            <FormControlLabel
                control={<CheckBox />}
                label="Greeting Phrase?"
                onClick={(event) => cbHandler(event)}
                name="greetingphrase"
                checked={checkBoxObject["greeting"]}
            />


            <FormControlLabel
                control={<CheckBox />}
                label="General Phrase?"
                onClick={(event) => cbHandler(event)}
                name="generalphrase"
                checked={checkBoxObject["general"]}
            />

            <FormControlLabel
                control={<CheckBox />}
                label="Language Phrase?"
                onClick={(event) => cbHandler(event)}
                name="languagephrase"
                checked={checkBoxObject["language"]}

            />

            <div style={{textAlign:'center'}}>
                <Button variant="outlined" color="primary" onClick={add}> Add Phrase</Button>
            </div>





        </Paper>
    )


}

export default PhrasesLeftGrid;