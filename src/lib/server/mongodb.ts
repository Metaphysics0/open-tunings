import { MONGO_CONNECTION_STRING } from '$env/static/private';
import { MongoClient } from 'mongodb';

const client = new MongoClient(MONGO_CONNECTION_STRING);
const db = client.db('production');

export function start_mongo() {
  console.log('Starting mongo...');
  return client.connect();
}

export const tuningsCollection = db.collection('tunings');

export default db;
