import React from 'react';
import './App.scss';
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import imageFile from './static/chrisubick.jpg';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function App() {
    const classes = useStyles();
    const avatarImage = {
        src: imageFile,
        alt: 'my image',
    };
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    function handleChange(event: any) {
        setAuth(event.target.checked);
    }

    function handleMenu(event: any) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div className={classes.root}>
            {/*<FormGroup>*/}
            {/*    <FormControlLabel*/}
            {/*        control={<Switch checked={auth} onChange={handleChange} aria-label="LoginSwitch"/>}*/}
            {/*        label={auth ? 'Logout' : 'Login'}*/}
            {/*    />*/}
            {/*</FormGroup>*/}
            <AppBar position="static">
                <Toolbar>
                    {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">*/}
                    {/*    <MenuIcon/>*/}
                    {/*</IconButton>*/}
                    <Avatar alt="Remy Sharp" src={avatarImage.src} className={classes.avatar}/>
                    <Typography variant="h6" className={classes.title}>
                        Chris Ubick
                    </Typography>
                    {/*{auth && (*/}
                    {/*    <div>*/}
                    {/*        <IconButton*/}
                    {/*            aria-label="Account of current user"*/}
                    {/*            aria-controls="menu-appbar"*/}
                    {/*            aria-haspopup="true"*/}
                    {/*            onClick={handleMenu}*/}
                    {/*            color="inherit"*/}
                    {/*        >*/}
                    {/*            <AccountCircle/>*/}
                    {/*        </IconButton>*/}
                    {/*        <Menu*/}
                    {/*            id="menu-appbar"*/}
                    {/*            anchorEl={anchorEl}*/}
                    {/*            anchorOrigin={{*/}
                    {/*                vertical: 'top',*/}
                    {/*                horizontal: 'right',*/}
                    {/*            }}*/}
                    {/*            keepMounted*/}
                    {/*            transformOrigin={{*/}
                    {/*                vertical: 'top',*/}
                    {/*                horizontal: 'right',*/}
                    {/*            }}*/}
                    {/*            open={open}*/}
                    {/*            onClose={handleClose}*/}
                    {/*        >*/}
                    {/*            <MenuItem onClick={handleClose}>Profile</MenuItem>*/}
                    {/*            <MenuItem onClick={handleClose}>My account</MenuItem>*/}
                    {/*        </Menu>*/}
                    {/*    </div>*/}
                    {/*)}*/}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default App;
