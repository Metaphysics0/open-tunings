import prisma from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const tunings = JSON.stringify(await prisma.userSubmittedTuning.findMany());
  return { tunings };
}) satisfies PageServerLoad;
