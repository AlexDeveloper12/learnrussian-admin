import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const NavigationBar = () => {

    return (
        <div>
            <AppBar style={{padding:10}} >
                <Typography variant="h6">
                    Russian Admin
                    </Typography>
            </AppBar>
        </div>
    )
}

export default NavigationBar;

