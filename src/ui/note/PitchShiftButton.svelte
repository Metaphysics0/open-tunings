<script lang="ts">
  import FaAngleUp from 'svelte-icons/fa/FaAngleUp.svelte';
  import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte';
  import { currentTuning } from '../../stores';
  import type { INoteItem, IPitchShiftDirection } from '../../types/note';
  import { pitchShiftNote } from '../../services/noteUtils';

  export let direction: IPitchShiftDirection;
  export let indexOfNoteToPitchShift: number;

  let currentTuningNotes: INoteItem[];

  currentTuning.subscribe((value) => {
    // @ts-ignore
    currentTuningNotes = value;
  });

  function pitchShiftNoteEitherUpOrDown(): void {
    const noteToShift = currentTuningNotes[indexOfNoteToPitchShift];
    const pitchShiftedNote = pitchShiftNote(noteToShift, direction);
    const notes = currentTuningNotes.map((note, idx) =>
      idx === indexOfNoteToPitchShift ? pitchShiftedNote : note
    );

    currentTuning.set(notes);
  }
</script>

<button
  on:click={pitchShiftNoteEitherUpOrDown}
  class="sm:w-8 sm:h-7 h-6 w-7 opacity-40"
>
  {#if direction === 'up'}
    <FaAngleUp />
  {:else}
    <FaAngleDown />
  {/if}
</button>
