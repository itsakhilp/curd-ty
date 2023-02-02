import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useState } from 'react'
import Button from '@mui/material/Button';
import { createUser } from '../service/api'
import { useNavigate } from 'react-router-dom'

import { FormControl, FormGroup, InputLabel, styled, Input } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 300,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 12,
  p: 4,
};

const Container = styled(FormGroup)`
        width:50%;
        margin:5% auto 0 auto;
        & > div {
            margin-top : 10px;
        }
       `
const initialValues = {
  blogname: '',
  Content: '',
}

export default function CreateBlog() {

  const [user, setUser] = useState(initialValues)

  const navigate = useNavigate();

  const onValueChange = (e) => {
    // console.log(e.target.name, e.target.value)
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user);
  }

  const createNewUser = async () => {
    await createUser(user);
    navigate("/view")
    handleClose(true)
    window.location.reload(false);
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <Button onClick={handleOpen} style={{ marginLeft: "1070px", marginTop: '-120px' }} variant="contained">Create Blog</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >

        <Fade in={open}>
          <Box sx={style}>

            <Container>
              <FormControl>
                <InputLabel>Blog Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="blogname" />
              </FormControl>

              <FormControl>
                <InputLabel>Content</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="place" />
              </FormControl>

              <FormControl>
              </FormControl>
            </Container>
            <br></br>
            <div style={{ marginLeft: '350px', padding: '10px' }}>
              <Button onClick={handleClose} variant="outlined">Cancel</Button>
              <Button variant="contained" onClick={() => createNewUser()} style={{ marginLeft: '10px' }}>Save</Button>
            </div>

          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
