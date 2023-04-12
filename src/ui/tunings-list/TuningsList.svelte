<script lang="ts">
  import type { UserSubmittedTuning } from '@prisma/client';
  import TuningCard from '../tuning-card/TuningCard.svelte';

  export let tunings: UserSubmittedTuning[];
  export let title: string | null = null;
</script>

<div class="w-[calc(100%-5rem)] justify-center mx-auto font-sans">
  {#if title && tunings.length}
    <h4 class="mb-4 text-2xl font-extrabold">{title}</h4>
  {/if}
  <section
    class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 "
  >
    {#each tunings as tuning}
      <TuningCard {tuning} />
    {/each}
  </section>
</div>
