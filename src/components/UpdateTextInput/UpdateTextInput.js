import React from 'react';
import TextField from '@material-ui/core/TextField';
import propTypes from 'prop-types';

function UpdateTextInput({ placeholder, value, name, isMulti, onChangeHandler, isAutoFocus }) {

    return (
        <div>
            <TextField
                placeholder={placeholder}
                value={value}
                name={name}
                multiline={isMulti ? true : false}
                onChange={onChangeHandler}
                autoFocus={isAutoFocus ? true : false}
                style={styles.txtInput}
            />
        </div>
    )
}

const styles = {
    txtInput: {
        width: '100%'
    }

}

UpdateTextInput.propTypes = {
    placeholder: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    isMulti: propTypes.bool.isRequired,
    onChangeHandler: propTypes.func.isRequired,
    isAutoFocus: propTypes.bool.isRequired
}

export default UpdateTextInput;