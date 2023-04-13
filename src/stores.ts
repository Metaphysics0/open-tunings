import { writable } from 'svelte/store';
import { AMERICAN_FOOTBALL_TUNING, STANDARD_TUNING } from './constants/tunings';
import { browser } from '$app/environment';
import {
  localStorageKeyForLikedTunings,
  localStorageKeyForMuteButton,
  localStorageKeyMap
} from './constants/localStorage';
import type { Note, UserSubmittedTuning } from '@prisma/client';
import { getTuningFromString } from './services/noteUtils';

function getInitialCurrentTuning(): UserSubmittedTuning {
  if (browser && window.location.pathname.includes('/create')) {
    return STANDARD_TUNING;
  }
  // if (localStorage.getItem(localStorageKeyMap.currentTuning)) {
  //   const locallyStoredTuning = localStorage.getItem(
  //     localStorageKeyMap.currentTuning
  //   );

  //   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //   return getTuningFromString(locallyStoredTuning!);
  // }

  return AMERICAN_FOOTBALL_TUNING;
}
export const currentTuning = writable(getInitialCurrentTuning());

export const isBrowserMuted = writable(
  browser && localStorage.getItem(localStorageKeyForMuteButton) === 'true'
);

export const likedTunings = writable(
  (browser && localStorage.getItem(localStorageKeyForLikedTunings)) || ''
);
