import { writable } from 'svelte/store';
import { STANDARD_TUNING } from './constants/note';

export const currentTuning = writable(STANDARD_TUNING);
