import { json } from '@sveltejs/kit';
import type { IMusicalNote } from '../../../types/note';
import type { RequestHandler } from './$types';

export const POST = (async ({ request }) => {
  const requestData = await request.json();
  const chord = await getChordFromTuning(requestData);

  // return json({ data: tuning });
  return json(chord[0]);
}) satisfies RequestHandler;

// ### Private ###
async function getChordFromTuning(
  currentTuning: IMusicalNote[]
): Promise<IChordName[]> {
  const uberChordApiUrl = 'https://api.uberchord.com/v1/chords?nameLike=';
  const tuning = currentTuning.join('');
  const chordsLikeResponse = await fetch(uberChordApiUrl + tuning);
  return chordsLikeResponse.json();
}
