<script lang="ts">
  import FaGuitar from 'svelte-icons/fa/FaGuitar.svelte';
  import { notePlayer } from '../services/NotePlayer';
  import { currentTuning } from '../stores';
  import type { INoteItem } from '../types/note';

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
  class="w-fit py-2 px-3 bg-red-500 hover:bg-red-400 text-white font-semibold p-2 rounded-lg shadow-md transition duration-75 cursor-pointer"
>
  <span class="block h-5 flex">
    <FaGuitar />
    <span class="ml-1 font-bold tracking-wide"> STRUM </span>
  </span>
</button>
