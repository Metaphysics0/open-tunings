import type { Actions } from './$types';

export const actions = {
  async getCurrentChordName({ request }): Promise<any> {
    const data = await request.formData();
    console.log('DATA', data);

    // const userInput = data.get('url')?.toString();
    // if (!userInput) return;
    return {
      foo: 'bar'
    };
  }
} satisfies Actions;
