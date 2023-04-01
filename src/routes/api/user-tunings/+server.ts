import { json, type RequestHandler } from '@sveltejs/kit';
import mongoClient from '$lib/server/mongodb';

export const GET = (async () => {
  const collection = getTuningsCollection();
  const tunings = await collection.find().toArray();
  return json({ data: tunings });
}) satisfies RequestHandler;

export const POST = (async ({ request }) => {
  const collection = getTuningsCollection();
  const requestData = await request.json();
  const resp = await collection.insertMany(requestData);

  return json({ data: resp });
}) satisfies RequestHandler;

/* Private */
const getTuningsCollection = () => mongoClient.collection('tunings');
