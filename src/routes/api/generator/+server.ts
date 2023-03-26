import { json, type RequestHandler } from '@sveltejs/kit';
import { CHAT_GPT_SECRET } from '$env/static/private';

export const POST = (async ({ request }) => {
  const requestData = await request.json();
  const a = await generateTuningFromOpenAi();

  return json({ foo: 'bar' });
}) satisfies RequestHandler;

// ~~~ Private ~~~
async function generateTuningFromOpenAi(params?: any): Promise<any> {
  const apiEndpoint = 'https://api.openai.com/v1/chat/completions';
  const prompt2 = `can you describe why the tuning for the guitar: ["C", "G", "B", "G", "B", "D"] sounds the way it does?`;
  const maxTokens = 20;

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${CHAT_GPT_SECRET}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt2 }],
      n: 1,
      stop: '\n',
      max_tokens: maxTokens
    })
  });

  const data = await response.json();
  console.log('DATA', JSON.stringify(data, null, 2));

  return data;
}
