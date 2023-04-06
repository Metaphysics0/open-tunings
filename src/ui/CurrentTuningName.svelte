<script lang="ts">
  import type { UserSubmittedTuning } from '@prisma/client';
  import {
    commonOpenTunings,
    type IAvailableTuning
  } from '../constants/tunings';
  import { apiService } from '../services/apiService';
  import { currentTuning } from '../stores';
  import type { IMusicalNote, INoteItem } from '../types/note';
  import { areArraysEqual } from '../utils';

  let currentTuningNotes: UserSubmittedTuning['tuning'];
  let currentTuningName: string;
  let isTuningNameLocallyStored: boolean;

  currentTuning.subscribe(async (value) => {
    currentTuningNotes = value;
    currentTuningName = await setCurrentTuningName(value);
  });

  function setCurrentTuningName(
    currentNotes: UserSubmittedTuning['tuning']
  ): Promise<string> | string {
    const notes = currentNotes.map((a) => a.note);

    const locallyStoredTuningName: IAvailableTuning | undefined =
      commonOpenTunings.find((openTuning) =>
        areArraysEqual(openTuning.tuning, notes)
      );
    isTuningNameLocallyStored = !!locallyStoredTuningName;

    if (!locallyStoredTuningName) {
      // @ts-ignore
      return fetchCurrentTuningName(notes);
    }

    return locallyStoredTuningName.name;
  }

  async function fetchCurrentTuningName(notes: IMusicalNote[]): Promise<any> {
    try {
      const response = await apiService.chordFinder.find(notes);
      const data: IChordsLikeResponse = await response.json();
      return data.chordNameAsHtml;
    } catch (error) {
      console.error('Error fetching tuning', error);
    }
  }
</script>

<div class="mb-5 mt-2 text-lg">
  {#if isTuningNameLocallyStored}
    Current Tuning:
  {:else}
    Closest Chord:
  {/if}
  <span class="font-extrabold">{@html currentTuningName}</span>
</div>
