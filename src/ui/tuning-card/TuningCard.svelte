<script lang="ts">
  import { AMERICAN_FOOTBALL_TUNING } from '../../constants/tunings';
  import { notePlayer } from '../../services/NotePlayer';
  import type { INoteItem } from '../../types/note';
  import TuningFork from '../icons/TuningFork.svelte';

  export let tuning: INoteItem[] = AMERICAN_FOOTBALL_TUNING;

  function strum(): void {
    notePlayer.playMany(tuning);
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<article
  on:click={strum}
  class="border-gray-900 rounded-lg p-4 border flex flex-col items-center mx-auto w-5/6 cursor-pointer"
>
  <p class="text-xl font-medium p-4 mb-5 tracking-wide">
    {#each tuning as noteItem}
      {noteItem.note}
    {/each}
  </p>
  <p class="mb-1">
    <TuningFork size={35} />
  </p>
</article>
