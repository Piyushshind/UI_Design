import React, { useEffect } from 'react'
import HomePage from './pages/HomePage';
import WebCamPage from './pages/WebCamPage';
import SuccessPage from './pages/SuccessPage';
import UnsuccessPage from './pages/UnsuccessPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ErrorPageRoute from './pages/ErrorPageRoute';
import ProtectedRoute from './SDK/ProtectedRoute';
import LivelinessSDK from './SDK/LivelinessSDK';
import { WarningBanner } from './componants/error/WarningBanner';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    // Warn before unload
    const handleBeforeUnload = (e) => {
      const message =
        "Leaving this page will terminate the verification process.";
      e.returnValue = message;
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const preventBackAndForward = (e) => {
      e.preventDefault();
      navigate('*', { replace: true });
      alert("navigation is disable")
    };

    window.addEventListener('popstate', preventBackAndForward);

    return () => {
      window.removeEventListener('popstate', preventBackAndForward);
    };
  }, [navigate]);
  return (
    <>
      <WarningBanner />
      <Routes>
        <Route path="/customer/:customerId/token/:token" element={<LivelinessSDK />} />
        <Route path="*" element={<ErrorPageRoute />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/fail" element={<UnsuccessPage />} />
          <Route path="/webcam" element={<WebCamPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
