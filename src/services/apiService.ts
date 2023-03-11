import type { IMusicalNote } from '../types/note';

export const apiService = {
  chordFinder: {
    find(notes: IMusicalNote[]) {
      return fetch('/api/chord-finder', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(notes)
      });
    }
  },
  generator: {
    generate(formData: Record<string, any>) {
      return fetch('/api/generator', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
    }
  }
};
