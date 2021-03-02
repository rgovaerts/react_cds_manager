import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { AppBody } from './AppBody';
import './App.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const handleLoginMenu = (event: React.MouseEvent<HTMLElement>) => {
};

const { REACT_APP_API_BASE_URL } = process.env;

const App = () => {
  const classes = useStyles();
  if(REACT_APP_API_BASE_URL === undefined) {
    return <div>api undefined</div>
  }else {
  return (<div><AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              CDS Manager
            </Typography>
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleLoginMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
          </Toolbar>
        </AppBar>
        <AppBody apiBaseUrl={String(REACT_APP_API_BASE_URL)} ></AppBody></div>);
  }
}

export default App;
