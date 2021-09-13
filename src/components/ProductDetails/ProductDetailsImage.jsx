
import React from 'react';
// Material UI Component
import {ImageListItem,ImageList,Typography,Container} from '@material-ui/core'

const ProductDetailsImage = ({image,title}) => {
    return (
        <div>
            <Container>
                <Typography variant='h5' component="h4" >
                    {title}
                </Typography>
                <ImageList rowHeight="400" cols={2}>
                    <ImageListItem>
                        <img src={image} alt={title} />
                    </ImageListItem>
                </ImageList>
            </Container>
        </div>
    );
};

export default ProductDetailsImage;