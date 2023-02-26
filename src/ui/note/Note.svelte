<script lang="ts">
  import { notePlayer } from '../../services/NotePlayer';
  import type { INoteItem } from '../../types/note';
  import PitchShiftButton from './PitchShiftButton.svelte';

  export let noteItem: INoteItem;
  let shouldShowOctave: boolean = false;

  function playSingleNote(): void {
    notePlayer.play(noteItem);
  }
</script>

<div
  class="flex flex-col items-center justify-center mx-3"
  on:mouseover={() => (shouldShowOctave = true)}
  on:focus={() => (shouldShowOctave = true)}
  on:mouseleave={() => (shouldShowOctave = false)}
>
  <PitchShiftButton direction="up" />
  <button
    class="bg-slate-2 rounded-xl p-5 w-fit flex flex-col cursor-pointer"
    on:click={playSingleNote}
  >
    <p class="relative text-3xl font-extrabold">
      {noteItem.note}
      {#if shouldShowOctave}
        <span class="absolute block opacity-30">
          {noteItem.octave}
        </span>
      {/if}
    </p>
  </button>
  <PitchShiftButton direction="down" />
</div>

<style>
  span {
    font-size: 50%;
    top: 10px;
    right: -10px;
  }
</style>
