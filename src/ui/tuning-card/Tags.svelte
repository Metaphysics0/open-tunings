<script lang="ts">
  import type { UserSubmittedTuning } from '@prisma/client';
  export let tuning: UserSubmittedTuning;

  const tags = tuning.tags;
</script>

<div class="flex">
  {#each tags as tag}
    <div class="bg-slate-2 p-1 px-2 mx-2 rounded-12">
      {tag}
    </div>
  {/each}
</div>
