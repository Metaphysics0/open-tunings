import { MONGO_CONNECTION_STRING } from '$env/static/private';
import { json, type RequestHandler } from '@sveltejs/kit';
import { Collection, Db, MongoClient } from 'mongodb';

export const GET = (async () => {
  const collection = getTuningsCollection();
  const tunings = await collection.find().toArray();

  return json({ data: tunings });
}) satisfies RequestHandler;

export const POST = (async ({ request }) => {
  const requestData = await request.json();
  console.log('REQUEST data', requestData);

  return json({ data: [] });
}) satisfies RequestHandler;

/* Private */
function getTuningsCollection(): Collection {
  const client = new MongoClient(MONGO_CONNECTION_STRING);
  return client.db('production').collection('tunings');
}
