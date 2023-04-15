import type { Note, Prisma } from '@prisma/client';
import { getTuningNameAsString } from '../../services/noteUtils';
import { musicalNotes } from '../../constants/note';

export default function transformFormData(
  formData: FormData,
  tuning: Note[]
): Prisma.UserSubmittedTuningCreateInput {
  const tags = formData.getAll('tags');
  const friendlyName = formData.get('friendlyName');

  ensureTuningIsValid(tuning);

  const transformedTags = tags.map((tag) => tag.toString());
  const transformedFriendlyName = friendlyName ? friendlyName.toString() : null;

  return {
    tags: transformedTags,
    tuningName: getTuningNameAsString(tuning),
    friendlyName: transformedFriendlyName,
    tuning
  };
}

function ensureTuningIsValid(tuning: Note[]) {
  tuning.forEach((noteItem) => {
    if (!musicalNotes.includes(noteItem.note as (typeof musicalNotes)[number]))
      throw 'Invalid notes provided';
  });
}
