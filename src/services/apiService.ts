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
  generator: {
    generate(formData: Record<string, unknown>) {
      return make({
        endpoint: 'generator',
        method: 'POST',
        params: formData
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
  method: RequestInit['method'];
  params: unknown;
}): Promise<Response> {
  return fetch(`/api/${endpoint}`, {
    method,
    headers: {
      'content-type': 'application/json'
    },
    body: params ? JSON.stringify(params) : ''
  });
}
