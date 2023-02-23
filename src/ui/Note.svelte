<script lang="ts">
  import type { IMusicalNote } from '../types/note';

  export let note: IMusicalNote;
</script>

<button
  class="bg-slate-2 rounded-xl p-3 w-fit mx-2 flex flex-col cursor-pointer"
  on:click={() => alert('ahh')}
>
  <p class="text-xl">
    {note}
  </p>
</button>
