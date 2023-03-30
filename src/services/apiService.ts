import type { IMusicalNote } from '../types/note';

export const apiService = {
  chordFinder: {
    find(notes: IMusicalNote[]) {
      return make({
        endpoint: 'chord-finder',
        method: 'POST',
        params: notes
      });
    }
  },
  userTunings: {
    get() {
      return make({
        endpoint: 'user-tunings',
        method: 'GET'
      });
    },
    create(params: unknown) {
      return make({
        endpoint: 'user-tunings',
        method: 'POST',
        params
      });
    }
  }
};

function make({
  endpoint,
  method,
  params
}: {
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
  params?: unknown;
}): Promise<Response> {
  return fetch(`/api/${endpoint}`, {
    method,
    headers: {
      'content-type': 'application/json'
    },
    body: params ? JSON.stringify(params) : null
  });
}
