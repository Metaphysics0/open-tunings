<script lang="ts">
  import { notePlayer } from '../../services/NotePlayer';
  import PitchShiftButton from './PitchShiftButton.svelte';
  import { fade } from 'svelte/transition';
  import { browser } from '$app/environment';
  import { isBrowserMuted } from '../../stores';
  import { page } from '$app/stores';
  import type { Note } from '@prisma/client';

  export let noteItem: Note;

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
  {#if $page.url.pathname === '/create'}
    <PitchShiftButton direction="up" indexOfNoteToPitchShift={index} />
  {/if}
  <button
    type="button"
    class="bg-slate-2! rounded-xl p-4 sm:p-5 w-15 flex flex-col items-center justify-center cursor-pointer"
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
