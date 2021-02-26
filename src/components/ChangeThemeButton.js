import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const ChangeThemeButton = ({ icon, changeTheme }) => {

    return (
        
            <IconButton
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={changeTheme}
            >
                {icon}
            </IconButton>
        

    )

}

export default ChangeThemeButton;