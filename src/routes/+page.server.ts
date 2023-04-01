import { tuningsCollection } from '$lib/server/mongodb';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const tunings = JSON.stringify(await tuningsCollection.find().toArray());
  console.log('TUNINGS', tunings);

  return { tunings };
}) satisfies PageServerLoad;
