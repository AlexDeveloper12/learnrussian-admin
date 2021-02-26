import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import ChangeThemeButton from './ChangeThemeButton';
import MicIcon from '@material-ui/icons/Mic';

const NavigationBar = ({ icon, toggleTheme }) => {

    return (
        <div>
            <AppBar style={{ padding: 10 }} >

                <Typography variant="h6" style={{ textAlign: 'center' }}>
                    Russian Admin
                    <ChangeThemeButton
                        icon={icon}
                        changeTheme={toggleTheme}
                    />
                   
                </Typography>
            </AppBar>
        </div>
    )
}

export default NavigationBar;

