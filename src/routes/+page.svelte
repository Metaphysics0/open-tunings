<script lang="ts">
  import { currentTuning } from '../stores';
  import type { INoteItem } from '../types/note';
  import Header from '../ui/Header.svelte';
  import Note from '../ui/note/Note.svelte';
  import PlayAllNotesButton from '../ui/PlayAllNotesButton.svelte';
  import CurrentTuningName from '../ui/CurrentTuningName.svelte';
  import TuningCard from '../ui/tuning-card/TuningCard.svelte';
  import { sampleTunings } from '../constants/tunings';

  let currentTuningNotes: INoteItem[];

  currentTuning.subscribe((value) => {
    currentTuningNotes = value;
  });
</script>

<main class="font-sans flex flex-col items-center mb-9">
  <Header />
  <CurrentTuningName />
  <section class="flex mb-3">
    {#each currentTuningNotes as noteItem, index}
      <Note {noteItem} {index} />
    {/each}
  </section>
  <PlayAllNotesButton />
</main>

<section
  class="font-sans grid grid-flow-row sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[calc(100%-5rem)] justify-center mx-auto"
>
  {#each sampleTunings as sampleTuning}
    <TuningCard tuning={sampleTuning} />
  {/each}
</section>
