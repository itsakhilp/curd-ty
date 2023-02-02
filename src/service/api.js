import axios from "axios";

const API_URL = 'http://localhost:3002/users'

export const createUser = async(data)=>{
    try{
        return await axios.post(API_URL, data)
    }
    catch(error){
        console.log('error while creating new user', error.message);
    }
}

export const getUser = async()=>{
    try{
        return await axios.get(API_URL);
    }catch(error){
        console.log('error while fetching / get', error.message);
    }
}

export const getUserById = async(data)=>{
    try{
        return await axios.get(`${API_URL}/${data}` );
    }catch(error){
        console.log('error while fetching user by id / get', error.message);
    }
}


export const editUser = async(data,id)=>{
    try{
        return await axios.put(`${API_URL}/${id}`,data)
    }catch(error){
        console.log('error while fetching user by id / get', error.message);

    }
}

export const deleteUser = async (id) =>{
    try{
            return await axios.delete(`${API_URL}/${id}`)
    }catch(error){
        console.log('error while fetching user by id / get', error.message);

    }
}