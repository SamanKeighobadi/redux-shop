import React from "react";
//? Materail UI Components
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Typography,
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
              
          </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
