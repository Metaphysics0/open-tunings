<script lang="ts">
  import type { UserSubmittedTuning } from '@prisma/client';

  import CurrentTuningName from '../../ui/CurrentTuningName.svelte';
  import { currentTuning } from '../../stores';
  import Note from '../../ui/note/Note.svelte';
  import Header from '../../ui/Header.svelte';
  import PlayAllNotesButton from '../../ui/PlayAllNotesButton.svelte';
  import AddTags from '../../ui/create-form/AddTags.svelte';

  let currentTuningNotes: UserSubmittedTuning['tuning'];
  currentTuning.subscribe((value) => {
    currentTuningNotes = value;
  });
</script>

<main class="font-sans flex flex-col items-center mb-9">
  <Header
    text={'Contribute to the Open Tunings collection'}
    title={'Create a tuning!'}
  />
  <section class="flex mb-3">
    {#each currentTuningNotes as noteItem, index}
      <Note {noteItem} {index} />
    {/each}
  </section>
  <AddTags />
  <!-- <PlayAllNotesButton /> -->
</main>
