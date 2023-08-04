import React from 'react';
import { Navigate, Route,Routes,useParams,Outlet } from 'react-router-dom';
import { useUser } from './useUser';
import Home from '../pages/Home';
import { useToken } from './useToken';


const PrivateRoutes = ({ children,path,...rest }) => {
  
  // const user  = true;
  // useUser();
  const { token } = useToken();

  console.log(token,'private token')
  
  if (!token) {
    return <Navigate to="/" />;
  }
  
  return children;
};

export default PrivateRoutes