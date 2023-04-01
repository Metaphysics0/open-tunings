import { writable } from 'svelte/store';
import { AMERICAN_FOOTBALL_TUNING } from './constants/tunings';

export const currentTuning = writable(AMERICAN_FOOTBALL_TUNING);
