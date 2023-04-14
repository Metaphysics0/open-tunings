import prisma from '$lib/server/prisma';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
  const tunings = await prisma.userSubmittedTuning.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });

  return { tunings: JSON.stringify(tunings) };
}) satisfies LayoutServerLoad;
