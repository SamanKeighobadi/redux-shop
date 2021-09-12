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
import {AttachMoney} from '@material-ui/icons'

import {useStyles} from "../customHooks/useStyles";


const ProductCard = ({ title, image, price, category }) => {

  const classes = useStyles()

  return (
    <div>
      <Card className={classes.card} >
        <CardActionArea>
          <CardMedia className={classes.imageCard} image={image} component={'img'} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title.slice(0,20)}
            </Typography>
            <Typography gutterBottom variant='subtitle2' >
             Category: {category}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className={classes.btn} size="small" variant={'contained'} color="primary">
            Add To Cart
          </Button>
        <Button variant='text' color='secondary'>
          {price} <AttachMoney fontSize='small' />
        </Button>

        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
