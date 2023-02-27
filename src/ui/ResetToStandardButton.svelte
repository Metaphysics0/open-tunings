<script lang="ts">
  import { fade } from 'svelte/transition';
  import { STANDARD_TUNING } from '../constants/note';
  import { currentTuning } from '../stores';
  import type { INoteItem } from '../types/note';

  let currentTuningNotes: INoteItem[];

  currentTuning.subscribe((value) => {
    currentTuningNotes = value;
  });

  function resetToStandard(): void {
    currentTuning.set(STANDARD_TUNING);
  }
</script>

<button class="text-coolgray" on:click={resetToStandard} transition:fade>
  Reset to standard
</button>
