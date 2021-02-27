import React, { useContext } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../../App';
import '../../styles/UpdatePhraseModal.css';

function UpdatePhraseModal({ open, pronunciation, russian, soundFileURL,sortOrder, toggleModal, changeHandler }) {

    const { updateItem } = useContext(AppContext);

    const updateChangeHandler = (e) => {
        console.log('updateChangeHandler');
        console.log(e);
        changeHandler(e);
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            height: '60%',
            flexGrow: 1,
            minWidth: '60%',
            transform: 'translateZ(0)',
            // The position fixed scoping doesn't work in IE 11.
            // Disable this demo to preserve the others.
            '@media all and (-ms-high-contrast: none)': {
                display: 'none',
            },
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        },
        modal: {
            display: 'flex',
            padding: theme.spacing(1),
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            width: 450,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            height: '60%'
        },
        center: {
            textAlign: 'center'
        },
        buttonContainer: {
            paddingTop: '5%',
            flex: 1,
            justifyContent: 'space-between',
            textAlign: 'center'
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Modal
                open={open}
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                className={classes.modal}
                onBackdropClick={toggleModal}
            >
                <div className={classes.paper}>
                    <div className="inputContainer">
                        <TextField style={{ width: '100%' }} placeholder='Pronunciation...' name='updatepronunciation' autoFocus value={pronunciation} onChange={updateChangeHandler} />
                    </div>
                    <div style={{ textAlign: 'center', marginBottom: 20 }} >
                        <TextField style={{ width: '100%' }} placeholder='Russian...' name='updaterussian' value={russian} onChange={updateChangeHandler} />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <TextField style={{ width: '100%' }} placeholder='Sound file URL...' name='updatesoundfile' multiline rows="2" value={soundFileURL} onChange={updateChangeHandler} />
                    </div>
                    <div>
                        <TextField style={{ width: '100%' }} placeholder='Sort order' name='updatesortorder' value={sortOrder} onChange={updateChangeHandler} />
                    </div>
                    <div style={styles.btnContainer}>
                        <Button color="primary" variant="outlined" style={styles.btnUpdate} onClick={updateItem} >Update</Button>
                        <Button color="secondary" variant="outlined" onClick={toggleModal} className="close" >Close</Button>
                    </div>
                </div>

            </Modal>
        </div>

    )
}

const styles = {
    btnContainer:{
        paddingTop: '5%',
        flex: 1,
        justifyContent: 'space-between',
        textAlign: 'center'
    },
    btnUpdate:{
        marginRight:10
    }
}

export default UpdatePhraseModal;