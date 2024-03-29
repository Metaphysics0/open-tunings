import createUserTuningParamSanitizer from './sanitizers/sanitizeFormDataForUserTuning';
import {
  formatTuningNameForUrl,
  getTuningNameFromUrl
} from './userSubmittedTuning';

export function areArraysEqual(a1: unknown[], a2: unknown[]): boolean {
  return (
    a1.length === a2.length && a1.every((value, index) => value === a2[index])
  );
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function _noop(...any: any[]) {}

export function getRandomElementFromArray(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const userSubmittedTuningUtils = {
  formatTuningNameForUrl,
  getTuningNameFromUrl
};

export const paramSanitizers = {
  createUserTuning: createUserTuningParamSanitizer
};
