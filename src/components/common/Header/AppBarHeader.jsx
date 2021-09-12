import React from "react";
//? Materai UI Components
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const AppBarHeader = ({ handleOpenMenu }) => {


  return (
    <div>
      <AppBar position="sticky" >
        <Toolbar>
          <IconButton
            onClick={handleOpenMenu}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography as="h4">Redux Shop</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarHeader;
