<script lang="ts">
  import { currentTuning as currentTuningStore } from '../stores';
  import Header from '../ui/Header.svelte';
  import Note from '../ui/note/Note.svelte';
  import PlayAllNotesButton from '../ui/PlayAllNotesButton.svelte';
  import CurrentTuningName from '../ui/CurrentTuningName.svelte';
  import TuningsList from '../ui/tunings-list/TuningsList.svelte';
  import type { PageData } from './$types';
  import type { UserSubmittedTuning } from '@prisma/client';

  let currentTuning: UserSubmittedTuning;
  currentTuningStore.subscribe((value) => {
    currentTuning = value;
  });

  export let data: PageData;
  const tunings = JSON.parse(data.tunings);
</script>

<main class="font-sans flex flex-col items-center mb-9">
  <!-- <Header /> -->
  <CurrentTuningName />
  <section class="flex mb-3">
    {#each currentTuning.tuning as noteItem, index}
      <Note {noteItem} {index} />
    {/each}
  </section>
  <PlayAllNotesButton />
</main>

<TuningsList {tunings} />
