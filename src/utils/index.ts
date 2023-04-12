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

export const userSubmittedTuningUtils = {
  formatTuningNameForUrl,
  getTuningNameFromUrl
};

export const paramSanitizers = {
  createUserTuning: createUserTuningParamSanitizer
};
