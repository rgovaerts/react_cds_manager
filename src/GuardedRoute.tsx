import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useAuth } from './AuthContext';

export const GuardedRoute = ({ component, path, ...rest }: any) => {
    const { authToken } = useAuth();

    return <Route path={path} {...rest} render={(props: any) => (
        authToken ? React.createElement(component, props)
            : <Redirect to={{
                pathname: "/login",
                state: { redirectedFrom: path }
            }} />
    )} />
}
