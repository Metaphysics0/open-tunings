<script lang="ts">
  import { currentTuning as currentTuningStore } from '../../../stores';
  import Note from '../../../ui/note/Note.svelte';
  import PlayAllNotesButton from '../../../ui/PlayAllNotesButton.svelte';
  import CurrentTuningName from '../../../ui/CurrentTuningName.svelte';
  import TuningsList from '../../../ui/tunings-list/TuningsList.svelte';
  import type { PageData } from './$types';
  import type { UserSubmittedTuning } from '@prisma/client';
  import { browser } from '$app/environment';
  import LikeButton from '../../../ui/tuning-card/LikeButton.svelte';
  import Tags from '../../../ui/tuning-card/Tags.svelte';
  import Timestamp from '../../../ui/tuning-card/Timestamp.svelte';

  export let data: PageData;

  let currentTuning: UserSubmittedTuning;
  currentTuningStore.subscribe((value) => {
    currentTuning = value;
  });

  if (data.currentTuning) {
    currentTuningStore.set(data.currentTuning);
  }

  const tunings = JSON.parse(data.tunings);
</script>

<svelte:head>
  <title
    >Open Tuning: {browser
      ? window.location.href.split('/tuning/').at(-1)
      : ''}</title
  >
  <meta
    name="title"
    content={`Open Tunings | ${currentTuning.tuning
      .map((n) => n.note)
      .join('')}`}
  />
</svelte:head>

<main class="font-sans flex flex-col items-center mb-9 w-fit mx-auto">
  <CurrentTuningName nameFromParentComponent={currentTuning.friendlyName} />
  <Tags tuning={currentTuning} bgColor="bg-slate-3" size="lg" />
  <div class="mb-3" />

  <section class="flex mb-3">
    {#each currentTuning.tuning as noteItem, index}
      <Note {noteItem} {index} />
    {/each}
  </section>
  <PlayAllNotesButton />

  <div class="flex items-center w-full justify-between">
    <LikeButton tuning={currentTuning} />
    <Timestamp tuning={currentTuning} />
  </div>
</main>
