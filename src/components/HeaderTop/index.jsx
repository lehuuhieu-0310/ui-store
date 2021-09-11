import { Box, Dialog, DialogContent, IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Register from '../../features/Auth/components/Register';
import Login from '../../features/Auth/components/Login';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    appbar: {
        backgroundColor: 'black',
        color: 'white',
    },
    toolbar: {
        minHeight: '50px',
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    },
}));

const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
};

function HeaderTop() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);

    const handleClickOpen = () => {
        setMode(MODE.LOGIN);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit" className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" className={classes.title}>
                        <BrowserRouter>
                            <NavLink className={classes.link} to="/">
                                STORE
                            </NavLink>
                        </BrowserRouter>
                    </Typography>
                    <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>

            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose} aria-labelledby="simple-dialog-title">
                <IconButton onClick={handleClose} className={classes.closeButton}>
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    {mode === MODE.LOGIN && (
                        <>
                            <Login />
                            <Box textAlign="right" marginBottom="8px">
                                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                                    Create New Account
                                </Button>
                            </Box>
                        </>
                    )}
                    {mode === MODE.REGISTER && (
                        <>
                            <Register />
                            <Box textAlign="right" marginBottom="8px">
                                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                                    Login
                                </Button>
                            </Box>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default HeaderTop;
