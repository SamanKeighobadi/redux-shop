
import React from 'react';
// Material UI Component
import {ImageListItem,ImageList,Typography,Container} from '@material-ui/core'
import { useStyles } from '../customHooks/useStyles';

const ProductDetailsImage = ({image,title}) => {

    const classes = useStyles()

    return (
        <div>
            <Container >
                <Typography className={classes.title} variant='h5' component="h4" >
                    {title}
                </Typography>
                <ImageList   rowHeight="400" cols={1}>
                    <ImageListItem  >
                        <img  src={image} alt={title} />
                    </ImageListItem>
                </ImageList>
            </Container>
        </div>
    );
};

export default ProductDetailsImage;