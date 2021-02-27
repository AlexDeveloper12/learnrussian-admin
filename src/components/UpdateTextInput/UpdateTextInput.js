import React from 'react';
import TextField from '@material-ui/core/TextField';

function UpdateTextInput({ placeholder, value, name, isMulti,onChangeHandler,isAutoFocus }) {

    return (
        <div>
            <TextField
                placeholder={placeholder}
                value={value}
                name={name}
                multiline={isMulti ? true : false}
                onChange={onChangeHandler}
                autoFocus={isAutoFocus?true:false}
                style={styles.txtInput}
            />
        </div>
    )

}

const styles = {
    txtInput:{
        width:'100%'
    }
    
}

export default UpdateTextInput;