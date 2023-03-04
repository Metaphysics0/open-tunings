<script lang="ts">
  import Checkbox from './Checkbox.svelte';
  import Range from './Range.svelte';

  // const defaultLowestNoteItem: INoteItem = {
  //   note: 'A',
  //   octave: 0
  // };
</script>

<form class="font-sans mt-5 mx-auto w-[calc(100%_-_15rem)]" method="POST">
  <h3 class="text-2xl font-bold ml-3 mb-1">🧠 Generate a tuning!</h3>
  <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />

  <div>
    <p>1. What kind of mood are you going for? (select all that apply)</p>
    <Checkbox label="Ambient" />
  </div>

  <div>
    <p>2. What's the lowest note you're willing to tune to?</p>
  </div>
  <div>
    <p>2. How experimental are you willing to go?</p>
    <Range />
  </div>
</form>
