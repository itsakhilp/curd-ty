// import { TableContainer } from '@mui/material'
import { useEffect,useState} from 'react';
import React from 'react'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {getUser} from '../service/api';
import { TableBody, styled, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import DatePicker from './DatePicker'
import GetDate from './GetDate';
import Switchh from './Switchh';
import { deleteUser } from '../service/api';
import Paginationn from './Paginationn';
import CreateBlog from './CreateBlog';

const Thead = styled(TableRow)`
background:lightgrey;
border: 1px solid grey;
`

const CellWidth = styled(TableCell)`
width: 125, 

`
const BtnWidth = styled(Button)`
width:auto
` 
                      
function View() {
 
    const [users, setUsers] = useState([])

    useEffect(()=>{
      
    getUserDetails();
    },[])

    const getUserDetails = async ()=>{
        let response = await getUser();
        console.log(response);
        setUsers(response.data)
    }

    const deleteUserDetails = async (id) => {
      await deleteUser(id)
      getUserDetails();
    }

  return (
    <div style={{padding:"20px",fontFamily:"Monospace"}} >
   <div style={{padding:"15px", border:'1px solid grey',borderRadius: '15px'}}>
   <DatePicker/>
   <CreateBlog/>
    <TableContainer component={Paper} >
      <Table size="small" aria-label="a dense table" style={{marginTop:'20px'}}>
        <TableHead>
          <Thead >
            <CellWidth >SL.No</CellWidth>
            <CellWidth >Blog Name</CellWidth>
            {/* <CellWidth >Role</CellWidth> */}
            <CellWidth >Created Date</CellWidth>
            <CellWidth >Publish/Unpublish</CellWidth>
            <CellWidth >Action</CellWidth>
          </Thead>
        </TableHead>

        <TableBody >
            {users.map(user=>(
                <TableRow >
                    <CellWidth >{user.id}</CellWidth>

                    <CellWidth>{user.blogname}</CellWidth>
                   
                    <CellWidth > <GetDate/> </CellWidth>
                    <CellWidth  ><Switchh/> </CellWidth>
                     <CellWidth >
                        <BtnWidth style={{marginLeft:"-30px"}} component={Link} to={`/edit/${user.id}`}><EditIcon/></BtnWidth>
                        <BtnWidth onClick={()=> deleteUserDetails(user.id)}><DeleteOutlineIcon/></BtnWidth>
                    </CellWidth>


                </TableRow>
            ))}
        </TableBody>

        </Table>
        </TableContainer>
        <Paginationn/>
   </div>
   </div>
   
   )
}

export default View