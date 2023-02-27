<script lang="ts">
  import FaPlay from 'svelte-icons/fa/FaPlay.svelte';
  import FaStop from 'svelte-icons/fa/FaStop.svelte';
  import { notePlayer } from '../services/NotePlayer';
  import { currentTuning } from '../stores';
  import type { INoteItem } from '../types/note';

  export let shouldHaveMarginRight: boolean;

  let currentTuningNotes: INoteItem[];
  let isPlaying: boolean = false;

  currentTuning.subscribe((value) => {
    currentTuningNotes = value;
  });

  function togglePlay() {
    if (isPlaying) {
      notePlayer.stop();
      isPlaying = false;
      return;
    }

    notePlayer.playMany(currentTuningNotes);
    isPlaying = true;
  }
</script>

<button
  on:click={togglePlay}
  class={`rounded-full flex items-center justify-center text-sm w-10 h-10 bg-blue text-white${
    shouldHaveMarginRight ? ' mr-auto' : ''
  }`}
>
  <span class="block h-5 w-5">
    {#if isPlaying}
      <FaStop />
    {:else}
      <FaPlay />
    {/if}
  </span>
</button>
