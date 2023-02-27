import { musicalNotes, STANDARD_TUNING } from '../constants/note';
import type {
  IMusicalNote,
  INoteItem,
  IOctave,
  IPitchShiftDirection
} from '../types/note';

export function areArraysEqual(a1: unknown[], a2: unknown[]): boolean {
  return JSON.stringify(a1) === JSON.stringify(a2);
}

export function isTuningCurrentlyInStandard(tuning: INoteItem[]): boolean {
  return areArraysEqual(tuning, STANDARD_TUNING);
}

export function pitchShiftNote(
  noteItem: INoteItem,
  direction: IPitchShiftDirection
): INoteItem {
  if (isInvalidInput(noteItem, direction)) return noteItem;

  const newNote = getTransposedNote(noteItem, direction);
  const newOctave = getTransposedOctave(noteItem, direction);

  return { note: newNote, octave: newOctave };
}

const getTransposedNote = (
  noteItem: INoteItem,
  direction: IPitchShiftDirection
): IMusicalNote => {
  const { note } = noteItem;
  if (note === 'G#' && direction === 'up') return 'A';
  if (note === 'A' && direction === 'down') return 'G#';

  const index = musicalNotes.indexOf(note);
  if (direction === 'up') return musicalNotes[index + 1];
  return musicalNotes[index - 1];
};

const getTransposedOctave = (
  noteItem: INoteItem,
  direction: IPitchShiftDirection
): IOctave => {
  const { note, octave } = noteItem;
  if (note === 'B' && direction === 'up') {
    return (octave + 1) as IOctave;
  }
  if (note === 'C' && direction === 'down') {
    return (octave - 1) as IOctave;
  }
  return octave;
};

const isInvalidInput = (
  noteItem: INoteItem,
  direction: IPitchShiftDirection
): boolean => {
  const { note, octave } = noteItem;
  if (note === 'A' && octave === 0 && direction === 'down') {
    console.warn('Note is the lowest in the register!');
    return true;
  }
  if (note === 'G#' && octave === 7 && direction === 'up') {
    console.warn('Note is the highest in the register!');
    return true;
  }
  return false;
};
