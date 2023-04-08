import type { Note, Prisma } from '@prisma/client';
import { getTuningNameAsString } from '../../services/noteUtils';

export default function transformFormData(
  formData: FormData,
  tuning: Note[]
): Prisma.UserSubmittedTuningCreateInput {
  const tags = formData.getAll('tags');
  const friendlyName = formData.get('friendlyName');

  const transformedTags = tags.map((tag) => tag.toString());
  const transformedFriendlyName = friendlyName ? friendlyName.toString() : null;

  return {
    tags: transformedTags,
    tuningName: getTuningNameAsString(tuning),
    friendlyName: transformedFriendlyName,
    tuning
  };
}
