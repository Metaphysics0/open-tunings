import { json, type RequestHandler } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';

export const GET = (async () => {
  const tunings = await prisma.userSubmittedTuning.findMany();
  return json({ data: tunings });
}) satisfies RequestHandler;

export const POST = (async ({ request }) => {
  const requestData = await request.json();
  const resp = await prisma.userSubmittedTuning.createMany({
    data: requestData
  });

  return json({ data: resp });
}) satisfies RequestHandler;
