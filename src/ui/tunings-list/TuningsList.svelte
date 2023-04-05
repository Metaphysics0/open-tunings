<script lang="ts">
  import type { UserSubmittedTuning } from '@prisma/client';
  import { sampleTunings } from '../../constants/tunings';
  import { apiService } from '../../services/apiService';
  import type { IUserSubmittedTuning } from '../../types/note';
  import TuningCard from '../tuning-card/TuningCard.svelte';
  import { getTuningNameAsString } from '../../services/noteUtils';

  export let tunings: IUserSubmittedTuning[];

  async function writeTunings(): Promise<void> {
    // @ts-ignore
    const params: UserSubmittedTuning[] = sampleTunings.map((tuning) => ({
      tuning,
      friendlyName: getTuningNameAsString(tuning),
      tags: []
    }));

    const res = await apiService.userTunings.createMany(params);
    const j = await res.json();
    console.log('RESP', j);
  }
</script>

<button on:click={writeTunings}> Write tunings </button>
<section
  class="font-sans grid grid-flow-row sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[calc(100%-5rem)] justify-center mx-auto"
>
  {#each tunings as tuning}
    <TuningCard {tuning} />
  {/each}
</section>
