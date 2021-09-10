import React from 'react';
// Material UI Components
import {Drawer,List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'
import {InboxIcon,MailIcon} from '@material-ui/icons'

const DrawerHeader = ({open}) => {


    return (
        <div>
            <Drawer anchor={'left'} open={open} variant='permanent'>
          

            </Drawer>
        </div>
    );
};

export default DrawerHeader;