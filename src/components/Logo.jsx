import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {styled } from '@mui/material';



const MyLogo = styled(Toolbar)`
    background: white;
    color:blue
`


export default function Logo() {
  return (
    <Box>
      <AppBar position="static">
        <MyLogo>
        
          <Typography variant="h6" component="div" >
            <img style={{width:"120px",height:"70px"}} src={"https://t4.ftcdn.net/jpg/00/82/98/21/360_F_82982138_WRRM51OBWshgKX7NJKkJJDogOVDyuauH.jpg"} alt="no img" />

          </Typography>
          
        </MyLogo>
      </AppBar>
    </Box>
  );
}