<script lang="ts">
  import { browser } from '$app/environment';
  import FaGuitar from 'svelte-icons/fa/FaGuitar.svelte';
  import { notePlayer } from '../services/NotePlayer';
  import { currentTuning, isBrowserMuted } from '../stores';
  import type { Note } from '@prisma/client';

  let currentTuningNotes: Note[];
  let hasUserMuted: boolean;

  export let btnColor: 'red' | 'blue' = 'red';
  export let asLink: boolean = false;

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
