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
  class="border-gray-900 rounded-lg p-4 border w-fit flex flex-col items-center mx-3"
>
  <p class="text-xl font-medium mb-5">
    {#each tuning as noteItem}
      {noteItem.note}
    {/each}
  </p>
  <TuningFork size={25} />
</article>
