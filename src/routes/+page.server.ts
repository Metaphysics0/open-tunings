import prisma from '$lib/server/prisma';
import { tuningsCollection } from '$lib/server/mongodb';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const tunings = await prisma.userSubmittedTuning.findMany();
  console.log('TUNINGS FROM PRISMA', tunings);
  // const tunings = JSON.stringify(await tuningsCollection.find().toArray());
  // console.log('TUNINGS', tunings);

  return { tunings: JSON.stringify([]) };
}) satisfies PageServerLoad;
