<script lang="ts">
  import type { UserSubmittedTuning } from '@prisma/client';

  export let tuning: UserSubmittedTuning;

  // @ts-ignore
  let timestamp = tuning.createdAt || 'Yesterday';
</script>

<div class="opacity-70">{timestamp}</div>
