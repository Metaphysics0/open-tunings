<script lang="ts">
  import type { IMusicalNote, INoteItem, IOctave } from '../../types/note';
  const notesDescendingFromE: IMusicalNote[] = [
    'E',
    'D#',
    'D',
    'C#',
    'C',
    'B',
    'A#',
    'A',
    'G#',
    'G',
    'F#',
    'F'
  ];
  const octavesDescendingFromTwo: IOctave[] = [2, 1, 0];
</script>

<div class="flex">
  <label class="mr-3" for="lowestNoteValue">Note:</label>
  <select id="lowestNoteValue" class="mr-4" name="lowestNoteValue">
    {#each notesDescendingFromE as note}
      <option value={note}>{note}</option>
    {/each}
  </select>

  <label class="mr-3" for="lowestNoteOctave">Octave:</label>
  <select id="lowestNoteOctave" name="lowestNoteOctave">
    {#each octavesDescendingFromTwo as octave}
      <option value={octave}>{octave}</option>
    {/each}
  </select>
</div>
