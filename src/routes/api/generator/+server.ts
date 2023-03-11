import { json, type RequestHandler } from '@sveltejs/kit';

export const POST = (async ({ request }) => {
  const requestData = await request.json();
  console.log('REQUEST DATA', requestData);

  return json({ foo: 'bar' });
}) satisfies RequestHandler;
