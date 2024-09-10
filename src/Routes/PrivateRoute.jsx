import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useAuth()
    const location = useLocation()
    if(!user)
        {return <Navigate to='/login' state={location?.pathname || '/'}/>}
        
    return (
        <div>
           {children}
        </div>
    );
};

export default PrivateRoute;