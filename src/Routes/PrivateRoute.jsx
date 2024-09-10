import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const location = useLocation()
    const { user, loading } = useAuth()

    if(loading){
        return <h2>Loading</h2>
    }
    if (!user) { return <Navigate to='/login' state={location?.pathname || '/'} /> }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;