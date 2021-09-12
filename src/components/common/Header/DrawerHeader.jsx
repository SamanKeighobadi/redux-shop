import React from "react";
// Import React Router Dom
import { Link } from "react-router-dom";
// Material UI Components
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  ChevronLeft,
  ShoppingCart,
  Person,
  PersonAdd,
  Home,
} from "@material-ui/icons";

const DrawerHeader = ({ open, handleCloseMenu }) => {
  return (
    <div>
      <Drawer anchor={"left"} open={open} variant="temporary">
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button onClick={handleCloseMenu}>
            <ListItemIcon>
              <ChevronLeft />
            </ListItemIcon>
          </ListItem>

          <Link to="/">
            <ListItem button onClick={handleCloseMenu}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>

          <Link to="/cart">
            <ListItem button onClick={handleCloseMenu}>
              <ListItemIcon>
                <ShoppingCart />
              </ListItemIcon>
              <ListItemText primary="Cart" />
            </ListItem>
          </Link>

          <Link to="/login">
            <ListItem button onClick={handleCloseMenu}>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
          </Link>

          <Link to="/register">
            <ListItem button onClick={handleCloseMenu}>
              <ListItemIcon>
                <PersonAdd />
              </ListItemIcon>
              <ListItemText primary="Register" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
};

export default DrawerHeader;
