import { json, type RequestHandler } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';

// the get all sits within the initial page load

/* Create tuning */
export const POST = (async ({ request }) => {
  const data = await request.json();

  const response = await prisma.userSubmittedTuning.create({
    data
  });

  return json({ data: response });
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
