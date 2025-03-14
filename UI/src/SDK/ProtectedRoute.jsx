import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../recoil/atom';

const ProtectedRoute = ({ element, ...rest }) => {
    const auth = useRecoilValue(authState);

    return (
        <>
            {auth.isAuthenticated ? <Outlet /> : <Navigate to="/customer/:customerId/token/:token" />}
            {/* <Route
                {...rest}
                element={auth.isAuthenticated ? element : <Navigate to="/customer/:customerId/token/:token" />}
            /> */}
        </>
    );
};

export default ProtectedRoute;
