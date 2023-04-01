import { json } from '@sveltejs/kit';
import type { IMusicalNote } from '../../../types/note';
import type { RequestHandler } from './$types';

export const POST = (async ({ request }) => {
  const requestData = await request.json();
  const response = await findChordFromTuning(requestData);
  const chords = formatChordNameResponse(response);
  return json(chords[0]);
}) satisfies RequestHandler;

// ### Private ###
async function findChordFromTuning(
  currentTuning: IMusicalNote[]
): Promise<IChordsLikeResponse[]> {
  const uberChordApiUrl = 'https://api.uberchord.com/v1/chords?nameLike=';
  const tuning = currentTuning.join('');

  const chordsLikeResponse = await fetch(uberChordApiUrl + tuning);
  return chordsLikeResponse.json();
}

function formatChordNameResponse(
  chords: IChordsLikeResponse[]
): IChordsLikeResponse[] {
  return chords.map((chord) => ({
    ...chord,
    chordNameAsHtml: _addChordNameAsHtml(chord.chordName)
  }));
}

const _addChordNameAsHtml = (chordName: string) => {
  const notesInChord = chordName.split(',');
  return notesInChord
    .map((note, idx) => {
      if (note !== '' && idx === 2) {
        return `<sup>${note}</sup>`;
      }
      return note;
    })
    .join('');
};
