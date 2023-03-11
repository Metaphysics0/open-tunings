import type { musicalNotes, musicalOctaves } from '../constants/note';

type IMusicalNote = (typeof musicalNotes)[number];
type IOctave = (typeof musicalOctaves)[number];

interface INoteItem {
  note: IMusicalNote;
  octave: IOctave;
}

type IPitchShiftDirection = 'up' | 'down';
