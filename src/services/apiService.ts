import type { UserSubmittedTuning } from '@prisma/client';
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
    create(tuning: UserSubmittedTuning) {
      return make({
        endpoint: 'user-tunings',
        method: 'POST',
        params: tuning
      });
    },
    createMany(tunings: UserSubmittedTuning[]) {
      return make({
        endpoint: 'user-tunings',
        method: 'POST',
        params: tunings
      });
    },
    setLikes(tuningToUpdate: UserSubmittedTuning, likeCount: number) {
      return make({
        endpoint: 'user-tunings',
        method: 'PUT',
        params: {
          id: tuningToUpdate.id,
          likeCount
        }
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
