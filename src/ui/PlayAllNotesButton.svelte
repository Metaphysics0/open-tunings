<script lang="ts">
  import { browser } from '$app/environment';
  import FaGuitar from 'svelte-icons/fa/FaGuitar.svelte';
  import { notePlayer } from '../services/NotePlayer';
  import { currentTuning, isBrowserMuted } from '../stores';
  import type { Note } from '@prisma/client';

  let currentTuningNotes: Note[];
  let hasUserMuted: boolean;

  export let btnColor: 'red' | 'blue' = 'red';

  currentTuning.subscribe((value) => {
    currentTuningNotes = value;
  });

  isBrowserMuted.subscribe((val) => {
    hasUserMuted = val;
  });

  function strum(): void {
    if (!browser) return;
    if (hasUserMuted) return;

    // @ts-ignore
    notePlayer.playMany(currentTuningNotes);
  }

  // const className =
</script>

<button
  type="button"
  on:click={strum}
  class={`w-fit py-2 px-3 bg-blue-500! hover:bg-blue-400! text-white font-semibold p-2 rounded-lg shadow-md transition duration-75 cursor-pointer`}
>
  <span class="block h-5 flex">
    <FaGuitar />
    <span class="ml-1 font-bold tracking-wider">Strum!</span>
  </span>
</button>
