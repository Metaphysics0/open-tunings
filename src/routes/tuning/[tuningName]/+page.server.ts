import prisma from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load = (async ({ parent, params, url }) => {
  const { tunings } = await parent();

  console.log('URL URL', url);

  const currentTuning = await prisma.userSubmittedTuning.findFirst({
    where: {
      tuningName: params.tuningName
    }
  });

  return { tunings, currentTuning };
}) satisfies PageServerLoad;
