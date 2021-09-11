import React from 'react';
import {ClipLoader} from 'react-spinners'
// Materail UI Components 
import {Container} from '@material-ui/core'
const Loading = () => {
    return (
        <Container maxWidth={'xs'} >
            <ClipLoader size={100} color="#8447ae"  />
        </Container>
    );
};

export default Loading;