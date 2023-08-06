import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { AlladdSelector } from '../store/fightSlice';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import toast, { Toaster } from 'react-hot-toast';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ListSubheader from '@mui/material/ListSubheader';
import { ListItemButton,ListItemIcon } from '@mui/material';
const ListPage = () => {

    const alldata = useSelector(AlladdSelector);
    const notify = () => toast.success('Here is your toast.');

    useEffect(()=>{
        console.log(alldata);
        // notify();
    },[])

  return (
    <div >
    <h1>ListPage</h1>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          ENROLLED FIGHERS
        </ListSubheader>
      }
    >
    <ListItemButton>
    {alldata.length === 0 ? (
      <ListItemText primary="No data" />
    ) : (
      alldata.map((m, i) => (
        <>
          <ListItemIcon key={i}>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary={m.name} />
        </>
      ))
    )}
  </ListItemButton>
    
      </List>
    </div>
  )
}

export default ListPage