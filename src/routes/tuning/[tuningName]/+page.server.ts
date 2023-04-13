import prisma from '$lib/server/prisma';
import { userSubmittedTuningUtils } from '../../../utils';
import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
  const tuningNameFromUrl = url.pathname.split('/tuning/').at(-1);

  const currentTuning = await prisma.userSubmittedTuning.findFirst({
    where: {
      tuningName: userSubmittedTuningUtils.getTuningNameFromUrl(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        tuningNameFromUrl!
      )
    }
  });

  const tunings = await prisma.userSubmittedTuning.findMany({
    where: {
      id: {
        not: currentTuning?.id
      },
      tags: {
        hasSome: currentTuning?.tags
      }
    }
  });

  return { tunings: JSON.stringify(tunings), currentTuning };
}) satisfies PageServerLoad;
