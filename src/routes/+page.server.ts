import mongoClient from '$lib/server/mongodb';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const collection = getCollection();
  const tunings = JSON.stringify(await collection.find().toArray());

  return { tunings };
}) satisfies PageServerLoad;

/* Private */
const getCollection = () => mongoClient.collection('tunings');
