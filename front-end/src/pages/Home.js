import React, { useEffect,useMemo } from 'react'
import FC from '../../src/OIP.jpeg';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {

  const navigate = useNavigate();

   useEffect(()=>{
     console.log('we have entered home')
   },[])

  return (
    <div>
    <Header />
        <img src={FC} alt='FC' />
    </div>
  )
}

export default Home