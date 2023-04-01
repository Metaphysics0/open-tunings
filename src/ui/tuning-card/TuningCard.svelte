<script lang="ts">
  import { browser } from '$app/environment';
  import { notePlayer } from '../../services/NotePlayer';
  import { currentTuning } from '../../stores';
  import type { IUserSubmittedTuning } from '../../types/note';
  import TuningFork from '../icons/TuningFork.svelte';
  import LikeButton from './LikeButton.svelte';
  import Timestamp from './Timestamp.svelte';

  export let tuning: IUserSubmittedTuning;

  function strum(): void {
    if (!browser) return;
    // @ts-ignore
    notePlayer.playMany(tuning.tuning);
  }

  function setCurrentTuning(): void {
    currentTuning.set(tuning.tuning);
  }

  function strumAndSetCurrentTuning() {
    strum();
    setCurrentTuning();
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="mx-auto w-5/6 mb-3">
  <article
    on:click={strumAndSetCurrentTuning}
    class="rounded-lg p-4 border flex flex-col items-center mb-2 cursor-pointer shadow-sm hover:shadow-md"
  >
    <p class="text-xl font-medium text-gray800 p-4 mb-5 tracking-wide">
      {#each tuning.tuning as noteItem}
        {noteItem.note}
      {/each}
    </p>
    <p class="mb-1">
      <TuningFork size={35} />
    </p>
  </article>
  <div class="flex items-center justify-between">
    <LikeButton />
    <Timestamp />
  </div>
</div>
