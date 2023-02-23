import type { musicalNotes } from '../constants/note';

type IMusicalNote = (typeof musicalNotes)[number];
interface INoteItem {
  note: IMusicalNote;
}
