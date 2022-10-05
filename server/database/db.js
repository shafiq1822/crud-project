import mongoose from 'mongoose'

const Connection = async (username, password) => {
    // const URL = `mongodb+srv://${username}:${password}@cluster0.0apbmy7.mongodb.net/?retryWrites=true&w=majority`;
    const URL  = `mongodb+srv://${username}:${password}@cluster0.0apbmy7.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true , useNewUrlParser: true });
        console.log('Database connected succefully');
    }catch(error){
        console.log( 'Error while connecting the database',error);
    }
}

export default Connection;