import { json, type RequestHandler } from '@sveltejs/kit';
import { CHAT_GPT_SECRET } from '$env/static/private';

export const POST = (async ({ request }) => {
  const requestData = await request.json();
  const a = await generateTuningFromOpenAi();

  return json({ foo: 'bar' });
}) satisfies RequestHandler;

// ~~~ Private ~~~
async function generateTuningFromOpenAi(params?: any): Promise<any> {
  const apiEndpoint =
    'https://api.openai.com/v1/engines/davinci-codex/completions';
  const prompt = `Can you generate an array that is an open tuning for the guitar, 
  for example: ["C", "G", "B", "G", "B", "D"]
  please use sharps instead of flats if relevant`;
  const maxTokens = 20;
  const temperature = 0.5;

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${CHAT_GPT_SECRET}`
    },
    body: JSON.stringify({
      prompt,
      temperature,
      max_tokens: maxTokens
    })
  });

  const data = await response.json();
  console.log('DATA', data);

  console.log('data', data.choices[0].text.trim().split(' '));
  return data;
}
