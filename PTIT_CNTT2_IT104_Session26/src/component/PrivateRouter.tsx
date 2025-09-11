import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ children }: any) => {
  const [check, setCheck] = useState(false);
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setCheck(true);
    }
  }, []);
  if (!check) {
    return <Navigate to="/login" />
  }

  return children;
};

export default PrivateRouter;
