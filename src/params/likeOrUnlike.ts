import type { ParamMatcher } from '@sveltejs/kit';
import { likeOrUnlikeAction } from '../constants/userActions';

export const match = ((value: string) => {
  return likeOrUnlikeAction.includes(value);
}) satisfies ParamMatcher;
