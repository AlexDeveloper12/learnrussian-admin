import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import NavigatorButton from '../NavigatorButton/NavigatorButton';

const NavigationBar = ({ icon, addIcon, toggleTheme, toggleModal }) => {

    return (
        <div>
            <AppBar style={{ padding: 10 }} >

                <Typography variant="h6" style={{ textAlign: 'center' }}>
                    Russian Admin
                    <NavigatorButton
                        icon={addIcon}
                        clickMethod={toggleModal}
                        title={'Add Phrase?'}
                    />

                </Typography>
            </AppBar>
        </div>
    )
}

export default NavigationBar;

