import type { Note, Prisma, UserSubmittedTuning } from '@prisma/client';

export const apiService = {
  chordFinder: {
    find(notes: Note['note'][]) {
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
    create(params: Prisma.UserSubmittedTuningCreateInput) {
      return make({
        endpoint: 'user-tunings',
        method: 'POST',
        params
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
}): Promise<any> {
  return fetch(`/api/${endpoint}`, {
    method,
    headers: {
      'content-type': 'application/json'
    },
    body: params ? JSON.stringify(params) : null
  });
}
