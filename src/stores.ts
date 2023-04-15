import { writable, type Writable } from 'svelte/store';
import { AMERICAN_FOOTBALL_TUNING, STANDARD_TUNING } from './constants/tunings';
import { browser } from '$app/environment';
import {
  localStorageKeyForLikedTunings,
  localStorageKeyForMuteButton,
  localStorageKeyMap
} from './constants/localStorage';
import type { UserSubmittedTuning } from '@prisma/client';
import { localStorageStore } from '@skeletonlabs/skeleton';

function getInitialCurrentTuning(): UserSubmittedTuning {
  if (browser && window.location.pathname.includes('/create')) {
    return STANDARD_TUNING;
  }

  return AMERICAN_FOOTBALL_TUNING;
}
export const currentTuning = writable(getInitialCurrentTuning());

// export const isBrowserMuted = writable(
//   browser && localStorage.getItem(localStorageKeyForMuteButton) === 'true'
// );

export const isBrowserMuted: Writable<string> = localStorageStore(
  localStorageKeyMap.hasMuted,
  (browser && localStorage.getItem(localStorageKeyMap.hasMuted)) || ''
);

export const likedTunings: Writable<string> = localStorageStore(
  localStorageKeyMap.likedTunings,
  (browser && localStorage.getItem(localStorageKeyMap.likedTunings)) || ''
);
