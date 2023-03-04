<script lang="ts">
  import { currentTuning } from '../stores';
  import type { INoteItem } from '../types/note';

  let currentTuningNotes: INoteItem[];

  currentTuning.subscribe((value) => {
    currentTuningNotes = value;
  });
</script>

<div class="mb-5 mt-2 text-lg">
  Current tuning:
  <span class="font-extrabold"> E Standard </span>
</div>
