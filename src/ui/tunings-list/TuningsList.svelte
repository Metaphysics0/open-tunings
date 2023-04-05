<script lang="ts">
  import type { IUserSubmittedTuning } from '../../types/note';
  import TuningCard from '../tuning-card/TuningCard.svelte';

  export let tunings: IUserSubmittedTuning[];
</script>

<section
  class="font-sans grid grid-flow-row sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[calc(100%-5rem)] justify-center mx-auto"
>
  {#each tunings as tuning}
    <TuningCard {tuning} />
  {/each}
</section>
