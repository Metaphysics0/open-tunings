import { error, json } from '@sveltejs/kit';
import type { IMusicalNote } from '../../../types/note';
import type { RequestHandler } from './$types';
import { JSDOM } from 'jsdom';

export const POST = (async ({ request }) => {
  const requestData = await request.json();

  const chordFinderUrl = createChordFinderUrl(requestData);
  const tuning = await getTuningFromChordFinder(chordFinderUrl);
  console.log('URL', tuning);

  // console.log('AAA', a);

  return json({ foo: 'bar' });
}) satisfies RequestHandler;

// ### Private ###
const createChordFinderUrl = (currentTuning: IMusicalNote[]): string => {
  const baseUrl = 'https://www.scales-chords.com/findnotes_en.php?';

  // i.e. { n1: "C", n2: "D", etc... }
  const tuningAsParamsForUrl = Object.fromEntries(
    currentTuning.map((note, idx) => [`n${idx + 1}`, note])
  );

  const urlSearchParams = new URLSearchParams();
  for (const [key, val] of Object.entries(tuningAsParamsForUrl)) {
    urlSearchParams.append(key, val);
  }
  return baseUrl + urlSearchParams.toString();
};

const getTuningFromChordFinder = async (
  chordFinderUrl: string
): Promise<string> => {
  try {
    const data = await fetch(chordFinderUrl);
    const pageText = await data.text();
    const document = new JSDOM(pageText).window.document;
    const tuning = document
      .getElementsByTagName('h3')[0]
      .getElementsByTagName('a')[0].innerHTML;

    return tuning;
  } catch (error) {
    console.error('ERROR ERROR', error);
    return 'unknown!';
  }
};
