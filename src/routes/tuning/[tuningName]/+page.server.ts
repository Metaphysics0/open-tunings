import prisma from '$lib/server/prisma';
import { userSubmittedTuningUtils } from '../../../utils';
import type { PageServerLoad } from './$types';

export const load = (async ({ parent, url }) => {
  const tuningNameFromUrl = url.pathname.split('/tuning/').at(-1);
  console.log('FETCHING', url);

  const currentTuning = await prisma.userSubmittedTuning.findFirst({
    where: {
      tuningName: userSubmittedTuningUtils.getTuningNameFromUrl(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        tuningNameFromUrl!
      )
    }
  });

  const { tunings: wholeTuningList } = await parent();
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

  // const tunings =
  //   relatedTunings?.length === 0 ? wholeTuningList : relatedTunings;

  return { tunings: JSON.stringify(tunings), currentTuning };
}) satisfies PageServerLoad;
