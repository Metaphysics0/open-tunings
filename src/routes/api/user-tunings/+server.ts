import { json, type RequestHandler } from '@sveltejs/kit';
import { tuningsCollection } from '$lib/server/mongodb';

export const GET = (async () => {
  const tunings = await tuningsCollection.find().toArray();
  return json({ data: tunings });
}) satisfies RequestHandler;

export const POST = (async ({ request }) => {
  const requestData = await request.json();
  const resp = await tuningsCollection.insertMany(requestData);

  return json({ data: resp });
}) satisfies RequestHandler;
