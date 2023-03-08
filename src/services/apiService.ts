import type { IMusicalNote } from '../types/note';

export const apiService = {
  chordFinder: {
    find(notes: IMusicalNote[]) {
      return fetch('/api/chord-finder', {
        method: 'POST',
        body: JSON.stringify(notes),
        headers: {
          'content-type': 'application/json'
        }
      });
    }
  }
};
