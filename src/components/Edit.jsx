import { FormControl, FormGroup, InputLabel, Input, Button, styled } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
// import { createUser } from '../service/api'
import { useNavigate, useParams } from 'react-router-dom'
import { getUserById, editUser } from '../service/api'

const Container = styled(FormGroup)`
        width:30%;
        margin:5% auto 0 auto;
        & > div {
            margin-top : 10px;
        }
       `
const initialValues = {
    blogname: '',
    place: '',
    role: ''
}


function EditUser() {

    const [user, setUser] = useState(initialValues)
    const navigate = useNavigate();
    const { id } = useParams()

    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = async () => {
        let response = await getUserById(id)
        console.log(response)
        setUser(response.data)
    }

    const onValueChange = (e) => {
        // console.log(e.target.name, e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }

    const addUserDetails = async () => {
        await editUser(user, id);
        navigate("/view")
    }

    return (
        <Container>
            <FormControl>
                <InputLabel>BlogName</InputLabel>
                <br></br>
                <br></br>
                <Input onChange={(e) => onValueChange(e)} name="blogname" value={user.blogname} />
            </FormControl>

            <FormControl>
                <InputLabel>Content</InputLabel><br></br>
                <Input onChange={(e) => onValueChange(e)} name="place" value={user.place} />
            </FormControl>

            {/* <FormControl>
                <InputLabel>Role</InputLabel>
                <br></br>
                <Input onChange={(e)=> onValueChange(e)} name="role" value={user.role}/>

            </FormControl> */}

            <FormControl>
            </FormControl>
            <Button onClick={() => addUserDetails()} variant="outlined">Save</Button>
        </Container>
    )
}


export default EditUser