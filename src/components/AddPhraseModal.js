import React from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function AddPhraseModal({ open, pronunciation, english, russian,updatePhrase }) {

    const Update = () =>{
        updatePhrase();
    }

    return (
        <Modal
            onBackdropClick={open}
            open={open}>
            <div style={{ height: '50%',marginLeft:'-50%',marginRight:'-50%', backgroundColor: 'white' }}>
                <div style={{textAlign:'center'}}>
                    <TextField value={pronunciation} autoFocus />
                </div>
                <div style={{textAlign:'center'}}>
                    <TextField value={english} />
                </div>
                <div style={{textAlign:'center'}}>
                    <TextField value={russian} />
                </div>
                
                <div style={{textAlign:'center'}}>
                    <Button color="primary" variant="outlined" onClick={Update}>Update</Button>
                </div>


            </div>

        </Modal>

    )


}

export default AddPhraseModal;