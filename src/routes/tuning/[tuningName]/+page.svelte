<script lang="ts">
  import TuningsList from '../../../ui/tunings-list/TuningsList.svelte';
  import type { PageData } from './$types';
  import type { UserSubmittedTuning } from '@prisma/client';
  import { browser } from '$app/environment';
  import {
    getNotesOnlyFromUrlFriendlyTuningName,
    getPageTitleFromUrlFriendlyTuningName
  } from '../../../services/noteUtils';
  import TuningWithName from '../../../ui/sections/TuningWithName.svelte';

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

<TuningWithName tuning={currentTuning} />
<TuningsList {tunings} title="Similar Tunings:" />
