import React from "react";
//? Materail UI Components
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Typography,
  Button
} from "@material-ui/core";

const ProductCard = ({title,image,price,description,category}) => {
  return (
    <div>
      <Card>
          <CardActionArea>
              <CardMedia title={title} image={image} />
              
              <CardContent>
                  <Typography title={category} />
              </CardContent>
          </CardActionArea>
          <CardActions>
              <Button variant='contained' color='primary'>Add To Cart</Button>
          </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
