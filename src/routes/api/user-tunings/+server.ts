import { json, type RequestHandler } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';

/* List tunings */
/* We call this from initial load, but adding it here just for fun */
export const GET = (async () => {
  const tunings = await prisma.userSubmittedTuning.findMany();
  return json({ data: tunings });
}) satisfies RequestHandler;

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
  const requestData = await request.json();

  const resp = await prisma.userSubmittedTuning.update({
    where: {
      id: requestData.get('id')
    },
    data: {
      likes: requestData.get('likeCount')
    }
  });

  return json({ data: resp });
}) satisfies RequestHandler;
