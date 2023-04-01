import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import buildUtils from '@vercel/build-utils';
const { loadEnvConfig } = buildUtils;

const env = process.env.NODE_ENV;
const isDev = env === 'development';

if (!isDev) {
  // Load the environment variables during the build process
  loadEnvConfig(process.cwd());
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    alias: { 'lib/': './src/routes/lib/' },
    adapter: adapter()
  }
};

export default config;
