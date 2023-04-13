<script lang="ts">
  import { browser } from '$app/environment';
  import { notePlayer } from '../services/NotePlayer';
  import {
    currentTuning as currentTuningStore,
    isBrowserMuted
  } from '../stores';
  import type { UserSubmittedTuning } from '@prisma/client';

  let currentTuning: UserSubmittedTuning;
  let hasUserMuted: boolean;

  export let asLink: boolean = false;

  currentTuningStore.subscribe((value) => {
    currentTuning = value;
  });

  isBrowserMuted.subscribe((val) => {
    hasUserMuted = val;
  });

  function strum(): void {
    if (!browser) return;
    if (hasUserMuted) return;

    // @ts-ignore
    notePlayer.playMany(currentTuning.tuning);
  }

  const linkStyle = 'text-blue underline font-extrabold text-lg';
  const buttonStyle =
    'w-fit py-2 px-3 bg-blue-500! hover:bg-blue-400! text-white font-semibold p-2 rounded-lg shadow-md transition duration-75 cursor-pointer';
</script>

<button type="button" on:click={strum} class={asLink ? linkStyle : buttonStyle}>
  <span class="block h-5 flex">
    <!-- <FaGuitar /> -->
    <span class="ml-1 font-bold tracking-wider">Strum!</span>
  </span>
</button>
