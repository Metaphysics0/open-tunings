import { json, type RequestHandler } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';
import { Prisma } from '@prisma/client';

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

  try {
    const response = await prisma.userSubmittedTuning.create({
      data: requestData
    });

    return json({ data: response, error: null });
  } catch (error) {
    console.log('Error updating tuning', JSON.stringify(error, null, 2));
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return json({
          data: {},
          error: 'This tuning already exists!'
        });
      }
    }
    return json({
      data: {},
      error: error
    });
  }
}) satisfies RequestHandler;

/* 'Like' or 'Unlike' Tuning */
export const PUT = (async ({ request }) => {
  const availbleActions = ['like', 'unlike'];
  const { id, action } = await request.json();

  if (!action || !availbleActions.includes(action)) {
    throw 'Unable to tuning at this time';
  }

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
