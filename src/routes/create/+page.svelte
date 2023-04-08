<script lang="ts">
  import type { Prisma, UserSubmittedTuning } from '@prisma/client';

  import { currentTuning } from '../../stores';
  import Note from '../../ui/note/Note.svelte';
  import Header from '../../ui/Header.svelte';
  import TextInput from '../../ui/general/TextInput.svelte';
  import Chips from '../../ui/general/Chips.svelte';
  import PlayAllNotesButton from '../../ui/PlayAllNotesButton.svelte';
  import { apiService } from '../../services/apiService';
  import { paramSanitizers } from '../../utils';
  import { goto } from '$app/navigation';

  let currentTuningNotes: UserSubmittedTuning['tuning'];
  currentTuning.subscribe((value) => {
    currentTuningNotes = value;
  });

  let tags: string[] = [];
  let friendlyName: string = '';

  async function handleSubmit() {
    // @ts-ignore
    const formData = new FormData(this);
    const params = paramSanitizers.createUserTuning(
      formData,
      currentTuningNotes
    );
    try {
      const response = await apiService.userTunings.create(params);
      const { data } = (await response.json()) as { data: UserSubmittedTuning };
      goto(`/tuning/${data.tuningName}`, {
        invalidateAll: true
      });
    } catch (error) {
      console.error('Error creating tuning!', error);
    }
  }
</script>

<svelte:head>
  <title>Open Tunings | Create!</title>
  <meta
    name="title"
    content="Open Tunings | create and save your own open tuning for the guitar!"
  />
</svelte:head>

<main class="font-sans flex flex-col items-center w-fit mx-auto">
  <form
    class="w-full flex flex-col items-center"
    method="POST"
    on:submit|preventDefault={handleSubmit}
  >
    <Header
      title={'Create a tuning!'}
      shouldHideSubtext={true}
      customStyles="mb-4"
    />
    <div class="mb-3 text-lg">
      <TextInput
        value={friendlyName}
        name="friendlyName"
        placeholder="My awesome tuning"
        label="Tuning Name:"
        autofocus
      />
    </div>
    <section class="flex">
      {#each currentTuningNotes as noteItem, index}
        <Note {noteItem} {index} />
      {/each}
    </section>
    <PlayAllNotesButton asLink={true} />
    <div class="my-2 w-full">
      <Chips {tags} name="tags" />
    </div>
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
