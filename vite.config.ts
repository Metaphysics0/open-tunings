import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCss from 'unocss/vite';
import { extractorSvelte, presetUno, presetWebFonts } from 'unocss';

export default defineConfig({
  plugins: [
    UnoCss({
      extractors: [extractorSvelte],
      shortcuts: [
        {
          logo: 'i-logos:svelte-icon w-6em h-6em transform transition-800 hover:rotate-180'
        }
      ],
      theme: {
        extend: {
          animation: {
            shake: 'shake 0.82s cubic-bezier(.36, .07, .19, .97) both#'
          },
          keyframes: {
            shake: {
              '10%, 90%': {
                transform: 'translate3d(-1px, 0, 0)'
              },
              '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
              '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
              '40%, 60%': { transform: 'translate3d (4px, 0, 0)' }
            }
          }
        }
      },
      presets: [
        presetUno(),
        presetWebFonts({
          provider: 'google',
          fonts: {
            sans: 'Nunito'
          }
        })
      ]
    }),
    sveltekit()
  ]
});
