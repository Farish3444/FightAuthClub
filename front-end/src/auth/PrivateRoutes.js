import React from 'react';
import { Navigate, Route,Routes,useParams,Outlet } from 'react-router-dom';
import { useUser } from './useUser';
import Home from '../pages/Home';
import { useToken } from './useToken';


const PrivateRoutes = ({ children,path,...rest }) => {
  
  const { user } = useUser();
  const token = useToken();
  
  
  if (!user) {
    return <Navigate to="/" />;
  }
  
  return children;
};

export default PrivateRoutes