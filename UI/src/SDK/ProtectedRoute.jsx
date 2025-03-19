import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../recoil/atom';

const ProtectedRoute = () => {
    const auth = useRecoilValue(authState);

    return (
        <>
            {auth.isAuthenticated ? <Outlet /> : <Navigate to="/customer/:customerId/token/:token" replace={true} />}
        </>
    );
};

export default ProtectedRoute;
