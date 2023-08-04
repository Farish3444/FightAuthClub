import React, { useState, useEffect,useRef } from 'react';
import BoxLayout from '../components/BoxLayout';
import ReForm from '../components/ReForm';
import { Button, TextField } from '@mui/material';
import '../App.css';
import FightImg from '../../src/LoginImage.jpg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';
import { useUser } from '../auth/useUser';

const LoginPage = () => {

  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [token,setToken] = useToken();
  const { user } = useUser();
  const [loginval,setloginval] = useState({
    email:'',
    password:''
  });

  useEffect(()=>{
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
    console.log(token,'token USE VALUE')
  },[])

  const LoginAPI = async()=>{
    try{
      const response = await axios.post('http://localhost:8000/api/login',
      {
        email:loginval.email,
        password:loginval.password
      })
      const {token} = response.data;
      setToken(token);
      if(token){
      navigate('/home');
    }

    } catch(err){
      alert('Invalid username or Login')
        console.log('errrr login',err);
    }
  }  

  

  return (
    <>
      <BoxLayout bgcolor='lightblue'>
        <div className="loginContainer">
          <div className="formContainer">
            <h1>Welcome to FightClub</h1>
            <div className='FormLine'>
              <ReForm ref={inputRef} placeholder='Enter Username' label='Username' value={loginval.email} className={'short-input'} 
                onChange={e =>setloginval({...loginval,email:e.target.value})}
              />
              <ReForm placeholder='Enter password' label='Password' className={'short-input'} value={loginval.password} 
              onChange={e =>setloginval({...loginval,password:e.target.value})} />
              <Button variant="contained"
              onClick={LoginAPI}
              >Login</Button>
              <Button>
              <Link to={'/signup'}>
              New Comer, then SignUp to FightClub
              </Link>
              </Button>
            </div>
          </div>
          <div className="fightLogoContainer">
            <img src={FightImg} alt='fight' className='entryImg' />
          </div>
        </div>
      </BoxLayout>
    </>
  )
}

export default LoginPage;
