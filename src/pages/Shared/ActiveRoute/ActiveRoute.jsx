import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveRoute = ({ to, children }) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "text-green-start" : ""}
            >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveRoute;