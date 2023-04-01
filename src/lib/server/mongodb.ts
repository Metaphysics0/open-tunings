import { MongoClient } from 'mongodb';

const mongoClient = new MongoClient(
  process.env.PUBLIC_MONGO_CONNECTION_STRING ?? ''
);

export default mongoClient;
