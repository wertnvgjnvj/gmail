import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD; 

const Connection = () => {
    const DB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-bhmwixd-shard-00-00.x564p88.mongodb.net:27017,ac-bhmwixd-shard-00-01.x564p88.mongodb.net:27017,ac-bhmwixd-shard-00-02.x564p88.mongodb.net:27017/?ssl=true&replicaSet=atlas-oy6aqj-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        mongoose.set('strictQuery', false);
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;