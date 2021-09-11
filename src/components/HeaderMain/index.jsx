import { AppBar, Box, makeStyles, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    ul: {
        display: 'flex',
        listStyleType: 'none',
        flexDirection: 'row',
        '& > li': {
            marginRight: '20px',
        },
    },
    appbar: {
        backgroundColor: '#fed100',
    },
    link: {
        color: '#000000',
        textDecoration: 'none',
    },
    toolbar: {
        minHeight: '50px',
    },
}));

const category = [
    {
        id: 1,
        name: 'Dien Thoai',
        path: '/dienthoai',
    },
    {
        id: 2,
        name: 'LapTop',
        path: '/laptop',
    },
    {
        id: 3,
        name: 'Tablet',
        path: '/tablet',
    },
    {
        id: 4,
        name: 'Dong Ho Thong Minh',
        path: '/donghothongminh',
    },
];

function HeaderMain() {
    const classes = useStyles();
    return (
        <Box>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <Box component="ul" className={classes.ul}>
                        {category.map((x) => (
                            <li key={x.id}>
                                <NavLink className={classes.link} to={x.path}>
                                    {x.name}
                                </NavLink>
                            </li>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default HeaderMain;
