<script lang="ts">
  import type { UserSubmittedTuning } from '@prisma/client';

  import { currentTuning } from '../../stores';
  import Note from '../../ui/note/Note.svelte';
  import Header from '../../ui/Header.svelte';
  import TextInput from '../../ui/general/TextInput.svelte';
  import Chips from '../../ui/general/Chips.svelte';
  import PlayAllNotesButton from '../../ui/PlayAllNotesButton.svelte';
  import { apiService } from '../../services/apiService';

  let currentTuningNotes: UserSubmittedTuning['tuning'];
  currentTuning.subscribe((value) => {
    currentTuningNotes = value;
  });

  let tags: string[] = [];
  let friendlyName: string = '';

  async function handleSubmit() {
    // @ts-ignore
    const data = new FormData(this);
    const params = {
      tags: data.getAll('tags'),
      friendlyName: data.get('friendlyName'),
      tuning: currentTuningNotes
    };

    // @ts-ignore
    const response = await apiService.userTunings.create(params);
    const j = await response.json();
    console.log('RESPONSE', j);
  }
</script>

<main class="font-sans flex flex-col items-center w-fit mx-auto">
  <form
    class="w-full flex flex-col items-center"
    method="POST"
    on:submit|preventDefault={handleSubmit}
  >
    <Header
      text={'Contribute to the Open Tunings collection!'}
      title={'Create a tuning!'}
    />
    <div class="mb-2 text-lg">
      Tuning Name:
      <TextInput
        value={friendlyName}
        name="friendlyName"
        placeholder="My awesome tuning"
      />
    </div>
    <section class="flex mb-3">
      {#each currentTuningNotes as noteItem, index}
        <Note {noteItem} {index} />
      {/each}
    </section>
    <PlayAllNotesButton btnColor="blue" />
    <div class="mb-3" />
    <Chips {tags} name="tags" />
    <button
      class="w-full py-2 px-3 bg-red-500 hover:bg-red-400 text-white font-semibold p-2 rounded-lg shadow-md transition duration-75 cursor-pointer"
      >Submit!</button
    >
  </form>
</main>

<style>
  form {
    display: flex;
    flex-direction: column;
  }
</style>
