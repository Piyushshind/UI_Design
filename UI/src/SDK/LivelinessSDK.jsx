import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { authState } from '../recoil/atom';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

const LivelinessSDK = () => {
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const [auth, setAuth] = useRecoilState(authState);
    const { customerId, token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const authenticateUser = async () => {
            try {
                sessionStorage.setItem("customerId", customerId);
                sessionStorage.setItem("authToken", token);

                const response = await axiosInstance.post(
                    `${customerId}/validate`,
                    { token: token },
                    { headers: { "Authorization": token } }
                );
                if (response.status === 200) {
                    setAuth({
                        isAuthenticated: true,
                        jwtToken: response.data.JWT_TOKEN,
                        usedCount: response.data.Used,
                        customerId: customerId,
                        token: token
                    });
                    // console.log(auth);
                    navigate("/home");

                } else {
                    throw new Error("Token verification failed");
                }
            } catch (error) {
                console.error("Authentication failed:", error);
                navigate("/error");
            } finally {
                setIsAuthenticating(false);
            }
        };

        authenticateUser();
    }, [customerId, token, navigate, setAuth]);


    return (
        <>
            <div>
                {isAuthenticating ? <p>Authenticating...</p> : <p>Authenticated! Redirecting...</p>}
            </div>
        </>
    )
}

export default LivelinessSDK;