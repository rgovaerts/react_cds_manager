import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { AppBody } from './AppBody';
import './App.css';
import { AuthContext } from './AuthContext';
import { GuardedRoute } from './GuardedRoute';
import { LoginPage } from './LoginPage';
import { ApiContext } from './ApiContext';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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


const { REACT_APP_API_BASE_URL } = process.env;

const App = () => {
  const classes = useStyles();
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  if (REACT_APP_API_BASE_URL === undefined) {
    return <div>api undefined</div>
  }

  const handleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = (event: React.MouseEvent<HTMLElement>) => {
    setAuthToken(null);
  };
  return <Router basename="/web">
    <ApiContext.Provider value={REACT_APP_API_BASE_URL}>
      <AuthContext.Provider value={{ authToken, setAuthToken }}>
        <AppBar position="static">
          <Toolbar>
            {authToken &&
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            }
            <Typography variant="h6" className={classes.title}>
              CDS Manager
          </Typography>
            {authToken &&
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={handleUserMenu}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleUserMenuClose}
                >
                  <MenuItem onClick={handleLogout}>Log out</MenuItem>
                </Menu>
              </div>
            }
          </Toolbar>
        </AppBar>
        <Switch>
          <GuardedRoute path="/" exact component={AppBody} />
          <Route path="/login" exact component={LoginPage} />
        </Switch>
      </AuthContext.Provider>
    </ApiContext.Provider>
  </Router>
}

export default App;
