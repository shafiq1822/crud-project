import React from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button} from '@mui/material';
import { useEffect, useState } from 'react';

import { getUsers } from '../service/api';

// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
  width: 90%;
  margin: 70px auto;
`

const THead = styled(TableRow)`
  background: #000;

  & > th {
    color: #fff;
    font-size: 18px;
  }
`

const TBody = styled(TableRow)`
& > td{
  font-size: 17px;

}
` 

const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
    console.log(response.data)
  };

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {
          users.map(user => (
            // const {id, name, phone, email, username} = user; 
            <TBody key={user._id}>
              <TableCell >{user._id}</TableCell>
              <TableCell >{user.name}</TableCell>
              <TableCell >{user.username}</TableCell>
              <TableCell >{user.email}</TableCell>
              <TableCell >{user.phone}</TableCell>
              <TableCell>
                <Button variant='contained' style={{ marginRight: 14 }} component={ Link } to={`/edit/${user._id}`}>Edit</Button>
                <Button variant='contained' color='secondary'>Delete</Button>
              </TableCell>
            </TBody>
          ))
        }
      </TableBody>
    </StyledTable>
  )
}

export default AllUser;