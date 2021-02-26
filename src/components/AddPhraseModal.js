import React from 'react';
import { Modal, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import CheckBox from '@material-ui/core/CheckBox';

function AddPhraseModal({ open, phraseChangeHandler, pronunciation, russian, soundFileURL, sortOrder, checkBoxObject,add,cbHandler,toggleAddModal  }) {

    const useStyles = makeStyles((theme) => ({
        root: {
            height: '60%',
            flexGrow: 1,
            minWidth: '60%',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            
        },
        modal: {
            display: 'flex',
            padding: theme.spacing(1),
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            width: 550,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            height: '70%',
            marginLeft:'30%',
            marginTop:'5%'
        },
        center: {
            textAlign: 'center'
        },
        btnContainer: {
            paddingTop: '5%',
            flex: 1,
            justifyContent: 'space-between',
            textAlign: 'center'
        },
        btnClose:{
            marginLeft:20
        }
    }));

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Modal open={open} onBackdropClick={open}>
                <div className={classes.paper}>
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
                        control={<CheckBox/>}
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

                    <div className={classes.btnContainer}>
                        <Button variant="outlined" color="secondary" onClick={add}  > Add Phrase</Button>
                        <Button variant="outlined" color="secondary" onClick={toggleAddModal} className={classes.btnClose}>Close</Button>
                    </div>

                </div>


            </Modal>

        </div>
    )
}


const styles = {
    width: '100%',
    marginBottom: 30,
    container: {
        height: '30%',
        width: '100%'
    },
    color: 'white',

}

export default AddPhraseModal;