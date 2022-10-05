import axios from 'axios'

const URL = 'http://localhost:6200';

export const addUser = async (data) => {
    try{
        return await axios.post(`${URL}/add`, data)
    }
    catch(error){
        console.log('Error while calling add user api', error);
    }
}
