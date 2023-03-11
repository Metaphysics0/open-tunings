<script lang="ts">
  import {
    commonOpenTunings,
    type IAvailableTuning
  } from '../constants/tunings';
  import { apiService } from '../services/apiService';
  import { currentTuning } from '../stores';
  import type { IMusicalNote, INoteItem } from '../types/note';
  import { areArraysEqual } from '../utils';

  let currentTuningNotes: INoteItem[];
  let currentTuningName: string;

  currentTuning.subscribe(async (value) => {
    currentTuningNotes = value;
    currentTuningName = await setCurrentTuningName(value);
  });

  function setCurrentTuningName(
    currentNotes: INoteItem[]
  ): Promise<string> | string {
    const notes = currentNotes.map((a) => a.note);

    const locallyStoredTuningName: IAvailableTuning | undefined =
      commonOpenTunings.find((openTuning) =>
        areArraysEqual(openTuning.tuning, notes)
      );

    if (!locallyStoredTuningName) {
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
  Current tuning:
  <span class="font-extrabold">{@html currentTuningName}</span>
</div>
