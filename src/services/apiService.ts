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
    findByTuningName(tuningName: string) {
      return make({
        endpoint: 'user-tunings',
        method: 'GET',
        params: { tuningName }
      });
    },
    create(params: Prisma.UserSubmittedTuningCreateInput) {
      return make({
        endpoint: 'user-tunings',
        method: 'POST',
        params
      });
    },
    like(tuningToUpdate: UserSubmittedTuning) {
      return make({
        endpoint: 'user-tunings/like',
        method: 'PUT',
        params: {
          id: tuningToUpdate.id
        }
      });
    },
    unlike(tuningToUpdate: UserSubmittedTuning) {
      return make({
        endpoint: 'user-tunings/unlike',
        method: 'PUT',
        params: {
          id: tuningToUpdate.id
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
  let baseUrl = `/api/${endpoint}`;
  if (method === 'GET' && params) {
    // TS-Ignoring here because params are optional for GET routes
    //
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    baseUrl += '?' + new URLSearchParams(params).toString();
  }

  const options = {
    method,
    headers: {
      'content-type': 'application/json'
    }
  };
  const body = method !== 'GET' && params ? JSON.stringify(params) : null;
  return fetch(baseUrl, body ? { ...options, body } : options);
}
