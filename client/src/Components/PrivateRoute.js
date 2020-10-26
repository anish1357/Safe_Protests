import React from 'react';
import { useLocation, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PrivateRoute = ({ children, ...rest }) => {

    const location = useLocation();

    const isAuth = useSelector(state => state.auth.isAuth);

    return (
        <Route
            {...rest}
            render={() =>
                isAuth ? (
                    // Logged in, render the children
                    children
                ) : (
                        // Not logged in, redirect to auth page
                        <Redirect to={{ pathname: "/login", state: { from: location } }} />
                    )
            }
        />
    );
};

export default PrivateRoute;
