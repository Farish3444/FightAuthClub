import { Button,TextField} from '@mui/material'
import React,{ useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import { useDispatch,useSelector } from 'react-redux';
import { add } from '../store/fightSlice';
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';



const AddPage = () => {

    function RedBar() {
        return (
          <Box
            sx={{
              height: 15,
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? 'rgba(255, 0, 0, 0.1)'
                  : 'rgb(255 132 132 / 25%)',
            }}
          />
        );
      }

    const [addData,setAddData] = useState({
        name:'',
        age:''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const notify = () => toast.success('added a Fight Member');

    const handleButton=(e)=>{
        e.preventDefault();
        dispatch(add(addData));
        console.log(addData)
        notify();
        navigate('/listpage')
    }


    return (
    <div>
      <h1>ADD PAGE</h1>
    <div className='addforms'>
  
        <TextField placeholder='Enter Fighter Name' id="filled-basic" label="Name" variant="filled" value={addData.name} onChange={e =>setAddData({...addData,name:e.target.value})}  />
        <RedBar />
        <TextField placeholder='Enter Age' id="filled-basic" label="Age" variant="filled" value={addData.age} 
        onChange={(e)=>{
        setAddData({...addData,age:e.target.value})    
    }}
    />
    <RedBar />
    <Button 
    onClick={handleButton} 
    variant='contained'>Add Member</Button>
    </div>
    </div>  
    )
}

export default AddPage