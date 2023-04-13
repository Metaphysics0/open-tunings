<script lang="ts">
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
  import {
    getNotesOnlyFromUrlFriendlyTuningName,
    getPageTitleFromUrlFriendlyTuningName
  } from '../../../services/noteUtils';

  export let data: PageData;

  $: currentTuning = data.currentTuning as UserSubmittedTuning;
  $: tunings = JSON.parse(data.tunings) as UserSubmittedTuning[];

  const tuningNameFromPath = browser
    ? window.location.href.split('/tuning/').at(-1)
    : undefined;
</script>

<svelte:head>
  <title>{getPageTitleFromUrlFriendlyTuningName(tuningNameFromPath)}</title>
  <meta
    name="title"
    content={`Open Tunings | ${currentTuning.tuning
      .map((n) => n.note)
      .join('')}`}
  />

  <meta
    name="description"
    content={'Discover beautiful chord shapes when your guitar is tuned to ' +
    tuningNameFromPath
      ? getNotesOnlyFromUrlFriendlyTuningName(tuningNameFromPath)
      : 'This'}
  />
</svelte:head>

<main class="font-sans flex flex-col items-center mb-9 w-fit mx-auto">
  <CurrentTuningName nameFromParentComponent={currentTuning.friendlyName} />
  <Tags tuning={currentTuning} bgColor="bg-slate-3" size="lg" />
  <div class="mb-3" />

  <section class="flex mb-5">
    {#each currentTuning.tuning as noteItem, index}
      <Note {noteItem} {index} />
    {/each}
  </section>
  <PlayAllNotesButton />

  <div class="flex items-center w-full mt-5 justify-between">
    <div class="flex items-center">
      <LikeButton tuning={currentTuning} />
      <!-- <div class="mr-3.5" />
      <CopyLink /> -->
    </div>
    <Timestamp tuning={currentTuning} />
  </div>
</main>

<TuningsList {tunings} title="Similar Tunings:" />
