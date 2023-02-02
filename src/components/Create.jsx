import { FormControl, FormGroup, InputLabel, Input, Button, styled } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { createUser } from '../service/api'
import { useNavigate } from 'react-router-dom'

const Container = styled(FormGroup)`
        width:30%;
        margin:5% auto 0 auto;
        & > div {
            margin-top : 10px;
        }
       `
const initialValues = {
    name: '',
    place: '',
    role: ''
}


function Create() {

    const [user,setUser] = useState(initialValues)

    const navigate = useNavigate();

    const onValueChange = (e) =>{
        // console.log(e.target.name, e.target.value)
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user);
    }

    const createNewUser = async () => {
        await createUser(user);
        navigate("/view")
    }

    return (
        <Container>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="name"/>
            </FormControl>

            <FormControl>
                <InputLabel>Place</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="place"/>
            </FormControl>

            <FormControl>
                <InputLabel>Role</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="role"/>
            </FormControl>

            <FormControl>
                <Button onClick={() => createNewUser()} variant="outlined">Click to submit</Button>
            </FormControl>
        </Container>
    )
}

export default Create;