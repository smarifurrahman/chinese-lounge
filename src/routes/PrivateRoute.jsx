import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <div className='w-[85%] mx-auto mt-10 text-center'>
            <progress className="progress w-56"></progress>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" ></Navigate>
};

export default PrivateRoute;