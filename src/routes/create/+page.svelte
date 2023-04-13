<script lang="ts">
  import type { UserSubmittedTuning } from '@prisma/client';

  import { currentTuning as currentTuningStore } from '../../stores';
  import Note from '../../ui/note/Note.svelte';
  import Header from '../../ui/Header.svelte';
  import TextInput from '../../ui/inputs/TextInput.svelte';
  import TagsInput from '../../ui/inputs/TagsInput.svelte';
  import PlayAllNotesButton from '../../ui/PlayAllNotesButton.svelte';
  import { apiService } from '../../services/apiService';
  import { paramSanitizers, userSubmittedTuningUtils } from '../../utils';
  import { goto } from '$app/navigation';
  import { getRandomTuningName } from '../../constants/tunings';
  import { toastStore } from '@skeletonlabs/skeleton';

  let currentTuning: UserSubmittedTuning;
  currentTuningStore.subscribe((value) => {
    currentTuning = value;
  });

  let tags: string[] = [];
  let friendlyName: string = getRandomTuningName();

  async function handleSubmit() {
    // @ts-ignore
    const formData = new FormData(this);
    const params = paramSanitizers.createUserTuning(
      formData,
      currentTuning.tuning
    );

    try {
      const response = await apiService.userTunings.create(params);
      const { data, error } = (await response.json()) as {
        data: UserSubmittedTuning;
        error: any;
      };

      if (error) {
        toastStore.trigger({
          message: error,
          background: 'bg-amber font-sans font-bold'
        });
        return;
      }

      const url = userSubmittedTuningUtils.formatTuningNameForUrl(
        data.tuningName
      );

      goto(`/tuning/${url}`, {
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
      title="Create a tuning"
      text="Contribute to the open tunings collection!"
    />
    <section class="flex my-2">
      {#each currentTuning.tuning as noteItem, index}
        <Note {noteItem} {index} />
      {/each}
    </section>
    <PlayAllNotesButton asLink={true} />
    <div class="my-5 mt-7 w-full">
      <TextInput
        value={friendlyName}
        required={true}
        customValidityMessage="Give the tuning a name!"
        name="friendlyName"
        placeholder="My Awesome Tuning"
        label="Tuning Name"
      />
    </div>
    <div class="w-full mb-2 relative">
      <TagsInput {tags} required={true} />
    </div>
    <button
      type="submit"
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
