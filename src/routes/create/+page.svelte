<script lang="ts">
  import type { UserSubmittedTuning } from '@prisma/client';
  import { Modals, closeModal, openModal } from 'svelte-modals';

  // @ts-ignore
  import Tags from 'svelte-tags-input';

  import { currentTuning } from '../../stores';
  import Note from '../../ui/note/Note.svelte';
  import Header from '../../ui/Header.svelte';
  import TextInput from '../../ui/general/TextInput.svelte';
  import TagsModal from '../../ui/modals/TagsModal.svelte';
  import { browser } from '$app/environment';
  import Chips from '../../ui/general/Chips.svelte';

  let currentTuningNotes: UserSubmittedTuning['tuning'];
  currentTuning.subscribe((value) => {
    currentTuningNotes = value;
  });

  function openTagsModal() {
    openModal(TagsModal, { title: 'Alert', message: 'This is an alert' });
  }

  let tags: string[] = [];
  let name: string = '';
</script>

<main class="font-sans flex flex-col items-center mb-9">
  <Header
    text={'Contribute to the Open Tunings collection!'}
    title={'Create a tuning!'}
  />
  <div class="mb-2 text-lg">
    Tuning Name:
    <TextInput value={name} {name} placeholder="My awesome tuning" />
  </div>
  <section class="flex mb-3">
    {#each currentTuningNotes as noteItem, index}
      <Note {noteItem} {index} />
    {/each}
  </section>
  <form>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- <div class="tags-wrap" on:click={openTagsModal}>
      <Tags bind:tags onlyUnique={true} placeholder={'Add Tags'} />
    </div> -->
    <Chips />

    <button>Submit!</button>
  </form>
</main>

<style>
  form {
    display: flex;
    flex-direction: column;
  }
</style>
