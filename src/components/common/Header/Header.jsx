import React ,{useState}from 'react';
// Import Component
import AppBarHeader from './AppBarHeader';
import DrawerHeader from './DrawerHeader';

const Header = () => {

    const [open,setOpen] = useState(false)

    const handleOpenMenu = () => {
        setOpen(true)
    }

    const handleCloseMenu = () => {
        setOpen(false)
    }

    return (
        <div>
            <AppBarHeader handleOpenMenu={handleOpenMenu} />
            <DrawerHeader open={open} handleCloseMenu={handleCloseMenu} />
        </div>
    );
};

export default Header;