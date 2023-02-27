<script lang="ts">
  import { isTuningCurrentlyInStandard } from '../services/noteUtils';
  import { currentTuning } from '../stores';
  import type { INoteItem } from '../types/note';
  import Header from '../ui/Header.svelte';
  import Note from '../ui/note/Note.svelte';
  import PlayAllNotesButton from '../ui/PlayAllNotesButton.svelte';
  import ResetToStandardButton from '../ui/ResetToStandardButton.svelte';

  let currentTuningNotes: INoteItem[];
  let shouldShowResetToStandardButton: boolean = false;

  currentTuning.subscribe((value: INoteItem[]) => {
    shouldShowResetToStandardButton = !isTuningCurrentlyInStandard(value);
    currentTuningNotes = value;
  });
</script>

<main class="font-sans flex flex-col items-center w-fit m-auto">
  <Header />
  <section class="flex mb-3">
    {#each currentTuningNotes as noteItem, index}
      <Note {noteItem} {index} />
    {/each}
  </section>
  <div class="flex w-full items-center justify-center">
    {#if shouldShowResetToStandardButton}
      <div class="spacer" />
    {/if}

    <PlayAllNotesButton
      shouldHaveMarginRight={shouldShowResetToStandardButton}
    />

    {#if shouldShowResetToStandardButton}
      <ResetToStandardButton />
    {/if}
  </div>
</main>

<style>
  .spacer {
    flex: 0.7;
  }
</style>
