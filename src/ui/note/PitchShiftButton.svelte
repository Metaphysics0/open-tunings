<script lang="ts">
  import { currentTuning as currentTuningStore } from '../../stores';
  import type { IPitchShiftDirection } from '../../types/note';
  import { pitchShiftNote } from '../../services/noteUtils';
  import type { UserSubmittedTuning } from '@prisma/client';

  export let direction: IPitchShiftDirection;
  export let indexOfNoteToPitchShift: number;

  let currentTuning: UserSubmittedTuning;

  currentTuningStore.subscribe((value) => {
    currentTuning = value;
  });

  function pitchShiftNoteEitherUpOrDown(): void {
    const noteToShift = currentTuning.tuning[indexOfNoteToPitchShift];
    const pitchShiftedNote = pitchShiftNote(noteToShift, direction);
    const transposedTuning = currentTuning.tuning.map((note, idx) =>
      idx === indexOfNoteToPitchShift ? pitchShiftedNote : note
    );

    currentTuningStore.set({
      ...currentTuning,
      tuning: transposedTuning
    });
  }
</script>

<button
  type="button"
  on:click={pitchShiftNoteEitherUpOrDown}
  class="sm:w-8 sm:h-7 text-lg font-bold opacity-45 hover:opacity-65 transition-opacity duration-100 touch-manipulation"
>
  {#if direction === 'up'}
    <i class="fa-solid fa-chevron-up" />
  {:else}
    <i class="fa-solid fa-chevron-down" />
  {/if}
</button>
