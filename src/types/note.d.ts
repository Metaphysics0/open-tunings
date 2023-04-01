import type { musicalNotes, musicalOctaves } from '../constants/note';

type IMusicalNote = (typeof musicalNotes)[number];
type IOctave = (typeof musicalOctaves)[number];

interface INoteItem {
  note: IMusicalNote;
  octave: IOctave;
}

interface IUserSubmittedTuning {
  name?: string;
  description?: string;
  tags?: string[];
  urlFriendlyName: string;
  tuning: INoteItem[];
}

type IPitchShiftDirection = 'up' | 'down';
