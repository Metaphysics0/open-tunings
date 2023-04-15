import { json, type RequestHandler } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';

export const PUT = (async ({ request }) => {
  const { id } = await request.json();
  const action = request.url.split('/').at(-1);

  const resp = await prisma.userSubmittedTuning.update({
    where: {
      id
    },
    data: {
      likes: {
        [action === 'like' ? 'increment' : 'decrement']: 1
      }
    }
  });

  return json({ data: resp });
}) satisfies RequestHandler;
