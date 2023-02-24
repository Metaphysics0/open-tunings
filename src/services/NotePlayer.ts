import { Sampler, start } from 'tone';
import type { IMusicalNote, IOctave } from '../types/note';
import { browser } from '$app/environment';

class NotePlayer {
  sampler: Sampler | null;
  duration: string;

  constructor() {
    this.duration = '8s';
    this.sampler = !browser
      ? null
      : new Sampler(
          Object.fromEntries(
            NotePlayer.NOTES.map((note) => [
              note,
              `/instruments/electric-guitar/${note}.wav`
            ])
          ),
          {
            onload() {
              console.log('Samples loaded!');
            }
          }
        ).toDestination();
  }

  static NOTES = [
    'A1',
    'A3',
    'B1',
    'B2',
    'B3',
    'D2',
    'D3',
    'E1',
    'E3',
    'G1',
    'G2',
    'G3',
    'G4'
  ];

  play(note: IMusicalNote, octave: IOctave): void {
    if (!this.sampler) return;
    start();

    const fullNote = note + octave;
    this.sampler.triggerAttackRelease(fullNote, this.duration);
  }
}

export const notePlayer = new NotePlayer();
