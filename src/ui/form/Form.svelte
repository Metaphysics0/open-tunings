<script lang="ts">
  import Button from '../general/Button.svelte';
  import Checkbox from './Checkbox.svelte';
  import Range from './Range.svelte';
  import FaRandom from 'svelte-icons/fa/FaRandom.svelte';
  import { availableMoods } from '../../constants/form';
  import Select from './Select.svelte';

  // Needed for multiple checkboxes
  let selected = availableMoods.map(() => false);

  async function handleSubmit(e: SubmitEvent): Promise<void> {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formDataAsJson = {
      ...Object.fromEntries(formData.entries()),
      selectedMoods: availableMoods.filter((o, i) => selected[i])
    };
    // Connect chatGPT here
  }
</script>

<form
  class="font-sans mt-5 mx-auto w-[calc(100%_-_15rem)]"
  method="POST"
  on:submit|preventDefault={handleSubmit}
>
  <h3 class="text-2xl font-bold mb-1">🧠 Generate a tuning!</h3>
  <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-3" />

  <div class="mb-5">
    <p class="mb-2">
      1. What kind of mood are you going for? (select all that apply)
    </p>
    <div class="flex">
      {#each availableMoods as mood, index}
        <Checkbox bind:checked={selected[index]} label={mood} value={mood} />
      {/each}
    </div>
  </div>

  <div class="mb-5">
    <p class="mb-2">
      2. What's the lowest you're willing to tune your 6th string to?
    </p>
    <Select />
  </div>
  <div class="mb-5">
    <p class="mb-2">3. How experimental do you want to go?</p>
    <Range />
  </div>

  <Button icon={FaRandom} text="Generate" color="blue" />
</form>
