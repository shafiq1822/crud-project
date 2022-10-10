import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import { addUser, getUser } from '../service/api.js' 
import { useState, useEffect } from "react";
import {useNavigate, useParams} from 'react-router-dom';


const Container = styled(FormGroup)`
   width: 50%;
   margin: 5% auto;

   & > div {
       margin-top: 20px;
   }
`

const defaultValue = {
    name: '',
    username:'',
    email: '',
    phone: '',
}

const EditUser = () => {
    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async () => {
        const response = await getUser(id)
    }

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/all')
    }

    
    return(
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name'/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username'/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email'/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone'/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => addUserDetails()} >Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;