<script lang="ts">
  import { currentTuning } from '../stores';
  import type { IMusicalNote } from '../types/note';
  import Header from '../ui/Header.svelte';
  import Note from '../ui/Note.svelte';

  let curentTuningValue: IMusicalNote[];

  currentTuning.subscribe((value) => {
    curentTuningValue = value;
  });
</script>

<main class="font-sans flex flex-col items-center">
  <Header />
  <section class="flex">
    {#each curentTuningValue as note}
      <Note {note} />
    {/each}
  </section>
</main>
