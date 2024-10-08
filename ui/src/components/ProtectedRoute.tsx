// src/components/ProtectedRoute.tsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../services/AuthContext';

interface Props {
    children: JSX.Element;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
    const auth = useContext(AuthContext);

    if (auth?.user === null) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
