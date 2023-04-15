import type { Note, UserSubmittedTuning } from '@prisma/client';
import { getRandomElementFromArray } from '../utils';

export const commonOpenTunings: IAvailableTuning[] = [
  {
    name: 'E Standard',
    tuning: ['E', 'A', 'D', 'G', 'B', 'E']
  },
  {
    name: 'D Standard',
    tuning: ['D', 'G', 'C', 'F', 'A', 'D']
  },
  {
    name: 'C Standard',
    tuning: ['C', 'F', 'A#', 'D#', 'G', 'C']
  },
  {
    name: 'Rise F 😔✊',
    tuning: ['F', 'A', 'D', 'G', 'B', 'E']
  },
  {
    name: 'American Football tuning',
    tuning: ['F', 'A', 'C', 'G', 'C', 'E']
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
    name: 'DADGAD',
    tuning: ['D', 'A', 'D', 'G', 'A', 'D']
  },
  {
    name: 'C6 Modal Tuning',
    tuning: ['C', 'A', 'C', 'G', 'C', 'E']
  }
];

export const STANDARD_TUNING: UserSubmittedTuning = {
  id: '0',
  createdAt: new Date(),
  tuningName: 'E2A2D3G3B3E4',
  friendlyName: 'E Standard',
  tags: [],
  likes: 0,
  tuning: [
    {
      note: 'E',
      octave: 2
    },
    {
      note: 'A',
      octave: 2
    },
    {
      note: 'D',
      octave: 3
    },
    {
      note: 'G',
      octave: 3
    },
    {
      note: 'B',
      octave: 3
    },
    {
      note: 'E',
      octave: 4
    }
  ]
};

export const AMERICAN_FOOTBALL_TUNING: UserSubmittedTuning = {
  id: '2',
  createdAt: new Date(),
  friendlyName: 'American Football Tuning',
  tags: [],
  likes: 0,
  tuningName: 'F2A2C3G3C4E4',
  tuning: [
    {
      note: 'F',
      octave: 2
    },
    {
      note: 'A',
      octave: 2
    },
    {
      note: 'C',
      octave: 3
    },
    {
      note: 'G',
      octave: 3
    },
    {
      note: 'C',
      octave: 4
    },
    {
      note: 'E',
      octave: 4
    }
  ]
};

export const SUPER_EMO_TUNING: Note[] = [
  {
    note: 'C',
    octave: 2
  },
  {
    note: 'G',
    octave: 2
  },
  {
    note: 'D#',
    octave: 3
  },
  {
    note: 'F',
    octave: 3
  },
  {
    note: 'A#',
    octave: 3
  },
  {
    note: 'D',
    octave: 4
  }
];

export const HELLA_EMO: Note[] = [
  {
    note: 'C',
    octave: 2
  },
  {
    note: 'G',
    octave: 2
  },
  {
    note: 'D',
    octave: 3
  },
  {
    note: 'G',
    octave: 3
  },
  {
    note: 'B',
    octave: 3
  },
  {
    note: 'D',
    octave: 4
  }
];

export const JUSTIN_PHILLIPS_TYPE_BEAT: Note[] = [
  {
    note: 'D',
    octave: 2
  },
  {
    note: 'A',
    octave: 2
  },
  {
    note: 'E',
    octave: 3
  },
  {
    note: 'A',
    octave: 3
  },
  {
    note: 'C#',
    octave: 3
  },
  {
    note: 'E',
    octave: 4
  }
];

export const DADGAD: Note[] = [
  {
    note: 'D',
    octave: 2
  },
  {
    note: 'A',
    octave: 2
  },
  {
    note: 'D',
    octave: 3
  },
  {
    note: 'G',
    octave: 3
  },
  {
    note: 'A',
    octave: 3
  },
  {
    note: 'D',
    octave: 4
  }
];

export const sampleTunings: Note[][] = [
  SUPER_EMO_TUNING,
  HELLA_EMO,
  JUSTIN_PHILLIPS_TYPE_BEAT,
  DADGAD
];
export interface IAvailableTuning {
  name: string;
  tuning: Note['note'][];
}

const tuningAdjectives = [
  'Ethereal',
  'Powerful',
  'Ambient',
  'Emo',
  'Aggressive',
  'Melodic',
  'Soothing',
  'Experimental',
  'Funky',
  'Energetic',
  'Spacey',
  'Mathmatical',
  'Algebraic',
  'Coloquial',
  'Lyrical',
  'Dreamy',
  'Wonderous',
  'Mysterious',
  'Convoluted',
  'Transcendent',
  'Omnipotent',
  'Enigmatic',
  'Caffinated',
  'Cocaine',
  'Psychedelic',
  'Progressive',
  'Haunting',
  'Explosive',
  'Sublime',
  'Hypnotic',
  'Groovy',
  'Serene',
  'Vibrant',
  'Atmospheric',
  'Dynamic',
  'Romantic',
  'Serendipitous',
  'Nostalgic',
  'Ethereal',
  'Jazzy',
  'Funky',
  'Complex',
  'Intense',
  'Blissful',
  'Trippy',
  'Divine',
  'Whimsical',
  'Electrifying',
  'Cerebral',
  'Soaring',
  'Chilling',
  'Majestic',
  'Reverberating',
  'Brooding',
  'Reflective',
  'Sensual'
];
const tuningNouns = [
  'Vibes',
  'Chords',
  'Tones',
  'Riffs',
  'Strings',
  'Guitars',
  'Harmonies',
  'Sounds',
  'Melodies',
  'Soundz',
  'Riffz',
  'Arpeggios',
  'Sweeps',
  'Taps',
  'Loops',
  'Licks',
  'Notes',
  'Frets',
  'Solos',
  'Strums',
  'Shreds',
  'Hammer-ons',
  'Pull-offs',
  'Bends',
  'Slides',
  'Progressions',
  'Fretwork',
  'Fingerpicking',
  'Power chords',
  'Barre chords',
  'Tremolo picking',
  'Whammy bar effects'
];

const tuningNamePlaceholders = Array.from(
  { length: tuningAdjectives.length * tuningNouns.length },
  () => {
    const adjective = getRandomElementFromArray(tuningAdjectives);
    const noun = getRandomElementFromArray(tuningNouns);
    return `${adjective} ${noun}`;
  }
);

export const getRandomTuningName = () =>
  getRandomElementFromArray(tuningNamePlaceholders);
