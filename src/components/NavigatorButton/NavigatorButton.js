import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const NavigatorButton = ({ icon, clickMethod,title }) => {

    return (
        
            <IconButton
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={clickMethod}
                title={title}
            >
                {icon}
            </IconButton>
        

    )

}

export default NavigatorButton;