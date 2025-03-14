import React from 'react'
import HomePage from './pages/HomePage';
import WebCamPage from './pages/WebCamPage';
import SuccessPage from './pages/SuccessPage';
import UnsuccessPage from './pages/UnsuccessPage';
import { Route, Routes } from 'react-router-dom';
import ErrorPageRoute from './pages/ErrorPageRoute';
import ProtectedRoute from './SDK/ProtectedRoute';
import LivelinessSDK from './SDK/LivelinessSDK';

function App() {

  return (
    <>
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
