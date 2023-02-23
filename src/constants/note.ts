import type { IMusicalNote } from '../types/note';

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

export const STANDARD_TUNING: IMusicalNote[] = ['E', 'A', 'D', 'G', 'B', 'E'];
