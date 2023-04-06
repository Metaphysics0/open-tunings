<script lang="ts">
  import type { UserSubmittedTuning } from '@prisma/client';
  import TuningCard from '../tuning-card/TuningCard.svelte';

  export let tunings: UserSubmittedTuning[];
</script>

<section
  class="font-sans grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[calc(100%-5rem)] justify-center mx-auto"
>
  {#each tunings as tuning}
    <TuningCard {tuning} />
  {/each}
</section>
