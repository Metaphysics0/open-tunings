import prisma from '$lib/server/prisma';
import type { LayoutServerLoad } from './$types';

let count = 0;
export const load = (async () => {
  const tunings = await prisma.userSubmittedTuning.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });

  console.log('calling:', count++);
  return { tunings: JSON.stringify(tunings) };
}) satisfies LayoutServerLoad;
