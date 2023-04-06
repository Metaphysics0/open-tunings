import { writable } from 'svelte/store';
import { AMERICAN_FOOTBALL_TUNING } from './constants/tunings';
import { browser } from '$app/environment';
import { localStorageKeyForLikedTunings } from './constants/user';
import type { Note } from '@prisma/client';

function getInitialCurrentTuning(): Note[] {
  if (!browser) return AMERICAN_FOOTBALL_TUNING;
  console.log('AHH', window.location.pathname);

  return AMERICAN_FOOTBALL_TUNING;
}
export const currentTuning = writable(getInitialCurrentTuning());

export const isBrowserMuted = writable(false);

export const likedTunings = writable(
  (browser && localStorage.getItem(localStorageKeyForLikedTunings)) || ''
);
