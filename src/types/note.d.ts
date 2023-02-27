import type { musicalNotes } from '../constants/note';

type IMusicalNote = (typeof musicalNotes)[number];
type IOctave = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

interface INoteItem {
  note: IMusicalNote;
  octave: IOctave;
}

type IPitchShiftDirection = 'up' | 'down';
