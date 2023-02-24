<script lang="ts">
  import FaPlay from 'svelte-icons/fa/FaPlay.svelte';
  import { notePlayer } from '../services/NotePlayer';
  import { currentTuning } from '../stores';
  import type { INoteItem } from '../types/note';

  let currentTuningNotes: INoteItem[];

  currentTuning.subscribe((value) => {
    currentTuningNotes = value;
  });

  function playAllNotes() {
    notePlayer.playMany(currentTuningNotes);
  }
</script>

<button
  on:click={playAllNotes}
  class="rounded-full flex items-center justify-center text-sm w-10 h-10 bg-blue text-white "
>
  <span class="block h-5 w-5">
    <FaPlay />
  </span>
</button>
