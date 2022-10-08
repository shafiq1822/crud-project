import mongoose from 'mongoose'; 

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-7ofpwdt-shard-00-00.0apbmy7.mongodb.net:27017,ac-7ofpwdt-shard-00-01.0apbmy7.mongodb.net:27017,ac-7ofpwdt-shard-00-02.0apbmy7.mongodb.net:27017/PROJECT1?ssl=true&replicaSet=atlas-6j3uia-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully')
    }
    catch(error){
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;