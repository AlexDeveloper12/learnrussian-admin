import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const ChangeThemeButton = ({ icon, changeTheme }) => {

    return (
        <div>
            <IconButton
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={changeTheme}
            >
                {icon}
            </IconButton>
        </div>

    )

}

export default ChangeThemeButton;