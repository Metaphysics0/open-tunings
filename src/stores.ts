import { writable } from 'svelte/store';
import { AMERICAN_FOOTBALL_TUNING } from './constants/tunings';
import { browser } from '$app/environment';
import {
  localStorageKeyForLikedTunings,
  localStorageKeyForMuteButton,
  localStorageKeyMap
} from './constants/localStorage';
import type { Note } from '@prisma/client';
import { getTuningFromString } from './services/noteUtils';

function getInitialCurrentTuning(): Note[] {
  if (!browser) return AMERICAN_FOOTBALL_TUNING;
  if (window.location.pathname.includes('/tuning')) {
    const tuningFromPath = window.location.pathname.split('/tuning/')[1];
    return getTuningFromString(tuningFromPath);
  }
  if (localStorage.getItem(localStorageKeyMap.currentTuning)) {
    const locallyStoredTuning = localStorage.getItem(
      localStorageKeyMap.currentTuning
    );

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return getTuningFromString(locallyStoredTuning!);
  }

  return AMERICAN_FOOTBALL_TUNING;
}
export const currentTuning = writable(getInitialCurrentTuning());

export const isBrowserMuted = writable(
  browser && !!localStorage.getItem(localStorageKeyForMuteButton)
);

export const likedTunings = writable(
  (browser && localStorage.getItem(localStorageKeyForLikedTunings)) || ''
);
