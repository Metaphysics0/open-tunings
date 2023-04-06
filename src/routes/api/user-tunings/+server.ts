import { json, type RequestHandler } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';

// the get all sits within the initial page load

/* Create tuning */
export const POST = (async ({ request }) => {
  const requestData = await request.json();
  const resp = await prisma.userSubmittedTuning.createMany({
    data: requestData
  });

  return json({ data: resp });
}) satisfies RequestHandler;

/* 'Like' or 'Unlike' Tuning */
export const PUT = (async ({ request }) => {
  const { id, likeCount } = await request.json();
  const resp = await prisma.userSubmittedTuning.update({
    where: {
      id
    },
    data: {
      likes: likeCount
    }
  });

  return json({ data: resp });
}) satisfies RequestHandler;
