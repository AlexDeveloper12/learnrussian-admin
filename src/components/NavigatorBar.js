import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import NavigatorButton from './NavigatorButton';

const NavigationBar = ({ icon, addIcon, toggleTheme, toggleModal }) => {

    return (
        <div>
            <AppBar style={{ padding: 10 }} >

                <Typography variant="h6" style={{ textAlign: 'center' }}>
                    Russian Admin
                    {/* <NavigatorButton
                        icon={icon}
                        changeTheme={toggleTheme}
                    /> */}
                    <NavigatorButton
                        icon={addIcon}
                        clickMethod={toggleModal}
                    />

                </Typography>
            </AppBar>
        </div>
    )
}

export default NavigationBar;

