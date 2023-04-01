import { MONGO_CONNECTION_STRING } from '$env/static/private';
import { json, type RequestHandler } from '@sveltejs/kit';
import { Collection, MongoClient } from 'mongodb';

export const GET = (async () => {
  const collection = getTuningsCollection();
  const tunings = await collection.find().toArray();

  console.log('TUNINGS', tunings);

  return json({ data: tunings });
}) satisfies RequestHandler;

export const POST = (async ({ request }) => {
  const collection = getTuningsCollection();
  const requestData = await request.json();
  const resp = await collection.insertMany(requestData);

  return json({ data: resp });
}) satisfies RequestHandler;

/* Private */
function getTuningsCollection(): Collection {
  const client = new MongoClient(MONGO_CONNECTION_STRING);
  return client.db('production').collection('tunings');
}
