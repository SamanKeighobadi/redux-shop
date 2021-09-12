import React from 'react';
import {ClipLoader} from 'react-spinners'
// Materail UI Components 
import {Container} from '@material-ui/core'
// makeStyles 
import {useStyles} from '../customHooks/useStyles'

const Loading = () => {

    const classes = useStyles()

    return (
        <Container maxWidth={'xs'} className={classes.loadingContainer} >
            <ClipLoader size={120} />
        </Container>
    );
};

export default Loading;