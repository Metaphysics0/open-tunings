import type { IMusicalNote } from '../types/note';

export const commonOpenTunings: IAvailableTuning[] = [
  {
    name: 'Standard Tuning',
    tuning: ['E', 'A', 'D', 'G', 'B', 'E']
  },
  {
    name: 'Rise F 😔✊',
    tuning: ['F', 'A', 'D', 'G', 'B', 'E']
  },
  {
    name: '88 Pandas Tuning 🐼',
    tuning: ['C', 'G', 'D#', 'F', 'A#', 'D']
  },
  {
    name: 'Open A',
    tuning: ['E', 'A', 'C#', 'E', 'A', 'E']
  },
  {
    name: 'Open B',
    tuning: ['B', 'F#', 'B', 'F#', 'B', 'D#']
  },
  {
    name: 'Open C',
    tuning: ['C', 'G', 'C', 'G', 'C', 'E']
  },
  {
    name: 'Open D',
    tuning: ['D', 'A', 'D', 'F#', 'A', 'D']
  },
  {
    name: 'Open E',
    tuning: ['E', 'B', 'E', 'G#', 'B', 'E']
  },
  {
    name: 'Open F',
    tuning: ['C', 'F', 'C', 'F', 'A', 'F']
  },
  {
    name: 'Open G',
    tuning: ['D', 'G', 'D', 'G', 'B', 'D']
  },
  {
    name: 'Minor Third',
    tuning: ['C', 'D#', 'F#', 'A', 'C', 'D#']
  },
  {
    name: 'Major Third',
    tuning: ['G#', 'C', 'E', 'G#', 'C', 'E']
  },
  {
    name: 'All Fourths',
    tuning: ['E', 'A', 'D', 'G', 'C', 'F']
  },
  {
    name: 'Augmented Fourths',
    tuning: ['C', 'F#', 'C', 'F#', 'C', 'F#']
  },
  {
    name: 'All Fifths',
    tuning: ['C', 'G', 'D', 'A', 'E', 'B']
  },
  {
    name: 'Half Step Down',
    tuning: ['D#', 'G#', 'C#', 'F#', 'A#', 'D#']
  },
  {
    name: 'Full Step Down',
    tuning: ['D', 'G', 'C', 'F', 'A', 'D']
  },
  {
    name: '1 and 1/2 Steps Down',
    tuning: ['C#', 'F#', 'B', 'E', 'G#', 'C#']
  },
  {
    name: 'Double Drop D',
    tuning: ['D', 'A', 'D', 'G', 'B', 'D']
  },
  {
    name: 'Drop A',
    tuning: ['A', 'E', 'A', 'D', 'F#', 'B']
  },
  {
    name: 'Drop B',
    tuning: ['B', 'F#', 'B', 'E', 'G#', 'C#']
  },
  {
    name: 'Drop C',
    tuning: ['C', 'G', 'C', 'F', 'A', 'D']
  },
  {
    name: 'Drop D',
    tuning: ['D', 'A', 'D', 'G', 'B', 'E']
  },
  {
    name: 'Drop E',
    tuning: ['E', 'B', 'E', 'A', 'C#', 'F#']
  },
  {
    name: 'Drop F',
    tuning: ['F', 'C', 'F', 'A#', 'D', 'G']
  },
  {
    name: 'Drop G',
    tuning: ['G', 'D', 'G', 'C', 'E', 'A']
  },
  {
    name: 'The Iommi Tuning',
    tuning: ['C#', 'F#', 'B', 'E', 'G#', 'C#']
  },
  {
    name: 'The Nick Drake Tuning',
    tuning: ['C', 'G', 'C', 'F', 'C', 'E']
  },
  {
    name: 'DAD GAD',
    tuning: ['D', 'A', 'D', 'G', 'A', 'D']
  },
  {
    name: 'C6 Modal Tuning',
    tuning: ['C', 'A', 'C', 'G', 'C', 'E']
  }
];

export interface IAvailableTuning {
  name: string;
  tuning: IMusicalNote[];
}
