import prisma from '$lib/server/prisma';
import { userSubmittedTuningUtils } from '../../../utils';
import type { PageServerLoad } from './$types';

export const load = (async ({ parent, params, url }) => {
  const tuningNameFromUrl = url.pathname.split('/tuning/').at(-1);

  const { tunings } = await parent();
  const currentTuning = await prisma.userSubmittedTuning.findFirst({
    where: {
      tuningName: userSubmittedTuningUtils.getTuningNameFromUrl(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        tuningNameFromUrl!
      )
    }
  });

  return { tunings, currentTuning };
}) satisfies PageServerLoad;
