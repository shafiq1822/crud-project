import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import { addUser } from '../service/api.js' 
import { useState } from "react";
import {useNavigate} from 'react-router-dom';



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

const AddUser = () => {
    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        console.log(e.target.name, e.target.value)
        setUser({...user, [e.target.name]: e.target.value })
        console.log(user)
    }

    const addUserDetails = async (name, username, email, phone) => {
        if(name && username && email && phone){
            await addUser(user);
        navigate('/all')
        }
        else{
            alert("Please enter all fields")
        }
    }
    return(
        <Container>
            <Typography variant="h4">Add User</Typography>
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
                <Button variant="contained" onClick={() => addUserDetails()}>Add User </Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;