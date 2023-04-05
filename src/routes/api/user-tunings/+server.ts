import { json, type RequestHandler } from '@sveltejs/kit';
import { tuningsCollection } from '$lib/server/mongodb';
import prisma from '$lib/server/prisma';

export const GET = (async () => {
  const tunings = await prisma.userSubmittedTuning.findMany();
  console.log('TUNINGS FROM PRISMA', tunings);

  // const tunings = await tuningsCollection.find().toArray();
  return json({ data: [] });
}) satisfies RequestHandler;

export const POST = (async ({ request }) => {
  const requestData = await request.json();
  const req1 = requestData[0];
  const resp = await prisma.userSubmittedTuning.createMany({
    data: req1
  });

  return json({ data: resp });
}) satisfies RequestHandler;
