<script lang="ts">
  import { AMERICAN_FOOTBALL_TUNING } from '../../constants/tunings';
  import { notePlayer } from '../../services/NotePlayer';
  import { currentTuning } from '../../stores';
  import type { INoteItem } from '../../types/note';
  import TuningFork from '../icons/TuningFork.svelte';

  export let tuning: INoteItem[] = AMERICAN_FOOTBALL_TUNING;

  function strum(): void {
    notePlayer.playMany(tuning);
  }

  function setCurrentTuning(): void {
    currentTuning.set(tuning);
  }

  function strumAndSetCurrentTuning() {
    strum();
    setCurrentTuning();
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<article
  on:click={strumAndSetCurrentTuning}
  class="rounded-lg p-4 border flex flex-col items-center mx-auto w-5/6 cursor-pointer shadow-sm hover:shadow-md"
>
  <p class="text-xl font-medium text-gray800 p-4 mb-5 tracking-wide">
    {#each tuning as noteItem}
      {noteItem.note}
    {/each}
  </p>
  <p class="mb-1">
    <TuningFork size={35} />
  </p>
</article>
