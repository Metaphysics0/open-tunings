import type { INoteItem } from '../types/note';

export const musicalNotes = [
  'A',
  'A#',
  'B',
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#'
] as const;
export const musicalNotesWithFlatPreference = [
  'A',
  'Bb',
  'B',
  'C',
  'Db',
  'D',
  'Eb',
  'E',
  'F',
  'Gb',
  'G',
  'Ab'
] as const;

export const musicalOctaves = [0, 1, 2, 3, 4, 5, 6, 7] as const;

export const DEFAULT_TIME_BETWEEN_EACH_NOTE = 550;
