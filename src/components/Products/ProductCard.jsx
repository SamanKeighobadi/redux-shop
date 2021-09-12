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

const ProductCard = ({ title, image, price, category }) => {
  return (
    <div>
      <Card >
        <CardActionArea>
          <CardMedia image={image} component={'img'} title={title} />
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
          <Button size="small" variant={'contained'} color="primary">
            Add To Cart
          </Button>
        <Button>
          {price}
        </Button>

        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
