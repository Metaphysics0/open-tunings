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

export const styles = [
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

interface IAvailableTag {
  label: string;
  emoji: string | null;
}
