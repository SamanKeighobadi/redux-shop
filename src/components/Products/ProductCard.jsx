import React from "react";
//? Materail UI Components
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import { AttachMoney } from "@material-ui/icons";
// makeStyles
import { useStyles } from "../customHooks/useStyles";
// React Router
import {Link} from 'react-router-dom'

const ProductCard = ({ title, image, price, category,productId }) => {
  const classes = useStyles();
  return (
    <Link to={`product/${productId}`} style={{textDecoration:'none'}}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.imageCard}
            image={image}
            component={"img"}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title.slice(0, 20)}
            </Typography>
            <Typography gutterBottom variant="subtitle2">
              Category: {category}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            className={classes.btn}
            size="small"
            variant={"contained"}
            color="primary"
          >
            buy
          </Button>
          <Button variant="text" color="secondary">
            {price} <AttachMoney fontSize="small" />
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export default ProductCard;
