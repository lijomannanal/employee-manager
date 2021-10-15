import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    appBar: {
        backgroundColor: "#343A40",
        height: "50px",
        '& .MuiToolbar-regular': {
            minHeight: "50px"
        }
    },
    title: {
        marginRight: "15px"
    },
    appTitle: {
        color: '#fff',
        textDecoration: 'none'
    }
}))

const Header = () => {
    const { appBar, title, appTitle } = useStyles();

    return (
        <AppBar className={appBar} position="static">
        <Toolbar>
        <Typography className={title} variant="h6">
            <Link className={appTitle} to="/">Employee Manager</Link>
        </Typography>
        </Toolbar>
        </AppBar>
    )
}  

export default Header;
