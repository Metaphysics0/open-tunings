import { json, type RequestHandler } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';

export const GET = (async ({ request }) => {
  const requestUrl = new URL(request.url);
  const tuningName = requestUrl.searchParams.get('tuningName');
  if (!tuningName) {
    throw new Error('Unable to find tuning name from request URL');
  }

  const response = await prisma.userSubmittedTuning.findFirst({
    where: {
      tuningName
    }
  });

  return json({ data: response });
}) satisfies RequestHandler;

/* Create tuning */
export const POST = (async ({ request }) => {
  const requestData = await request.json();

  const response = await prisma.userSubmittedTuning.create({
    data: requestData
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
