import { json, type RequestHandler } from '@sveltejs/kit';

export const POST = (async ({ request }) => {
  const requestData = await request.formData();
  console.log('REQUEST DATA', requestData);

  return json({ foo: 'bar' });
}) satisfies RequestHandler;
