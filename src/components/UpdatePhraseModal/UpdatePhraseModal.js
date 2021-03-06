import React, { useContext } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../../App';
import '../../styles/UpdatePhraseModal.css';
import UpdateTextInput from '../UpdateTextInput/UpdateTextInput';
import propTypes from 'prop-types';

function UpdatePhraseModal ({ open, pronunciation, russian, soundFileURL, sortOrder, toggleModal, changeHandler }) {
  const { updateItem } = useContext(AppContext);

  const updateChangeHandler = (e) => {
    changeHandler(e);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      height: '60%',
      flexGrow: 1,
      minWidth: '60%',
      transform: 'translateZ(0)',
      '@media all and (-ms-high-contrast: none)': {
        display: 'none'
      },
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    },
    modal: {
      display: 'flex',
      padding: theme.spacing(1),
      alignItems: 'center',
      justifyContent: 'center'
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

                    <UpdateTextInput
                        placeholder='Pronunciation...'
                        name='updatepronunciation'
                        value={pronunciation}
                        isAutoFocus={true}
                        onChangeHandler={updateChangeHandler}
                    />

                    <UpdateTextInput
                        placeholder='Russian...'
                        name='updaterussian'
                        value={russian}
                        onChangeHandler={updateChangeHandler}
                        isAutoFocus={false}
                    />

                    <UpdateTextInput
                        placeholder='Sound file URL...'
                        name='updatesoundfile'
                        isMulti={true}
                        value={soundFileURL}
                        onChangeHandler={updateChangeHandler}
                    />
                    <UpdateTextInput
                        placeholder='Sort order'
                        name='updatesortorder'
                        isMulti={false}
                        value={sortOrder}
                        onChangeHandler={updateChangeHandler}
                    />

                    <div style={styles.btnContainer}>
                        <Button color="primary" variant="outlined" style={styles.btnUpdate} onClick={updateItem} >Update</Button>
                        <Button color="secondary" variant="outlined" onClick={toggleModal} className="close" >Close</Button>
                    </div>
                </div>

            </Modal>
        </div>

  );
}

const styles = {
  btnContainer: {
    paddingTop: '5%',
    flex: 1,
    justifyContent: 'space-between',
    textAlign: 'center'
  },
  btnUpdate: {
    marginRight: 10
  }
};

UpdatePhraseModal.propTypes = {
  open: propTypes.bool.isRequired,
  pronunciation: propTypes.string.isRequired,
  russian: propTypes.string.isRequired,
  soundFileURL: propTypes.string.isRequired,
  sortOrder: propTypes.number.isRequired,
  toggleModal: propTypes.bool.isRequired,
  changeHandler: propTypes.func.isRequired
};

export default UpdatePhraseModal;
