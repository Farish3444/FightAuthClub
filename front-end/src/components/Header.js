import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

  return (
<header style={{ backgroundColor: 'pink', color: '#fff', padding: '1rem',width:'100%',top:'0',left:'0',position:'fixed'}}>
     <nav>
        <ul>
            <li onClick={()=>navigate('/addpage')}>Add Members</li>
            <li>List of Members</li>
            <Button 
            variant='contained'
            onClick={()=>{
              localStorage.removeItem('token');
              navigate('/');
          }}
            >
              LogOut
            </Button>
        </ul>
     </nav>   
</header>
  )
}

export default Header