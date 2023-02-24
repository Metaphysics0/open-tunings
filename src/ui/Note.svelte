<script lang="ts">
  import { notePlayer } from '../services/NotePlayer';
  import type { INoteItem } from '../types/note';

  export let noteItem: INoteItem;

  function playSingleNote(): void {
    notePlayer.play(noteItem);
  }
</script>

<button
  class="bg-slate-2 rounded-xl p-3 w-fit mx-2 flex flex-col cursor-pointer"
  on:click={playSingleNote}
>
  <p class="text-xl">
    {noteItem.note}
  </p>
</button>
