import React from 'react';
// Materail UI Component
import {Typography,Button,Container} from '@material-ui/core'
import {AttachMoney} from '@material-ui/icons'

const ProductDetailsDescription = ({description,price,category}) => {
    return (
        <div>
            <Container>
                <Typography variant='h6' color='textPrimary' >
                    category: {category}
                </Typography>
                <Typography variant='body1'>
                    {description}
                </Typography>
                <Button variant='contained' color='primary' size='small'>
                buy
                </Button>
                <Button color='secondary' size='large'  >
                    {price} <AttachMoney fontSize='small' />
                </Button>
            </Container>
        </div>
    );
};

export default ProductDetailsDescription;