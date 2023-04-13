export const moods: IAvailableTag[] = [
  { label: 'ambient', emoji: '🌌' },
  { label: 'ethereal', emoji: '👽' },
  { label: 'emo', emoji: '🖤' },
  { label: 'chaotic', emoji: '👹' },
  { label: 'melancholic', emoji: '🌚' },
  { label: 'moody', emoji: '😒' },
  { label: 'somber', emoji: '😔' },
  { label: 'happy', emoji: '😄' },
  { label: 'sad', emoji: '😢' },
  { label: 'rainy day', emoji: '☔️' },
  { label: 'cold', emoji: '️☃️' },
  { label: 'summer', emoji: '🌞' },
  { label: 'bright', emoji: '🌟' },
  { label: 'dark', emoji: '️🌒' },
  { label: 'dominant', emoji: '😠' },
  { label: 'strong', emoji: '💪' },
  { label: 'dramatic', emoji: '🎭' },
  { label: 'vibey', emoji: '🏄' },
  { label: 'fun', emoji: '🤪' }
];

export const styles: IAvailableTag[] = [
  { label: 'lofi', emoji: '📚' },
  { label: 'post-rock', emoji: '🪨' },
  { label: 'metal', emoji: '🤘' },
  { label: 'post-hardcore', emoji: '🎸' },
  { label: 'minor', emoji: '😭' },
  { label: 'major', emoji: '😃' },
  { label: 'lydian', emoji: '😇' }
];

export const AVAILABLE_TAGS: string[] = [...styles, ...moods].map(
  (t) => t.label
);

export interface IAvailableTag {
  label: string;
  emoji: string | null;
}

export function filterTagsByLabelStartsWith(
  availableTags: { [key: string]: IAvailableTag[] },
  inputString: string
): { [key: string]: IAvailableTag[] } {
  const filteredTags: { [key: string]: IAvailableTag[] } = {};
  for (const key in availableTags) {
    if (Object.prototype.hasOwnProperty.call(availableTags, key)) {
      const tagsArray = availableTags[key];
      const filteredArray = tagsArray.filter((tag) =>
        tag.label.toLowerCase().startsWith(inputString.toLowerCase())
      );
      if (filteredArray.length > 0) {
        filteredTags[key] = filteredArray;
      }
    }
  }
  return filteredTags;
}
