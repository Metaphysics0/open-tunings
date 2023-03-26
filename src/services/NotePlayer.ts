import { Sampler, Sequence, start, Transport, Context } from 'tone';
import type { INoteItem } from '../types/note';
import { browser } from '$app/environment';
import type { Time } from 'tone/build/esm/core/type/Units';

class NotePlayer {
  sampler: Sampler | null;
  context: Context | null;
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
    this.duration = '2s';
    this.sampler = this.noteSampler;
    this.context = this.noteContext;

    start();
    // Context.
    // Context.setContext()
  }

  play(noteItem: INoteItem, durationInMs?: Time): void {
    if (!this.sampler) return;

    const fullNote = noteItem.note + noteItem.octave;

    this.sampler.triggerAttackRelease(fullNote, durationInMs || this.duration);
  }

  playMany(notes: INoteItem[]): void {
    if (!this.sampler) return;
    Transport.start();
    this.getPlayAllNotesSequence(notes).start();
  }

  stop(): void {
    Transport.stop();
    Transport.cancel();
  }

  private getPlayAllNotesSequence(notes: INoteItem[]): Sequence {
    return new Sequence({
      subdivision: '32n',
      loop: false,
      events: notes,
      callback: (time, note) => this.play(note, '3ms')
    });
  }

  private get noteSampler(): Sampler | null {
    if (!browser) return null;
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

  private get noteContext(): Context | null {
    if (!browser) return null;
    return new Context({ latencyHint: 'interactive', lookAhead: 0 });
  }
}

export const notePlayer = new NotePlayer();
