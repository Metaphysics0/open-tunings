import type { Note } from '@prisma/client';
import { musicalNotes } from '../constants/note';
import type {
  IMusicalNote,
  IOctave,
  IPitchShiftDirection
} from '../types/note';

export function getTuningNameAsString(tuning: Note[]): string {
  return tuning.map(Object.values).flat().join('');
}

export function getTuningFromString(tuningAsString: string): Note[] {
  const regex = /([A-G](#|b)?)(\d)/g;
  const matches = tuningAsString.matchAll(regex);

  return Array.from(matches, (match) => ({
    note: match[1],
    octave: parseInt(match[3])
  })) as Note[];
}

export function pitchShiftNote(
  noteItem: Note,
  direction: IPitchShiftDirection
): Note {
  if (isInvalidInput(noteItem, direction)) return noteItem;

  const newNote = getTransposedNote(noteItem, direction);
  const newOctave = getTransposedOctave(noteItem, direction);

  return { note: newNote, octave: newOctave };
}

const getTransposedNote = (
  noteItem: Note,
  direction: IPitchShiftDirection
): IMusicalNote => {
  const { note } = noteItem;
  if (note === 'G#' && direction === 'up') return 'A';
  if (note === 'A' && direction === 'down') return 'G#';

  // TODO:
  //  We need to soon add enum octaves and note values to the prisma schema
  //  Apr, 9th, 2023
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const index = musicalNotes.indexOf(note);
  if (direction === 'up') return musicalNotes[index + 1];
  return musicalNotes[index - 1];
};

const getTransposedOctave = (
  noteItem: Note,
  direction: IPitchShiftDirection
): Note['octave'] => {
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
  noteItem: Note,
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
