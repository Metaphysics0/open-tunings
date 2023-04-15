<script lang="ts">
  import { browser } from '$app/environment';
  import { notePlayer } from '../services/NotePlayer';
  import { isBrowserMuted } from '../stores';
  import type { UserSubmittedTuning } from '@prisma/client';

  export let asLink: boolean = false;
  export let tuning: UserSubmittedTuning;

  function strum(): void {
    if (!browser || $isBrowserMuted) return;

    // @ts-ignore
    notePlayer.playMany(tuning?.tuning);
  }

  const linkStyle =
    'text-blue underline font-extrabold text-lg hover:text-blue-5 transition-all';
  const buttonStyle =
    'w-fit py-2 px-3 bg-blue-500! hover:bg-blue-400! text-white font-semibold p-2 rounded-lg shadow-md transition duration-75 cursor-pointer';
</script>

<button type="button" on:click={strum} class={asLink ? linkStyle : buttonStyle}>
  <span class="block h-5 flex">
    <span class="ml-1 font-bold tracking-wider">Strum!</span>
  </span>
</button>
