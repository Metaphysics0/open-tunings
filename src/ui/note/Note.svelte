<script lang="ts">
  import { notePlayer } from '../../services/NotePlayer';
  import type { INoteItem } from '../../types/note';
  import PitchShiftButton from './PitchShiftButton.svelte';
  import { fade } from 'svelte/transition';
  import { browser } from '$app/environment';
  import { isBrowserMuted } from '../../stores';

  export let noteItem: INoteItem;
  export let index: number;
  let shouldShowOctave: boolean = false;

  let hasUserMuted: boolean;
  isBrowserMuted.subscribe((val) => {
    hasUserMuted = val;
  });

  function playSingleNote(): void {
    if (!browser) return;
    if (hasUserMuted) return;
    // @ts-ignore
    notePlayer.play(noteItem);
  }
</script>

<div
  class="flex flex-col items-center justify-center mx-3"
  on:mouseover={() => (shouldShowOctave = true)}
  on:focus={() => (shouldShowOctave = true)}
  on:mouseleave={() => (shouldShowOctave = false)}
>
  <PitchShiftButton direction="up" indexOfNoteToPitchShift={index} />
  <button
    class="bg-slate-2 rounded-xl p-5 w-fit flex flex-col cursor-pointer"
    on:click={playSingleNote}
  >
    <p class="relative text-3xl font-extrabold">
      {noteItem.note}
      {#if shouldShowOctave}
        <span class="absolute block opacity-30" transition:fade>
          {noteItem.octave}
        </span>
      {/if}
    </p>
  </button>
  <PitchShiftButton direction="down" indexOfNoteToPitchShift={index} />
</div>

<style>
  span {
    font-size: 50%;
    top: 10px;
    right: -10px;
  }
</style>
