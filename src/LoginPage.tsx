import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { Button, Card, CardActions, CardContent, CircularProgress, createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { useApi } from './ApiContext';

interface AppPageProps {
    apiBaseUrl: string,
    redirectedFrom: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        inputs: {
            paddingTop: theme.spacing(1),
        }
    }),
);

export const LoginPage = ({ redirectedFrom = "/" }: AppPageProps) => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setloading] = useState(false)
    const [wrongCredentials, setWrongCredentials] = useState(false)
    const { authToken, setAuthToken } = useAuth();
    const apiBaseUrl = useApi();
    const classes = useStyles();

    const login = (username: string, password: string) => {
        setloading(true);
        axios.post(apiBaseUrl + "/login", {
            username: username,
            password: password
        })
            .then(res => {
                setAuthToken(res.data.token)
            }).catch(e => {
                setWrongCredentials(true);
            }).finally(() => {
                setloading(false);
            })
    }

    if (loading) {
        return <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={3}>
                <CircularProgress />
            </Grid>
        </Grid>

    }
    if (authToken) {
        return <Redirect to={{
            pathname: redirectedFrom,
        }} />
    }

    return <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
    >
        <Grid item xs={3}>
            <Card>
                {loading ? <CircularProgress /> :
                    <div>
                        <CardContent>
                            {wrongCredentials &&
                                <Alert severity="error" className={classes.inputs}>Failed to login</Alert>
                            }
                            <TextField className={classes.inputs} fullWidth
                                id="outlined-username-input"
                                placeholder="Username"
                                type="username"
                                autoComplete="current-username"
                                variant="outlined"
                                onChange={e => setUserName(e.target.value)}
                            />
                            <TextField className={classes.inputs} fullWidth
                                id="outlined-password-input"
                                placeholder="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="outlined"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => login(username, password)} variant="contained" color="primary" fullWidth>Log in</Button>
                        </CardActions>
                    </div>
                }
            </Card>
        </Grid>
    </Grid>

}