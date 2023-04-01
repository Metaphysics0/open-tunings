import { MONGO_CONNECTION_STRING } from '$env/static/private';
import { MongoClient } from 'mongodb';

const mongoClient = new MongoClient(MONGO_CONNECTION_STRING);

export default mongoClient;
