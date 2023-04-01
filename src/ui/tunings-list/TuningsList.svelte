<script lang="ts">
  import { apiService } from '../../services/apiService';
  import type { IUserSubmittedTuning } from '../../types/note';
  import TuningCard from '../tuning-card/TuningCard.svelte';

  async function getTunings(): Promise<IUserSubmittedTuning[]> {
    try {
      const response = await apiService.userTunings.get();
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching tuning', error);
      return [];
    }
  }

  let getTuningsPromise = getTunings();
</script>

<section
  class="font-sans grid grid-flow-row sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[calc(100%-5rem)] justify-center mx-auto"
>
  {#await getTuningsPromise}
    <p>loading ..</p>
  {:then tunings}
    {#each tunings as tuning}
      <TuningCard {tuning} />
    {/each}
  {/await}
</section>
