<script lang="ts">
  import FaAngleUp from 'svelte-icons/fa/FaAngleUp.svelte';
  import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte';
  import { currentTuning } from '../../stores';
  import type { INoteItem } from '../../types/note';
  import { musicalNotes } from '../../constants/note';
  import { pitchShiftNote } from '../../services/noteUtils';

  type IDirection = 'up' | 'down';
  export let direction: IDirection;
  export let indexOfNoteToPitchShift: number;

  let currentTuningNotes: INoteItem[];

  currentTuning.subscribe((value) => {
    currentTuningNotes = value;
  });

  function onClick(): void {
    const noteToShift = currentTuningNotes[indexOfNoteToPitchShift];
    const pitchShiftedNote = pitchShiftNote(noteToShift, direction);
    const notes = currentTuningNotes.map((note, idx) =>
      idx === indexOfNoteToPitchShift ? pitchShiftedNote : note
    );

    currentTuning.set(notes);
  }
</script>

<button on:click={onClick} class="w-8 h-7 opacity-40">
  {#if direction === 'up'}
    <FaAngleUp />
  {:else}
    <FaAngleDown />
  {/if}
</button>
