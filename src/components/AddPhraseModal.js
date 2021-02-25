import React from 'react';
import { Paper,Modal, Grid,makeStyles } from '@material-ui/core';
import PhrasesLeftGrid from './PhrasesLeftGrid';

function AddPhraseModal(){


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
    return(
        <div className={classes.root}>
            <Modal>
                <Grid container xs={6} sm={6}>
                    <Grid item >
                        <PhrasesLeftGrid/>

                    </Grid>
                </Grid>

            </Modal>
            
        </div>
    )

}

export default AddPhraseModal;