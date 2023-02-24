<script lang="ts">
  import { currentTuning } from '../stores';
  import type { INoteItem } from '../types/note';
  import Header from '../ui/Header.svelte';
  import Note from '../ui/Note.svelte';

  let currentTuningNotes: INoteItem[];

  currentTuning.subscribe((value) => {
    currentTuningNotes = value;
  });
</script>

<main class="font-sans flex flex-col items-center">
  <Header />
  <section class="flex">
    {#each currentTuningNotes as noteItem}
      <Note {noteItem} />
    {/each}
  </section>
</main>
