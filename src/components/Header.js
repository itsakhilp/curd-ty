import React from 'react';
import { Toolbar, styled, } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
// import { useState } from 'react';
// import CreateBlog from './CreateBlog';

const HeaderStyle = styled(AppBar)`
background : white;
color: orange;
`
const Tabs = styled(NavLink)`
color: grey;
font-size: 15px;
padding:20px;
text-decoration : none;
`
function Header() {

  // const [open, setOpen] = useState(false)
  return (

    <HeaderStyle position="static" elevation={0}>

      <Logo style={{ backgroundColor: 'orange' }} />
      
      <Toolbar style={{fontFamily:"Monospace"}}>
        {/* <Tabs to="/create" >Create</Tabs > */}
        {/* <Button onClick={{}} style={{ position: 'absolute', right: "80px", border: '1px solid grey' }} variant="contained"><Link style={{ textDecoration: 'none', color: 'white', fontWeight: 20 }} to="/createblog">Create Blog</Link></Button> */}
        {/* {open && <CreateBlog />} */}
        <Tabs to="/view">Blog</Tabs>
        <Tabs to="/seminar" >Seminar</Tabs >
        {/* <CreateBlog/> */}
      </Toolbar>
    </HeaderStyle>
  )
}

export default Header