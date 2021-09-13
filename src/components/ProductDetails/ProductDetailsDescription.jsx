import React from "react";
// Materail UI Component
import { Typography, Button, Container } from "@material-ui/core";
import { AttachMoney } from "@material-ui/icons";
import UtilsAccordion from "../utils/UtilsAccordion";
import { useStyles } from "../customHooks/useStyles";

const ProductDetailsDescription = ({ description, price, category }) => {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Typography variant="h6" className={classes.title} color="textPrimary">
          category: {category}
        </Typography>
        <Typography variant="body1">{description}</Typography>
        <div className={classes.title}>
          <Button variant="contained" color="primary" size="small">
            buy
          </Button>
          <Button color="secondary" size="large">
            {price} <AttachMoney fontSize="small" />
          </Button>
        </div>
        <div className={classes.title}>
          <UtilsAccordion />
          <UtilsAccordion />
        </div>
      </Container>
    </div>
  );
};

export default ProductDetailsDescription;
