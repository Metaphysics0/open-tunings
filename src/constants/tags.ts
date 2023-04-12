export const moods = [
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
  { label: 'dominant', emoji: '😠' },
  { label: 'strong', emoji: '💪' },
  { label: 'dramatic', emoji: '🎭' },
  { label: 'vibey', emoji: '🏄' },
  { label: 'fun', emoji: '🤪' }
];

export const genres = [
  { label: 'lofi', emoji: null },
  { label: 'post-rock', emoji: null },
  { label: 'metal', emoji: null },
  { label: 'post-hardcore', emoji: null },
  { label: 'minor', emoji: null },
  { label: 'major', emoji: null },
  { label: 'lydian', emoji: null }
];

export const AVAILABLE_TAGS: string[] = [...genres, ...moods].map(
  (t) => t.label
);

interface IAvailableTag {
  label: string;
  emoji: string | null;
}
