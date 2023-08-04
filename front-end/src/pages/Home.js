import React, { useEffect } from 'react'
import FC from '../../src/OIP.jpeg';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  // useEffect(()=>{
  //   alert('we have entered home')
  // },[])

  return (
    <div>
        <img src={FC} alt='FC' />
        <Button 
        variant='contained'
        onClick={()=>{
          localStorage.removeItem('token');
          navigate('/');
      }}
        >
          LogOut
        </Button>
    </div>
  )
}

export default Home