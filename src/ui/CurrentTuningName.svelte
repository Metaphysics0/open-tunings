<script lang="ts">
  import type { Note, UserSubmittedTuning } from '@prisma/client';
  import {
    commonOpenTunings,
    type IAvailableTuning
  } from '../constants/tunings';
  import { apiService } from '../services/apiService';
  import { currentTuning as currentTuningStore } from '../stores';
  import { areArraysEqual } from '../utils';

  let currentTuningName: string;
  let currentTuning: UserSubmittedTuning;
  let hasName: boolean;

  currentTuningStore.subscribe(async (value) => {
    currentTuning = value;
    currentTuningName = await setCurrentTuningName(value);
  });

  function setCurrentTuningName(
    currentTuning: UserSubmittedTuning
  ): Promise<string> | string {
    if (currentTuning.friendlyName) {
      hasName = true;
      return currentTuning.friendlyName;
    }

    const notes = currentTuning.tuning.map((a) => a.note);

    const locallyStoredTuningName: IAvailableTuning | undefined =
      commonOpenTunings.find((openTuning) =>
        areArraysEqual(openTuning.tuning, notes)
      );
    hasName = !!locallyStoredTuningName;

    if (!locallyStoredTuningName) return fetchCurrentTuningName(notes);

    return locallyStoredTuningName.name;
  }

  async function fetchCurrentTuningName(notes: Note['note'][]): Promise<any> {
    try {
      const response = await apiService.chordFinder.find(notes);
      const data: IChordsLikeResponse = await response.json();
      return data.chordNameAsHtml ?? 'Unknown!';
    } catch (error) {
      console.error('Error fetching tuning name', error);
      return 'Unknown!';
    }
  }
</script>

<div class="mb-5 mt-2 text-lg">
  {#if hasName}
    Tuning Name:
  {:else}
    Closest Chord:
  {/if}
  <span class="font-extrabold">{@html currentTuningName}</span>
</div>
