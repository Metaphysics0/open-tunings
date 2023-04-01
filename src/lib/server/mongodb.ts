import { PUBLIC_MONGO_CONNECTION_STRING } from '$env/static/public';
import { MongoClient } from 'mongodb';

export default new MongoClient(PUBLIC_MONGO_CONNECTION_STRING);
