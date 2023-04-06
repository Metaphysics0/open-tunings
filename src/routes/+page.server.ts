import prisma from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const tunings = await prisma.userSubmittedTuning.findMany({
    orderBy: {
      likes: 'desc'
    }
  });

  return { tunings: JSON.stringify(tunings) };
}) satisfies PageServerLoad;
