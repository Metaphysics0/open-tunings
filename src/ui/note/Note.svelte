<script lang="ts">
  import { notePlayer } from '../../services/NotePlayer';
  import PitchShiftButton from './PitchShiftButton.svelte';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import type { Note } from '@prisma/client';

  export let noteItem: Note;

  export let index: number;
  let shouldShowOctave: boolean = false;

  function playSingleNote(): void {
    if (!browser) return;
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
  {#if $page.url.pathname === '/create'}
    <PitchShiftButton direction="up" indexOfNoteToPitchShift={index} />
  {/if}
  <button
    type="button"
    class="border shadow-sm hover:shadow-md active:shadow-sm transition-all rounded-xl p-3 sm:p-4 w-fit flex flex-col items-center justify-center cursor-pointer"
    on:click={playSingleNote}
  >
    <p class="relative sm:text-4xl text-3xl">
      {noteItem.note}
      {#if shouldShowOctave}
        <span class="absolute block opacity-30">
          {noteItem.octave}
        </span>
      {/if}
    </p>
  </button>
  {#if $page.url.pathname === '/create'}
    <PitchShiftButton direction="down" indexOfNoteToPitchShift={index} />
  {/if}
</div>

<style>
  span {
    font-size: 50%;
    top: 10px;
    right: -10px;
  }
</style>
