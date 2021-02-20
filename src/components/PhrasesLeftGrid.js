import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CheckBox from '@material-ui/core/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function PhrasesLeftGrid({ pronunciation, english, russian, changeHandler, addPhrase }) {

    const phraseChangeHandler = (e) => {
        changeHandler(e);
    }
    const add = () => {
        addPhrase();
    }

    const styles = {
        width:'100%',
        marginBottom:30,
        container:{
            height:'40%',
            width:'100%'
        }
    }

    return (

        <Paper style={styles.container}>
            <TextField name="pronunciation" style={styles} onChange={phraseChangeHandler} multiline autoFocus variant="outlined" value={pronunciation} placeholder="Pronunciation..." />
            <TextField name="english" style={styles} onChange={phraseChangeHandler} multiline variant="outlined" value={english} placeholder="English..." />
            <TextField name="russian" style={styles} onChange={phraseChangeHandler} multiline variant="outlined" value={russian} placeholder="Russian..." />
            <TextField style={styles} onChange={phraseChangeHandler} multiline variant="outlined" placeholder="Soundfile URL..." />

            <FormControlLabel control={<CheckBox />} label="Greeting Phrase?" />
            <FormControlLabel control={<CheckBox />} label="General Phrase?" />
            <FormControlLabel control={<CheckBox />} label="Language Phrase?" />
            {/*             
            <CheckBox />
            <CheckBox /> */}
            <div>
                <Button variant="outlined" color="primary" onClick={add}> Add Phrase</Button>
            </div>





        </Paper>
    )


}

export default PhrasesLeftGrid;