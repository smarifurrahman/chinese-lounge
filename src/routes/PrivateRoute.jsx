import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../pages/Shared/Spinner/Spinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <Spinner></Spinner>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" ></Navigate>
};

export default PrivateRoute;