import { Sampler, start } from 'tone';
import type { INoteItem } from '../types/note';
import { browser } from '$app/environment';

class NotePlayer {
  sampler: Sampler | null;
  private readonly duration: string;
  private static readonly NOTES = [
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

  play(noteItem: INoteItem): void {
    if (!this.sampler) return;
    start();

    const fullNote = noteItem.note + noteItem.octave;
    this.sampler.triggerAttackRelease(fullNote, this.duration);
  }

  playMany(notes: INoteItem[]): void {
    if (!this.sampler) return;
    start();

    notes.forEach((note, idx) =>
      setTimeout(() => {
        this.play(note);
      }, idx * 550)
    );
  }
}

export const notePlayer = new NotePlayer();
