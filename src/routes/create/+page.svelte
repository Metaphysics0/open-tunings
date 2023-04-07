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
  <section class="flex mb-3">
    {#each currentTuningNotes as noteItem, index}
      <Note {noteItem} {index} />
    {/each}
  </section>
  <form>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="tags-wrap" on:click={openTagsModal}>
      <Tags bind:tags onlyUnique={true} placeholder={'Add Tags'} />
    </div>
    <TextInput value={name} {name} placeholder="Give it a name! (Optional)" />

    <button>Submit!</button>
  </form>
</main>

{#if browser}
  <Modals>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div slot="backdrop" class="backdrop" on:click={closeModal} />
  </Modals>
{/if}

<style>
  form {
    display: flex;
    flex-direction: column;
  }
</style>
