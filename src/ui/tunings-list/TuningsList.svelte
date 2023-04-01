<script lang="ts">
  import { sampleTunings } from '../../constants/tunings';
  import { apiService } from '../../services/apiService';
  import type { IUserSubmittedTuning } from '../../types/note';
  import TuningCard from '../tuning-card/TuningCard.svelte';

  async function getTunings(): Promise<any> {
    try {
      const response = await apiService.userTunings.get();
      const data = await response.json();

      return data;
    } catch (error) {
      console.error('Error fetching tuning', error);
      return error;
    }
  }
  // let tunings = getTunings();

  async function uploadTuning() {
    try {
      console.log('sample tunings', sampleTunings);
      // const params: IUserSubmittedTuning[] = sampleTunings.map(
      //   (tuning, idx) => ({
      //     name: `Sample tuning ${idx}`,
      //     tuning
      //   })
      // );
      // const response = await apiService.userTunings.createMany(params);
      // console.log('RESPONSE', response);
    } catch (error) {
      console.log('ERROR', error);
      return error;
    }
  }
</script>

<section
  class="font-sans grid grid-flow-row sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[calc(100%-5rem)] justify-center mx-auto"
>
  <!-- {#each sampleTunings as sampleTuning}
    <TuningCard tuning={sampleTuning} />
  {/each} -->
</section>
