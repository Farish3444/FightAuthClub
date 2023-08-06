import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate,Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignUppage from '../pages/SignUppage';
import Home from '../pages/Home';
import  PrivateRoutes  from '../auth/PrivateRoutes';
import { useUser } from '../auth/useUser';
import AddPage from '../pages/AddPage';
import ListPage from '../pages/ListPage';


const AllRoutes = () => {
  
  const user = useUser();

  return (
    <>
      
      <Routes>     
        
      <Route path='/' index element={<LoginPage />} /> 

    {
      Object.keys(user).length > 0 &&
      <Route path='/home' element={
        // <PrivateRoutes>
        <Home />
        // </PrivateRoutes>
      } /> 
    }  
      
        
      <Route path='/signup' element={<SignUppage />} />

      <Route path='/addpage' element={<AddPage />}   />
      <Route path='/listpage' element={<ListPage />} />
        
        </Routes>


    </>
  )
}

export default AllRoutes