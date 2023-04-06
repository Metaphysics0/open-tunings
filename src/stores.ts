import { writable } from 'svelte/store';
import { AMERICAN_FOOTBALL_TUNING } from './constants/tunings';
import { browser } from '$app/environment';
import { localStorageKeyForLikedTunings } from './constants/user';

export const currentTuning = writable(AMERICAN_FOOTBALL_TUNING);

export const isBrowserMuted = writable(false);

export const likedTunings = writable(
  (browser && localStorage.getItem(localStorageKeyForLikedTunings)) || ''
);
