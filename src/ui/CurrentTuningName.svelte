<script lang="ts">
  import type { UserSubmittedTuning } from '@prisma/client';
  import { apiService } from '../services/apiService';
  import { currentTuning as currentTuningStore } from '../stores';
  let currentTuning: UserSubmittedTuning;

  currentTuningStore.subscribe(async (value) => {
    currentTuning = value;
  });

  async function fetchClosestChord(): Promise<string | null> {
    try {
      const response = await apiService.chordFinder.find(
        currentTuning.tuning.map((n) => n.note)
      );
      const data: IChordsLikeResponse = await response.json();
      return data?.chordNameAsHtml || null;
    } catch (error) {
      console.error('Error fetching tuning name', error);
      return null;
    }
  }
  let closestChordPromise = fetchClosestChord();
</script>

<div class="mb-5 mt-2 text-2xl">
  {#if currentTuning.friendlyName}
    Tuning Name: {currentTuning.friendlyName}
  {:else}
    Closest Chord:
    {#await closestChordPromise}
      Loading ...
    {:then closestChord}
      <span class="font-extrabold">{@html closestChord}</span>
    {/await}
  {/if}
</div>
