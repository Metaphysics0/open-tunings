<script lang="ts">
  import { currentTuning as currentTuningStore } from '../stores';
  import Note from '../ui/note/Note.svelte';
  import PlayAllNotesButton from '../ui/PlayAllNotesButton.svelte';
  import CurrentTuningName from '../ui/CurrentTuningName.svelte';
  import TuningsList from '../ui/tunings-list/TuningsList.svelte';
  import type { PageData } from './$types';
  import type { UserSubmittedTuning } from '@prisma/client';
  import Tags from '../ui/tuning-card/Tags.svelte';

  let currentTuning: UserSubmittedTuning;
  currentTuningStore.subscribe((value) => {
    currentTuning = value;
  });

  export let data: PageData;

  const tunings = JSON.parse(data.tunings) as UserSubmittedTuning[];
  const firstTuning = tunings[0];
</script>

<main class="font-sans flex flex-col items-center mb-10">
  <CurrentTuningName nameFromParentComponent={firstTuning.friendlyName} />
  <Tags
    tuning={firstTuning}
    bgColor="bg-white border-slate-2 border"
    size="lg"
  />
  <section class="flex my-6">
    {#each firstTuning.tuning as noteItem, index}
      <Note {noteItem} {index} />
    {/each}
  </section>
  <PlayAllNotesButton />
</main>

<TuningsList {tunings} />
