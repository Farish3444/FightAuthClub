// import React from 'react'
import React, { useState, useEffect } from 'react';
import BoxLayout from '../components/BoxLayout';
import ReForm from '../components/ReForm';
import { Button } from '@mui/material';
import '../App.css';
import FightImg from '../../src/LoginImage.jpg';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';

const SignUppage = () => {

  const navigate = useNavigate();
  const tokenlocal = localStorage.getItem('token')

  const [signupData,setSignupdata] = useState({
    name:'',
    password:'',
    confirmpassword:''
  });

  const [inputval,setinputval] = useState({
    name:false,
    password:false,
    confirmpassword:false
  });

//   const onSignUpClicked = async () => {
//     const response = await axios.post('http://localhost:8000/api/signup', {
//         email: emailValue,
//         password: passwordValue,
//     });
//     const { token } = response.data;
//     setToken(token);
//     navigate('/home');
// }

  const SignUpAPI = async()=>{
    const { name, password, confirmpassword } = signupData;

    console.log(name,password,confirmpassword)
    if (
      // name.length < 5 || 
      password.length < 5 || password !== confirmpassword) {
      setinputval({
        name: name.length < 5,
        password: password.length < 5,
        confirmpassword: password !== confirmpassword
      });
      return;
    }


    try {
      console.log(tokenlocal);
      const response = await fetch('http://localhost:8000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenlocal}`
        },
        body: JSON.stringify({
          email: name,
          password:password
        })
      });
    
      if (response.status === 200) {
        const responseData = await response.json();
        console.log(responseData);
        navigate('/home');
      } else if (response.status === 409) {
        const errorText = await response.text();
        console.log('Conflict: The resource already exists.', errorText);
        // Handle the conflict appropriately, e.g., display an error message to the user
      } else {
        const errorData = await response.json();
        console.log('Other error:', errorData);
        // Handle other error cases, e.g., display a generic error message to the user
      }
    } catch (err) {
      console.log(err, 'Error from catch');
      // Handle other types of errors, e.g., network errors
    }
  }

  const handleChangeName =(e)=>{
    e.preventDefault();
    console.log(signupData.name.length)
   if(signupData.name.length > 5){
     setSignupdata({...signupData,name:e.target.value})
     console.log(signupData.name,'name')
   } else{
      setinputval(true);
   }
  }

  return (
    <BoxLayout bgcolor='lightblue'>
    <div className="loginContainer">
      <div className="formContainer">
        <h1>Gentlemen SignUp to FightClub </h1>
        <div className='FormLine'>
<ReForm 
placeholder='Username' 
className={'short-input'} 
value={signupData.name}
onChange={e => setSignupdata({...signupData,name:e.target.value})} 
error={inputval.name}
/>
          <ReForm placeholder='password' className={'short-input'} 
          value={signupData.password} 
          onChange={e => setSignupdata({...signupData,password:e.target.value})}
          error={inputval.password} />

          <ReForm placeholder='ReEnter Password' className={'short-input'} 
          value={signupData.confirmpassword} 
          onChange={e => setSignupdata({...signupData,confirmpassword:e.target.value})}
          />
        <div>
        <Button 
        variant="contained"
        disabled={signupData.password !== signupData.confirmpassword}
        onClick={SignUpAPI}
        >Submit</Button>
        <Button>
        <Link to={'/'}>Already a Fighter Login</Link>
        </Button>
        </div>   
          </div>
          <span>If its your First day, then you have to fight
            -Tyler durden
            </span>
          </div>
      <div className="fightLogoContainer">
        <img src={FightImg} alt='fight' className='entryImg' />
      </div>
    </div>
  </BoxLayout>
  )
}

export default SignUppage