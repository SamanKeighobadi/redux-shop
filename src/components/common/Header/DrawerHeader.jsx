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
// Material UI Icons
import {
  ChevronLeft,
  ShoppingCart,
  Person,
  PersonAdd,
  Home,
} from "@material-ui/icons";
import { useStyles } from "../../customHooks/useStyles";

const DrawerHeader = ({ open, handleCloseMenu }) => {
  const classes = useStyles();

  return (
    <div>
      <Drawer anchor={"left"} open={open} variant="temporary">
        <List component="nav" aria-label="main mailbox folders">
          <ListItem className={classes.drawer} button onClick={handleCloseMenu}>
            <ListItemIcon>
              <ChevronLeft />
            </ListItemIcon>
          </ListItem>

          <Link to="/" className={classes.listItem} >
            <ListItem button onClick={handleCloseMenu}>
              <ListItemIcon>
                <Home color='primary' />
              </ListItemIcon>
              <ListItemText  primary="Home" />
            </ListItem>
          </Link>

          <Link to="/cart" className={classes.listItem}>
            <ListItem button onClick={handleCloseMenu}>
              <ListItemIcon>
                <ShoppingCart color='primary' />
              </ListItemIcon>
              <ListItemText primary="Cart" />
            </ListItem>
          </Link>

          <Link to="/login" className={classes.listItem}>
            <ListItem button onClick={handleCloseMenu}>
              <ListItemIcon>
                <Person color='primary' />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
          </Link>

          <Link to="/register" className={classes.listItem}>
            <ListItem button onClick={handleCloseMenu}>
              <ListItemIcon>
                <PersonAdd color='primary' />
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
