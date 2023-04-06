<script lang="ts">
  import type { UserSubmittedTuning } from '@prisma/client';

  import CurrentTuningName from '../../ui/CurrentTuningName.svelte';
  import { currentTuning } from '../../stores';
  import Note from '../../ui/note/Note.svelte';

  let currentTuningNotes: UserSubmittedTuning['tuning'];
  currentTuning.subscribe((value) => {
    currentTuningNotes = value;
  });
</script>

<CurrentTuningName />
<section class="flex mb-3">
  {#each currentTuningNotes as noteItem, index}
    <Note {noteItem} {index} />
  {/each}
</section>
