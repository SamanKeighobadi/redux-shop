import React from 'react';
//? Materai UI Components
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core'

const AppBarHeader = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>

                    <Typography as='h5'>
                        Material UI
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default AppBarHeader;