import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate,Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignUppage from '../pages/SignUppage';
import Home from '../pages/Home';
import  PrivateRoutes  from '../auth/PrivateRoutes';
import { useUser } from '../auth/useUser';


const AllRoutes = () => {
  
  return (
    <>
      
    <Router>

      <Routes>     
        
      <Route path='/' index element={<LoginPage />} /> 

     <Route path='/home' element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
     } />
      
        
      <Route path='/signup' element={<SignUppage />} />
        
        </Routes>

      </Router>

    </>
  )
}

export default AllRoutes