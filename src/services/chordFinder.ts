/* eslint-disable prefer-const */
export class Chord {
  rootName: string;
  intervals: number[];
  chordType: string;
  rootIndex: number | undefined;
  constructor(notes: any[], key: string) {
    const notesInC = [
      'C',
      'C#',
      'D',
      'D#',
      'E',
      'F',
      'F#',
      'G',
      'G#',
      'A',
      'A#',
      'B'
    ];
    const chordIntervals = [0, 3, 6, 10]; // Root, minor third, diminished fifth, minor seventh
    const chordNotes: number[] = [];

    // Convert notes to intervals
    notes.forEach((note) => {
      const noteIndex = notesInC.indexOf(note);
      if (noteIndex === -1) {
        throw new Error('Invalid note: ' + note);
      }
      let transposedNote = (noteIndex + 12 - notesInC.indexOf(key)) % 12;
      chordNotes.push(transposedNote);
    });

    // Sort intervals
    chordNotes.sort((a, b) => a - b);

    // Find root note
    let root = chordNotes[0];
    this.rootName = notesInC[(root + notesInC.indexOf(key)) % 12];

    // Check for unison or octave
    if (chordNotes.every((note) => note === root)) {
      this.intervals = [0];
      this.chordType = 'unison';
      return;
    } else if (chordNotes.every((note) => note === (root + 12) % 12)) {
      this.intervals = [0, 14];
      this.chordType = 'add9';
      return;
    }

    // Check for power chords
    if (chordNotes.length === 2 && chordNotes[1] - chordNotes[0] === 7) {
      this.intervals = [0, 7];
      this.chordType = 'power';
      return;
    }

    // Check for intervals
    this.intervals = chordNotes.map((note) => (note - root + 12) % 12);
    if (this.intervals.every((interval) => chordIntervals.includes(interval))) {
      // Seventh chord
      if (this.intervals.includes(10)) {
        this.chordType = 'm7';
        if (this.intervals.includes(5)) this.chordType += 'b5';
        if (this.intervals.includes(11)) this.chordType += '9';
      } else {
        this.chordType = 'm';
        if (this.intervals.includes(5)) this.chordType += 'b5';
        if (this.intervals.includes(11)) this.chordType += '11';
      }
      return;
    }

    throw new Error('Unknown chord');
  }

  getName() {
    return this.rootName + this.chordType;
  }

  getNotes() {
    const notesInC = [
      'C',
      'C#',
      'D',
      'D#',
      'E',
      'F',
      'F#',
      'G',
      'G#',
      'A',
      'A#',
      'B'
    ];
    let notes: string[] = [];
    this.intervals.forEach((interval) =>
      notes.push(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        notesInC[(this.rootIndex + interval + notesInC.indexOf(key)) % 12]
      )
    );
    return notes;
  }
}
