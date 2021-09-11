import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import React from 'react';

Product.propTypes = {};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: theme.spacing(3),
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        paddingRight: theme.spacing(2),
    },
}));

function Product(props) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            {Array.from(new Array(10)).map((x, index) => (
                <Box className={classes.box} key={index}>
                    <Skeleton variant="rect" width={210} height={118} />
                    <Skeleton variant="text" width={210} />
                    <Skeleton variant="text" width={210} />
                </Box>
            ))}
        </Box>
    );
}

export default Product;
