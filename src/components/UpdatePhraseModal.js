import React, { useContext } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../App';

function UpdatePhraseModal({ open, pronunciation, english, russian, updatePhrase, toggleModal }) {

    const {updateItem} = useContext(AppContext);

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
                    <div style={{ textAlign: 'center' }}>
                        <TextField style={{ width: '100%' }} placeholder='Pronunciation...' autoFocus />
                    </div>
                    <div style={{ textAlign: 'center' }} >
                        <TextField style={{ width: '100%' }} placeholder='Russian...' />
                    </div>
                    <div>
                        <TextField style={{ width: '100%' }} placeholder='Sound file URL...' />
                    </div>
                    <div>
                        <TextField style={{ width: '100%' }} placeholder='Sort order' />
                    </div>
                    <div >
                        <Button color="primary" variant="outlined" style={{ marginRight: '20' }} onClick={updateItem} >Update</Button>
                        <Button color="secondary" variant="outlined" onClick={toggleModal}>Close</Button>
                    </div>
                </div>

            </Modal>
        </div>

    )


}

export default UpdatePhraseModal;