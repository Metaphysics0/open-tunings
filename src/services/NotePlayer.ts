import { Sampler, start } from 'tone';
import type { INoteItem } from '../types/note';
import { browser } from '$app/environment';

class NotePlayer {
  sampler: Sampler | null;
  private readonly duration: string;
  private static readonly NOTES = [
    'A2',
    'A4',
    'B2',
    'B3',
    'B4',
    'D3',
    'D4',
    'E2',
    'E4',
    'G2',
    'G3',
    'G4',
    'G5'
  ];
  constructor() {
    this.duration = '8s';
    this.sampler = !browser ? null : this.noteSampler;
  }

  play(noteItem: INoteItem): void {
    if (!this.sampler) return;
    start();

    const fullNote = noteItem.note + noteItem.octave;
    this.sampler.triggerAttackRelease(fullNote, this.duration);
  }

  playMany(notes: INoteItem[], durationInMsBetweenEachNote = 550): void {
    if (!this.sampler) return;
    start();

    notes.forEach((note, idx) =>
      setTimeout(() => {
        this.play(note);
      }, idx * durationInMsBetweenEachNote)
    );
  }

  private get noteSampler(): Sampler {
    return new Sampler(
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
}

export const notePlayer = new NotePlayer();
