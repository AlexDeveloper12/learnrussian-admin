import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const NavigatorButton = ({ icon, clickMethod }) => {

    return (
        
            <IconButton
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={clickMethod}
            >
                {icon}
            </IconButton>
        

    )

}

export default NavigatorButton;