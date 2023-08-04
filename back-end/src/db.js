import { MongoClient } from 'mongodb';

let client;

export const initializeDbConnection = async () => {
    client = await MongoClient.connect(
        'mongodb://127.0.0.1:27017/auth-finish'
        //  'mongodb://localhost:27017/auth-finish'
        ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export const getDbConnection = () => {
    const db = client.db('auth-finish');
    return db;
}