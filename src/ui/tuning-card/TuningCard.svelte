<script lang="ts">
  import { browser } from '$app/environment';
  import type { UserSubmittedTuning } from '@prisma/client';
  import { notePlayer } from '../../services/NotePlayer';
  import { currentTuning, isBrowserMuted } from '../../stores';
  import TuningFork from '../icons/TuningFork.svelte';
  import LikeButton from './LikeButton.svelte';
  import Timestamp from './Timestamp.svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Tags from './Tags.svelte';

  export let tuning: UserSubmittedTuning;

  let hasUserMuted: boolean;
  isBrowserMuted.subscribe((val) => {
    hasUserMuted = val;
  });

  function strum(): void {
    if (!browser) return;
    if (hasUserMuted) return;
    // @ts-ignore
    notePlayer.playMany(tuning.tuning);
  }

  function setCurrentTuning(): void {
    currentTuning.set(tuning.tuning);
  }

  function pushState(): void {
    if ($page.url.pathname.includes('/tuning')) {
      goto(`${tuning.tuningName}`, {
        replaceState: true
      });
      return;
    }

    goto(`tuning/${tuning.tuningName}`);
  }

  function onClick() {
    strum();
    setCurrentTuning();
    pushState();
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="mx-auto w-5/6 mb-3">
  <article
    on:click={onClick}
    class="rounded-lg p-4 border flex flex-col items-center mb-2 cursor-pointer shadow-sm hover:shadow-md"
  >
    {#if tuning.friendlyName}
      <span class="font-light">"{tuning.friendlyName}"</span>
    {/if}
    <p class="text-xl font-medium text-gray800 p-4 tracking-wide mb-5">
      {#each tuning.tuning as noteItem}
        {noteItem.note}
      {/each}
    </p>
    <p class="mb-1">
      <TuningFork size={35} />
    </p>

    {#if tuning.tags?.length}
      <div class="my-2" />
    {/if}

    <Tags {tuning} />
  </article>
  <div class="flex items-center justify-between">
    <LikeButton {tuning} />
    <Timestamp {tuning} />
  </div>
</div>
