import { musicalNotes } from '../constants/note';
import type { INoteItem, IOctave } from '../types/note';

export function pitchShiftNote(
  noteItem: INoteItem,
  direction: 'up' | 'down'
): INoteItem {
  const { note, octave } = noteItem;
  const halfStep = direction === 'up' ? 1 : -1;
  const noteIndex = musicalNotes.indexOf(note);
  const shiftedNoteIndex =
    (noteIndex + halfStep + musicalNotes.length) % musicalNotes.length;
  const shiftedNote = musicalNotes[shiftedNoteIndex];
  const newOctave = (octave +
    Math.floor((noteIndex + halfStep) / musicalNotes.length)) as IOctave;

  return { note: shiftedNote, octave: newOctave };
}
