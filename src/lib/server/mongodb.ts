import { MONGO_CONNECTION_STRING } from '$env/static/private';
import { MongoClient } from 'mongodb';

export default new MongoClient(MONGO_CONNECTION_STRING);
